/**
 * Cloudflare DNS management via REST API
 * Env vars: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ZONE_ID
 */

const CF_BASE = "https://api.cloudflare.com/client/v4";

function headers() {
  return {
    "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
    "Content-Type": "application/json",
  };
}

export interface DnsRecord {
  id: string;
  type: string;
  name: string;
  content: string;
  proxied: boolean;
  ttl: number;
}

/**
 * Create a DNS record (CNAME or A)
 */
export async function createDnsRecord(
  subdomain: string,
  target: string,
  type: "CNAME" | "A" = "CNAME",
  rootDomain = process.env.ROOT_DOMAIN || "weedkerwing.dev"
): Promise<{ id: string; success: boolean; error?: string }> {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  if (!zoneId || !process.env.CLOUDFLARE_API_TOKEN) {
    return { id: "mock-" + Date.now(), success: true }; // dev fallback
  }

  const res = await fetch(`${CF_BASE}/zones/${zoneId}/dns_records`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      type,
      name: `${subdomain}.${rootDomain}`,
      content: target,
      proxied: false,
      ttl: 1, // auto
    }),
  });

  const data = await res.json();
  if (!data.success) {
    const err = data.errors?.[0]?.message || "Cloudflare error";
    return { id: "", success: false, error: err };
  }
  return { id: data.result.id, success: true };
}

/**
 * Delete a DNS record by its Cloudflare record ID
 */
export async function deleteDnsRecord(cfRecordId: string): Promise<boolean> {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  if (!zoneId || !process.env.CLOUDFLARE_API_TOKEN) return true; // dev fallback

  if (cfRecordId.startsWith("mock-")) return true;

  const res = await fetch(`${CF_BASE}/zones/${zoneId}/dns_records/${cfRecordId}`, {
    method: "DELETE",
    headers: headers(),
  });
  const data = await res.json();
  return data.success;
}

/**
 * List all DNS records for the zone
 */
export async function listDnsRecords(): Promise<DnsRecord[]> {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  if (!zoneId || !process.env.CLOUDFLARE_API_TOKEN) return [];

  const res = await fetch(`${CF_BASE}/zones/${zoneId}/dns_records?per_page=100`, {
    headers: headers(),
  });
  const data = await res.json();
  return data.success ? data.result : [];
}

/**
 * Check if a subdomain already exists in Cloudflare
 */
export async function checkSubdomainAvailable(
  subdomain: string,
  rootDomain = process.env.ROOT_DOMAIN || "weedkerwing.dev"
): Promise<boolean> {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  if (!zoneId || !process.env.CLOUDFLARE_API_TOKEN) return true; // dev fallback

  const name = `${subdomain}.${rootDomain}`;
  const res = await fetch(`${CF_BASE}/zones/${zoneId}/dns_records?name=${name}`, {
    headers: headers(),
  });
  const data = await res.json();
  return data.success && data.result.length === 0;
}
