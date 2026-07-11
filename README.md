# Entraphy Public Site

## Stealth Migration Note

The current public site is being migrated to Entraphy's stealth-safe positioning: a controlled-access doorway for a patent-pending foundation for trusted autonomy in AI-native systems.

- Current-site backup: `archive/current-site-2026-06-02`
- The archive is reference-only and is not intended to be served, imported, or uploaded with production deployments.
- Legacy product and named-product public routes have been neutralized or redirected to private access.
- Public language is intentionally high-signal and low-mechanism.
- Private portal, authentication, database, and document-room functionality are intentionally not implemented yet.

## Public Intake Forms

The `/request-partner-access` and `/signal` pages contain lightweight intake forms backed by `POST /api/access`.

The API route validates submissions server-side, applies a hidden honeypot field, and sends a concise internal email notification through Microsoft Graph using server-only environment variables. Optional submitter confirmations can be enabled explicitly. No access portal, authentication, CRM, analytics, database, or local browser storage is implemented.

Required environment variables:

- `MICROSOFT_GRAPH_TENANT_ID`
- `MICROSOFT_GRAPH_CLIENT_ID`
- `MICROSOFT_GRAPH_CLIENT_SECRET`
- `ENTRAPHY_NOTIFICATION_FROM`

Recommended deployment values:

- `ENTRAPHY_NOTIFICATION_TO=support@entraphy.com`
- `ENTRAPHY_NOTIFICATION_FROM=Entraphy Systems <no-reply@entraphy.com>`
- `ENTRAPHY_PUBLIC_FROM=Entraphy Systems <no-reply@entraphy.com>`
- `ENTRAPHY_SEND_CONFIRMATION=true`

`ENTRAPHY_NOTIFICATION_FROM` and `ENTRAPHY_PUBLIC_FROM` must use Microsoft 365 mailboxes or sender addresses the Graph app is allowed to send as. Submitter-facing confirmations, when enabled, must use `ENTRAPHY_PUBLIC_FROM` and must not expose a private recipient address.

Optional confirmation email copy overrides:

- `ENTRAPHY_SIGNAL_CONFIRMATION_SUBJECT`
- `ENTRAPHY_SIGNAL_CONFIRMATION_BODY`
- `ENTRAPHY_REQUEST_CONFIRMATION_SUBJECT`
- `ENTRAPHY_REQUEST_CONFIRMATION_BODY`

Use `\n` in Vercel values for line breaks if entering a single-line environment value.

Microsoft 365 setup:

- Register an app in Microsoft Entra ID.
- Add Microsoft Graph application permission `Mail.Send`.
- Grant admin consent.
- Create a client secret.
- Add the tenant ID, client ID, and client secret to the Vercel project environment.
- Ensure `no-reply@entraphy.com` exists as a mailbox or shared mailbox and is allowed for app-based sending.

Backward-compatible environment variables:

- `ENTRAPHY_ACCESS_INTAKE_TO`
- `ENTRAPHY_ACCESS_INTAKE_FROM`

If both old and new variables are configured, the API prefers `ENTRAPHY_NOTIFICATION_TO` and `ENTRAPHY_NOTIFICATION_FROM`.

If any required variable is missing, valid submissions fail gracefully with a user-facing retry message and no sensitive form content is logged. Local testing can verify validation, honeypot behavior, and graceful configuration errors without email credentials.

Future hardening checkpoints:

- rate limiting
- durable storage
- CRM integration
- admin review queue
- private briefing room / access portal later
