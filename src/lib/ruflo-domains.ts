/**
 * Ruflo Agent Orchestration for Subdomain Management
 * Extends the core ruflo.ts pattern for domain ordering workflows.
 */

import type { RufloSwarmConfig, RufloAgent } from "./ruflo";

/** Agent team for subdomain order processing */
export const DOMAIN_AGENTS: RufloAgent[] = [
  { type: "validator", name: "subdomain-validator", role: "Validate subdomain format, check availability in DB and Cloudflare, prevent conflicts" },
  { type: "provisioner", name: "dns-provisioner", role: "Create Cloudflare DNS record, update order status, retry on failure" },
  { type: "notifier", name: "client-notifier", role: "Send confirmation email via Resend, notify admin via WhatsApp webhook" },
  { type: "monitor", name: "dns-monitor", role: "Verify DNS propagation after creation, update status to active when confirmed" },
];

export const DOMAIN_SWARM_CONFIG: RufloSwarmConfig = {
  topology: "hierarchical",
  maxAgents: 4,
  strategy: "specialized",
};

export const DOMAIN_MEMORY_NAMESPACE = "subdomain-orders";

/**
 * Build swarm config for a new subdomain order
 */
export function buildDomainOrderSwarmConfig(order: {
  subdomain: string;
  target: string;
  clientName: string;
}) {
  return {
    swarmConfig: DOMAIN_SWARM_CONFIG,
    agents: DOMAIN_AGENTS,
    memoryNamespace: DOMAIN_MEMORY_NAMESPACE,
    context: {
      action: "provision_subdomain",
      subdomain: order.subdomain,
      target: order.target,
      client: order.clientName,
    },
  };
}

/**
 * Memory params for storing order state
 */
export function buildDomainMemoryParams(orderId: string, data: Record<string, unknown>) {
  return {
    namespace: DOMAIN_MEMORY_NAMESPACE,
    key: `order:${orderId}`,
    value: JSON.stringify({ ...data, updatedAt: new Date().toISOString() }),
  };
}

/**
 * Make.com webhook payload for automation trigger
 */
export function buildMakeWebhookPayload(order: {
  id: string;
  subdomain: string;
  fullDomain: string;
  target: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  price: number;
  currency: string;
}) {
  return {
    event: "new_subdomain_order",
    timestamp: new Date().toISOString(),
    order: {
      id: order.id,
      subdomain: order.subdomain,
      fullDomain: order.fullDomain,
      target: order.target,
      client: {
        name: order.clientName,
        email: order.clientEmail,
        phone: order.clientPhone,
      },
      pricing: {
        amount: order.price,
        currency: order.currency,
      },
    },
    actions: [
      "verify_payment",
      "create_dns_record",
      "send_confirmation_email",
      "notify_admin",
      "update_order_status",
    ],
  };
}
