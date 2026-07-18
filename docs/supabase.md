# Supabase Setup

This project reads dashboard data through Next Route Handlers and persists it in
Supabase when the environment variables are configured.

## Environment

Create `.env.local` with either the current publishable key name or the older
anon key name.

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

`SUPABASE_SERVICE_ROLE_KEY` is recommended because all database writes are made
from server-only Route Handlers. Never expose this value to client components.

## Database

Run `supabase/schema.sql` in the Supabase SQL editor. It creates and seeds:

- `users`
- `settings`
- `dashboard_kpis`
- `dashboard_chart_points`
- `dashboard_activities`

The schema also grants the server-side `service_role` access to the dashboard
tables. If the deployed API returns `permission denied for table users`, rerun
the latest `supabase/schema.sql` and confirm that Vercel's
`SUPABASE_SERVICE_ROLE_KEY` value is the service role or secret key, not the
anon, publishable, JWT secret, or database password value.

When the env vars are missing, the app falls back to the existing in-memory mock
data so local builds and UI checks still work.
