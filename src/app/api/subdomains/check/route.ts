import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { checkSubdomainAvailable } from "@/lib/cloudflare";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

function isValidSubdomain(v: string) {
  return /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/.test(v) && v.length >= 3;
}

/* GET /api/subdomains/check?subdomain=foo */
export async function GET(req: NextRequest) {
  const subdomain = req.nextUrl.searchParams.get("subdomain") || "";

  if (!subdomain || subdomain.length < 3) {
    return NextResponse.json({ available: false, message: "Too short" });
  }
  if (!isValidSubdomain(subdomain)) {
    return NextResponse.json({ available: false, message: "Invalid format" });
  }

  const supabase = getSupabase();

  // Check DB
  const { data } = await supabase
    .from("subdomain_orders")
    .select("id")
    .eq("subdomain", subdomain)
    .single();

  if (data) {
    return NextResponse.json({ available: false, message: "Already taken" });
  }

  // Check Cloudflare
  const cfAvailable = await checkSubdomainAvailable(subdomain);
  if (!cfAvailable) {
    return NextResponse.json({ available: false, message: "Already taken" });
  }

  return NextResponse.json({ available: true, message: "Available" });
}
