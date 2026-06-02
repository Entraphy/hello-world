# SEO launch checklist

## Google Search Console

1. Add and verify a domain property for `entraphy.com`.
2. Verify `https://www.entraphy.com/`.
3. Submit `https://www.entraphy.com/sitemap.xml`.
4. Use URL Inspection for `https://www.entraphy.com/`.
5. Request indexing after deployment.

## Bing Webmaster Tools

1. Add and verify the site.
2. Submit `https://www.entraphy.com/sitemap.xml`.
3. Inspect the homepage URL.

## Canonical and redirects

1. Confirm `entraphy.com` redirects to `https://www.entraphy.com/`, or update the site configuration if another canonical is chosen.
2. Confirm `http` redirects to `https`.
3. Confirm the homepage canonical resolves to `https://www.entraphy.com/`.

## Production status

1. Confirm `https://www.entraphy.com/` returns `200`.
2. Confirm `https://www.entraphy.com/sitemap.xml` returns `200`.
3. Confirm `https://www.entraphy.com/robots.txt` returns `200`.
4. Confirm old routes do not expose old content: `/products`, `/products/blacksmith`, `/docs`, `/demo`, `/contact`, `/briefing`, `/platform`, `/how-it-works`, and `/use-cases`.

## Public leakage check

1. Confirm `Blacksmith` is absent from production-facing public routes, metadata, sitemap, OpenGraph text, and JSON-LD.
2. Confirm old product and demo language is absent from production-facing public routes.
3. Confirm archive and backup paths are not indexed or submitted in the sitemap.
