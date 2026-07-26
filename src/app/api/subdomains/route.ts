import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createDnsRecord } from "@/lib/cloudflare";
import { buildMakeWebhookPayload } from "@/lib/ruflo-domains";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

function isAdmin(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  return auth === `Bearer ${process.env.ADMIN_SECRET}`;
}

function isValidSubdomain(v: string) {
  return /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/.test(v) && v.length >= 3;
}

/* GET /api/subdomains — admin: list all orders */
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("subdomain_orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

/* POST /api/subdomains — create order + provision DNS */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { subdomain, target, clientName, clientEmail, clientPhone, notes, price = 500, currency = "RD$" } = body;

  // Validate
  if (!subdomain || !target || !clientName || !clientEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!isValidSubdomain(subdomain)) {
    return NextResponse.json({ error: "Invalid subdomain format" }, { status: 400 });
  }

  const rootDomain = process.env.ROOT_DOMAIN || "weedkerwing.dev";
  const fullDomain = `${subdomain}.${rootDomain}`;
  const supabase = getSupabase();

  // Check not already taken
  const { data: existing } = await supabase
    .from("subdomain_orders")
    .select("id")
    .eq("subdomain", subdomain)
    .single();

  if (existing) {
    return NextResponse.json({ error: "Subdomain already taken" }, { status: 409 });
  }

  // Create Cloudflare DNS record
  const cf = await createDnsRecord(subdomain, target, "CNAME", rootDomain);

  // Insert order to Supabase
  const { data: order, error } = await supabase
    .from("subdomain_orders")
    .insert({
      subdomain,
      root_domain: rootDomain,
      full_domain: fullDomain,
      target,
      record_type: "CNAME",
      client_name: clientName,
      client_email: clientEmail,
      client_phone: clientPhone || null,
      price,
      currency,
      status: cf.success ? "active" : "pending",
      cf_record_id: cf.id || null,
      notes: notes || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Trigger Make.com webhook if configured
  const makeUrl = process.env.MAKE_WEBHOOK_URL;
  if (makeUrl && order) {
    fetch(makeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildMakeWebhookPayload({
        id: order.id,
        subdomain: order.subdomain,
        fullDomain: order.full_domain,
        target: order.target,
        clientName: order.client_name,
        clientEmail: order.client_email,
        clientPhone: order.client_phone,
        price: order.price,
        currency: order.currency,
      })),
    }).catch(() => {}); // fire and forget
  }

  return NextResponse.json({
    ...order,
    fullDomain: order.full_domain,
    cfSuccess: cf.success,
  }, { status: 201 });
}
