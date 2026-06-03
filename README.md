# Entraphy Public Site

## Stealth Migration Note

The current public site is being migrated to Entraphy's stealth-safe positioning: a controlled-access doorway for a patent-pending foundation for trusted autonomy in AI-native systems.

- Current-site backup: `archive/current-site-2026-06-02`
- The archive is reference-only and is not intended to be served, imported, or uploaded with production deployments.
- Legacy product and named-product public routes have been neutralized or redirected to private access.
- Public language is intentionally high-signal and low-mechanism.
- Private portal, authentication, database, and document-room functionality are intentionally not implemented yet.

## Private Access Intake

The `/access` page contains a polished static-preview intake form. It validates inputs locally and clearly tells visitors that submissions are not transmitted yet.

TODO: connect `/access` to durable private submission handling before opening intake. Preferred options are a Next.js route or server action backed by an existing email/form provider configured through environment variables, with no provider secrets exposed to the client.
