# Deployment

The site is hosted on Vercel and deploys automatically from GitHub.

- Push to `master` → production deployment at [veginn.rw](https://veginn.rw)
- Push to any other branch → preview deployment

## Environment variables

Set these in Vercel under **Settings → Environment Variables**, then redeploy:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key, used to send form submissions by email |
| `RESEND_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `VegInn <hello@veginn.rw>` |

Form submissions are delivered to `info@veginn.rw`. Without `RESEND_API_KEY`
the forms return a 503 with that address as a fallback. Do not use
`onboarding@resend.dev` in production: it is a development fallback and may
not deliver reliably.

## Custom domain

In Vercel, open **Settings → Domains**, add the domain and create the DNS
records Vercel shows at the registrar. The SSL certificate is issued
automatically once DNS resolves.

## Search engines

`app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
To appear in Google, add `veginn.rw` as a property in Google Search Console,
verify it, and submit `https://veginn.rw/sitemap.xml`.

## Local build check

```bash
pnpm build        # fails on TypeScript errors
pnpm start
```
