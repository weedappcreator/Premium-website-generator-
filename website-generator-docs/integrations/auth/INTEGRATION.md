# Integration: Auth

## Options

### Clerk
- **Best for**: Quick setup, beautiful UI, social logins
- **Features**: User management, sessions, MFA, organizations
- **Setup**: `npm install @clerk/nextjs`

### Supabase Auth
- **Best for**: Open source, self-hostable, PostgreSQL
- **Features**: Email, OAuth, magic links, RLS
- **Setup**: `npm install @supabase/supabase-js`

### Auth.js (NextAuth)
- **Best for**: Next.js, open source, flexible
- **Features**: 50+ providers, session management
- **Setup**: `npm install next-auth@beta`

### Auth0
- **Best for**: Enterprise, SSO, compliance
- **Features**: MFA, SSO, passwordless, rules
- **Setup**: `npm install @auth0/nextjs-auth0`

## Decision Guide

| Need | Choose |
|---|---|
| Fastest setup + best UX | Clerk |
| Open source + database | Supabase Auth |
| Next.js + flexible | Auth.js |
| Enterprise + SSO | Auth0 |
