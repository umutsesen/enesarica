# Personal-site SEO and landing-page refinement - 2026-11-03

User requested separate-agent SEO and landing-page improvements within existing healthcare publicity restrictions. This isolated worktree contains personal-site changes only; no publication is performed by this agent.

## Baseline and scope

- All 52 public pages already have a unique title/description, canonical and one H1. Existing index/sitemap policy remains unchanged.
- Child-page Twitter metadata inherits homepage text; all 17 topic detail pages lack an OpenGraph image. Add consistent route-specific metadata using only the existing reviewed portrait.
- Global JSON-LD depends on client execution and uses the nonexistent Schema.org type `PhysicalTherapist`. Render a factual Person and the existing corporate LocalBusiness as server JSON-LD, linking stable IDs without suggesting a second location.
- The personal homepage initially hides its H1/portrait in animations and repeats the same large portrait. Use static identity/location text, a compact approach section and practical preparation facts.
- Navigation disclosures lack keyboard/expanded state and closed mobile links remain in the accessibility tree. Forms lack associated labels and expose a misleading single-location selector.
- Existing forms POST name/phone/email/branch/message to Web3Forms. Preserve that destination and payload shape, fix the one-location default and explain the existing processing plainly. No external test submissions.

## Verification and boundaries

Run the production build and public-content guards, inspect generated metadata/schema, preserve all contact links and known URLs, and check keyboard disclosure semantics. No patient images, testimonials, outcome promises, superiority claims, invented credentials, new geographic locations or stronger method claims are added. The clinic licence name, method documentation and legal safeguards for third-party processing remain documentary questions; code changes cannot establish legal certification or legal cross-border transfer compliance.

## Primary references

- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (lastmod must reflect actual significant updates)
- https://developers.google.com/search/docs/appearance/publication-dates
- https://schema.org/version/latest/schemaorg-current-https.jsonld (PhysicalTherapist absent; LocalBusiness valid)
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- Existing compliance review: `docs/compliance-review-2026-11-03.md`.

## Completed local validation

- `npm ci --no-audit --no-fund` completed. `npm run build` passed with Next.js 15.5.14, the source-content guard and the rendered-content guard (53 generated HTML files).
- A generated-HTML inspection verified all 52 public pages have route-specific OpenGraph URLs, populated OpenGraph/Twitter text and images, parseable JSON-LD and one main landmark. The homepage includes actual server-rendered Person and LocalBusiness scripts with the agreed cross-site entity IDs. All 17 topic pages now use the reviewed portrait for social metadata.
- Nine static sitemap entries omit unknown modification dates. Article dates retain the source publication/update values and expose both labelled dates when different.
- The actual form submission handler passed offline mocked success, API-failure, network-failure and loading-guard scenarios. Payload shape and fixed Yalova Merkez value were checked; no external forms were submitted.
- Navigation disclosure controls, native hidden panels, Escape focus restoration and the mobile focus loop were reviewed in source. The coordinating agent owns browser-based desktop/mobile, keyboard and visual verification after integration.
- No images were replaced. No commits, pushes or deployments were performed by this agent. Traffic, rankings and conversion impact remain unmeasured.

## Integrated verification

- `npm run build` passed in the main checkout, including terminology/media guards, rendered link checks and the new `npm run check:seo` postbuild check.
- The SEO guard checks route-specific canonicals/social metadata, unique titles, one H1/main, server-rendered reviewed JSON-LD types, existing social images, sitemap coverage and source-based modification dates. Negative probes with a wrong `og:url` and invalid `PhysicalTherapist` type were correctly rejected; generated files were restored byte-for-byte.
- Local HTTP verification passed all 164 public pages across both sites and all 35 legacy redirects. The six previously removed personal-site care photos still return 404.
- Desktop (1440 px) and mobile (390 px) visual checks passed. Personal desktop disclosure, mobile Tab wrap, Escape dismissal/focus return and contact navigation passed. Corporate mobile Escape/focus return was fixed and verified. Contact fields and privacy links remain accessible; no real form submission was made. The personal handler's success, API/network failure and loading scenarios were tested offline with mocked responses.
- PageSpeed API returned HTTP 429 for both sites, so no measured Core Web Vitals, ranking, traffic or conversion improvement is claimed.
- Review against the 12 November 2025 health-information regulation found no new high-priority copy issues in these changes. This is not legal certification: registered licence/name, authorization/evidence for named methods (including GTOS) and the form provider's transfer arrangements require documentary verification.
- Publication is tracked separately through the actual Git commits, Vercel Ready status and a fresh live HTTP crawl.
