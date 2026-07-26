-- Run this in your Supabase SQL editor to set up the subdomain orders table

CREATE TABLE IF NOT EXISTS subdomain_orders (
  id          TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  subdomain   TEXT UNIQUE NOT NULL,
  root_domain TEXT NOT NULL DEFAULT 'weedkerwing.dev',
  full_domain TEXT UNIQUE NOT NULL,
  target      TEXT NOT NULL,
  record_type TEXT NOT NULL DEFAULT 'CNAME',
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  price       NUMERIC DEFAULT 500,
  currency    TEXT DEFAULT 'RD$',
  status      TEXT DEFAULT 'pending' CHECK (status IN ('pending','active','failed','cancelled')),
  cf_record_id TEXT,
  notes       TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER subdomain_orders_updated_at
  BEFORE UPDATE ON subdomain_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Enable RLS
ALTER TABLE subdomain_orders ENABLE ROW LEVEL SECURITY;

-- Public can INSERT (place orders)
CREATE POLICY "allow_insert" ON subdomain_orders FOR INSERT TO anon WITH CHECK (true);

-- Public can SELECT their own (by email) -- optional
-- CREATE POLICY "allow_select_own" ON subdomain_orders FOR SELECT TO anon USING (true);

-- Service role bypasses RLS (used by admin API)
-- No extra policy needed — service_role bypasses RLS by default
