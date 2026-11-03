# Website content review - 2026-11-03

Scope: both production websites, their copy, metadata, structured data, links, public images, and regression prevention. User authorized fixes and Git publication on 2026-11-03.

## Evidence and approach

- VERIFIED: repositories already contain October 28 terminology/claims changes, while Vercel restored October 21 production deployments. Fetch confirmed both main branches match origin/main before this change.
- VERIFIED: zero occurrences of the restricted treatment word in current src/content/public text; legacy redirect sources retain old spellings to preserve inbound links.
- VERIFIED: the personal site exposes six stock images of people receiving care or exercising; four are used in homepage article cards. The portrait shows a clothed adult in a seated portrait, without visible medical claims. Corporate imagery consists of a spine model, anatomical artwork, wordmark, and icons.
- VERIFIED: article templates and MDX include appointment solicitations; the personal FAQ asserts insurance agreements without evidence in this repository. Corporate pricing content compares costs and includes a higher-cost table.
- VERIFIED in Vercel deployment details: October 28/29 cleanup builds were blocked because the project was paused. Resuming restored the older October 21 build; it did not publish the already-pushed cleanup commits.

## Changes

1. Remove stock care/exercise images and their card references; retain visually reviewed portrait/anatomy/icons.
2. Remove appointment solicitations from educational articles; keep ordinary contact navigation. Remove unsupported insurance agreement claims and reframe pricing content as general administrative preparation.
3. Show current editorial review date and the visual-content notice from Article 7(1)(k).
4. Add source/rendered-output wording checks plus an inventory of reviewed image hashes, invoked by the build.
5. Run production builds, scan every generated HTML page (including metadata and structured data), verify key redirects and contact navigation, inspect both sites visually, then publish scoped commits and check Vercel/public domains.

## Sources checked on 2026-11-03

- Ministry republication of RG 12.11.2025 / 33075: https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html (Articles 5-7).
- RG 29.03.2025 / 32856: https://antalyaism.saglik.gov.tr/TR-343653/saglik-meslek-mensuplarinin-serbest-meslek--icrasi-hakkinda-yonetmelik.html (professional scope, naming, one-unit restriction).
- Ministry enforcement notice dated 2026-04-24: https://karabukism.saglik.gov.tr/TR-382146/saglikta-dijital-tanitim-ve-bilgilendirme-kurallari.html.

The regulation does not establish a blanket permission to replace the treatment word with a therapy synonym. This project's zero-word policy is deliberately stricter; contextual terms such as fizyoterapi, rehabilitation and named methods must still avoid diagnosis, cure and superiority claims.

## Limits requiring documentary review

Code and screenshots cannot establish the actual licence name/address, diploma/certificate registration, insurer contracts, image rights, or author approval of every medical assertion. In particular, naming/logo requirements under Article 19 and the evidence/authorization of named methods such as GTOS require the responsible professional's documentary review. No licence, certificate or Ministry approval is invented by this change. This is a website remediation, not a legal certification or verification of social-media account contents.

## Validation

- Production builds passed on Next.js 16.2.1 (corporate) and 15.5.14 (personal). An incremental corporate rebuild hit a Turbopack Google-font cache resolution error; clearing only generated `.next` output restored a successful clean build without a source/dependency change.
- Source guards passed for 155 corporate and 87 personal source/public text files plus reviewed image inventories (10 and 8 assets).
- Rendered guards passed for 114 corporate and 53 personal HTML files, including framework error pages, metadata and JSON-LD. Rendered anchor checks are part of the guard.
- Local HTTP crawl checked all 112 corporate and 52 personal public pages and all internal navigation/article targets. Three pre-existing broken links on the personal site were repaired. All final targets returned 200.
- All 24 corporate and 11 personal explicit legacy redirects returned 308 with the expected destination. The old pricing URL now redirects to the administrative preparation article.
- All six removed stock-photo URLs returned 404 locally; homepage article cards were visually inspected without images. The original portrait was visually inspected at full size. Corporate anatomical imagery and social card were also inspected.
- Negative probes verified rejection of lowercase, Turkish/ASCII uppercase restricted wording, restricted filenames, educational appointment solicitations, unreviewed media and broken rendered links. Temporary probes were removed/restored.
- Git publication and public-domain delivery are separate checks. The final chat delivery records the actual production outcome; a pushed commit or a local build is not evidence of live deployment.
