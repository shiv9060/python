# Raghav Ltd POS Backend

Express + PostgreSQL API for authentication, billing, menu management, and analytics.

## Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Update `DATABASE_URL` and `JWT_SECRET`.
3. Install dependencies and start dev server:

```bash
npm install
npm run dev
```

## API Overview

- `POST /api/auth/login` – Login and receive JWT.
- `GET /api/menu` – List menu items (requires auth).
- `POST /api/menu` – Add menu item (admin only).
- `POST /api/billing` – Create a bill (worker/admin).
- `GET /api/reports/outlets?from=...&to=...` – Outlet sales report (admin/owner).
- `GET /api/owner/summary` – Owner dashboard summary (owner only).

## Data Model Notes

Tables expected: `users`, `menu_items`, `bills`, `bill_items` with outlet-aware columns.
