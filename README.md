# Ventrio

Ventrio is a production-oriented Next.js platform for a technology consulting and product development company. It includes a premium public website, searchable insights and portfolio, secure lead submission APIs, and a protected admin lead-management workspace.

## Stack

- Next.js 16, React 19, TypeScript, App Router, Tailwind CSS 4
- Server-rendered content with focused client components for navigation, forms, filters, and admin updates
- PostgreSQL through the Vercel-safe Neon serverless driver; compatible with a Codata-provisioned PostgreSQL database
- bcrypt password verification and signed, httpOnly admin session cookies
- Optional Resend email notifications and optional Upstash distributed rate limiting

## Project structure

```text
src/app/(site)/          Public pages and dynamic content routes
src/app/api/             Lead and protected admin API endpoints
src/app/admin/           Admin login and protected dashboard routes
src/components/          Reusable product, form, navigation, and admin UI
src/lib/                 Content, validation, database, auth, email, rate limiting
db/migrations/           Relational database schema
scripts/                 Password-hash and database-migration utilities
```

## Local development

1. Install Node.js 20+ and pnpm.
2. Copy `.env.example` to `.env.local` and set at least `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, and `SESSION_SECRET`.
3. Create an admin password hash:

   ```bash
   pnpm password:hash "your-long-unique-password"
   ```

4. Run the database migration:

   ```bash
   pnpm db:migrate
   ```

5. Install and run:

   ```bash
   pnpm install
   pnpm dev
   ```

Open `http://localhost:3000`. Run `pnpm lint` and `pnpm build` before deployment.

## Database schema

`leads` stores secure public submissions with the required fields: ID, contact information, company/industry, requirement details, budget/timeline, source, status, and timestamps. `audit_logs` records administrator status changes. The exact DDL is in [001_initial.sql](db/migrations/001_initial.sql).

Lead statuses are `NEW`, `CONTACTED`, `QUALIFIED`, `PROPOSAL_SENT`, `NEGOTIATION`, `WON`, and `LOST`.

## Admin setup

Set `ADMIN_EMAIL`, create `ADMIN_PASSWORD_HASH` with the hash command above, and set a random 32+ character `SESSION_SECRET`. Visit `/admin/login` and use the configured email plus the original password. Public visitors cannot access `/admin/*`; server layouts and admin APIs both verify the signed session.

## Vercel deployment

1. Import this repository into Vercel and select the default Next.js framework preset.
2. Add every variable from `.env.example` that your deployment uses. Keep database, password hash, session secret, and mail credentials server-only; do not prefix them with `NEXT_PUBLIC_`.
3. Connect a PostgreSQL database provisioned through Codata or another Vercel-compatible provider and set `DATABASE_URL`.
4. Run `pnpm db:migrate` once from a secure environment with the production `DATABASE_URL`.
5. Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical URL and redeploy so metadata, robots, and sitemap use the correct origin.
6. Optionally configure Resend and Upstash variables for email notifications and distributed rate limiting.

The architecture uses no local filesystem persistence or persistent server process, so it is compatible with Vercel serverless deployment.

## Notes

The environment available for this build did not expose a Codata connector or production credentials, so no database, email provider, or Vercel project was created automatically. The code is wired for those services through environment variables; once the existing Codata workspace exposes its PostgreSQL credentials, add them and run the migration.
