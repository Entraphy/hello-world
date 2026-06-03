# Entraphy Public Site

## Stealth Migration Note

The current public site is being migrated to Entraphy's stealth-safe positioning: a controlled-access doorway for a patent-pending foundation for trusted autonomy in AI-native systems.

- Current-site backup: `archive/current-site-2026-06-02`
- The archive is reference-only and is not intended to be served, imported, or uploaded with production deployments.
- Legacy product and named-product public routes have been neutralized or redirected to private access.
- Public language is intentionally high-signal and low-mechanism.
- Private portal, authentication, database, and document-room functionality are intentionally not implemented yet.

## Private Access Intake

The `/access` page contains a lightweight private-access intake form backed by `POST /api/access`.

The API route validates submissions server-side, applies a hidden honeypot field, and sends a concise email notification through the Resend HTTP API using server-only environment variables. No access portal, authentication, CRM, analytics, database, or local browser storage is implemented.

Required environment variables:

- `RESEND_API_KEY`
- `ENTRAPHY_ACCESS_INTAKE_TO`
- `ENTRAPHY_ACCESS_INTAKE_FROM`

If any required variable is missing, valid submissions fail gracefully with a user-facing retry message and no sensitive form content is logged. Local testing can verify validation and graceful configuration errors without email credentials; configure all three variables to send a real notification.

Future hardening checkpoints:

- rate limiting
- durable storage
- CRM integration
- admin review queue
- private briefing room / access portal later
