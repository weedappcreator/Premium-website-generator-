import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, businessName, email, phone, website, service, budget, details, contactMethod } = body;

    const payload = {
      timestamp: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      fullName,
      businessName,
      email,
      phone,
      website: website || "N/A",
      service,
      budget: budget || "Not specified",
      contactMethod,
      details: details || "No details provided",
    };

    let successCount = 0;
    let errors: string[] = [];

    // FALLBACK 1: Web3Forms (Easiest — free, instant email, no signup for testing)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const formData = new FormData();
        formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
        formData.append("subject", `New Strategy Call — ${fullName} (${service})`);
        formData.append("from_name", fullName);
        formData.append("email", email);
        formData.append("phone", phone || "N/A");
        formData.append("business", businessName || "N/A");
        formData.append("website", website || "N/A");
        formData.append("service", service);
        formData.append("budget", budget || "Not specified");
        formData.append("contact_method", contactMethod);
        formData.append("message", details || "No details provided");

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        if (res.ok) successCount++;
        else errors.push(`Web3Forms: ${res.status}`);
      } catch (e: any) {
        errors.push(`Web3Forms: ${e.message}`);
      }
    }

    // FALLBACK 1: Google Sheets (Primary — most reliable)
    if (process.env.GOOGLE_SHEETS_WEBHOOK) {
      try {
        const res = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) successCount++;
        else errors.push(`Google Sheets: ${res.status}`);
      } catch (e: any) {
        errors.push(`Google Sheets: ${e.message}`);
      }
    }

    // FALLBACK 2: Discord Webhook (Instant notification)
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        const discordMsg = {
          embeds: [{
            title: "🔥 New Strategy Call Request",
            color: 0x3b82f6,
            fields: [
              { name: "Name", value: fullName, inline: true },
              { name: "Business", value: businessName || "N/A", inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Phone", value: phone || "N/A", inline: true },
              { name: "Service", value: service, inline: true },
              { name: "Budget", value: budget || "Not specified", inline: true },
              { name: "Details", value: details || "None" },
            ],
            footer: { text: `Contact via: ${contactMethod}` },
            timestamp: new Date().toISOString(),
          }],
        };
        const res = await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordMsg),
        });
        if (res.ok || res.status === 204) successCount++;
        else errors.push(`Discord: ${res.status}`);
      } catch (e: any) {
        errors.push(`Discord: ${e.message}`);
      }
    }

    // FALLBACK 3: Email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Edouard Automation <onboarding@resend.dev>",
            to: [process.env.NOTIFICATION_EMAIL || "your@email.com"],
            subject: `New Strategy Call — ${fullName} (${service})`,
            html: `
              <h2 style="color:#3b82f6">New Strategy Call Request</h2>
              <table style="border-collapse:collapse;width:100%">
                ${Object.entries(payload).map(([key, val]) => 
                  `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">${key}</td><td style="padding:8px;border:1px solid #ddd">${val}</td></tr>`
                ).join("")}
              </table>
            `,
          }),
        });
        if (resendRes.ok) successCount++;
        else errors.push(`Resend: ${resendRes.status}`);
      } catch (e: any) {
        errors.push(`Resend: ${e.message}`);
      }
    }

    // FALLBACK 4: Supabase (if available)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        const { error } = await supabase.from("strategy_calls").insert({
          full_name: fullName,
          business_name: businessName,
          email,
          phone,
          website,
          service,
          budget,
          details,
          contact_method: contactMethod,
        });
        if (!error) successCount++;
        else errors.push(`Supabase: ${error.message}`);
      } catch (e: any) {
        errors.push(`Supabase: ${e.message}`);
      }
    }

    if (successCount === 0) {
      console.error("All notification fallbacks failed:", errors);
      return NextResponse.json(
        { success: false, error: "Failed to submit. Please contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      delivered: successCount,
      message: `Submitted successfully (${successCount} notification(s) sent)` 
    });
  } catch (error: any) {
    console.error("Strategy call submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}
