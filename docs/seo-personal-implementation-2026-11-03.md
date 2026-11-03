# Personal-site SEO implementation delivery

Implemented by Codex on the devbox in an isolated source snapshot, then reviewed and integrated on the coordinator’s task date, 2026-11-03. The devbox clock reported 2026-11-04; only the six actually edited articles retain the coordinator’s truthful `updatedDate: 2026-11-03`. Original publication dates and slugs remain unchanged. No build, dependency installation, commit, push or deployment was performed.

## Exact change map

| File | Change and evidence boundary |
| --- | --- |
| `content/calisma-alanlari/gtos-terapi.mdx` | Replaced unsupported mechanism, device protocol, indications, session ranges and autobiographical claims with the meaning of the name, explicit absence of method-specific clinical evidence on this page, questions and individualized planning. Replaced unsupported FAQ answers too: the existing renderer uses the same frontmatter for visible FAQ and FAQPage JSON-LD. No GTOS citation or endorsement was fabricated. Ordinary Golgi physiology is explicitly distinguished from method-specific clinical evidence. |
| `content/blog/fizyoterapi-kac-seans-surer.mdx` | Removed condition-specific ranges, fixed phases and unsupported personal experience. Preserves question intent with goals, reassessment, practical questions and links to the actual `/sss` and existing topics. Planning questions are an editorial preparation aid, not a claimed research protocol. |
| `content/blog/hamilelikte-fizyoterapi.mdx` | Removed unsupported statistics, contraindication list, trimester schedules, device advice, postpartum start dates and unverified bibliography. Replaced blanket safety framing in title/description. Uses only the supplied NHS source for a short general-guidance paragraph; the remaining content concerns preparation and questions for the obstetric/clinical team. |
| `content/blog/yalova-fizyoterapi-rehberi.mdx` | Replaced unsupported local demographics, clinic population, thermal-water efficacy and experience claims. Differentiates the personal author's preparation guide from corporate service/location information. Links existing biography and corporate homepage; no guessed corporate subroute or new location. Removed stale hard-coded reading time so the existing loader calculates it from content. |
| `content/blog/bel-fitigi-egzersizleri.mdx` | Retains ten movement examples and short descriptions. Removes fixed repetitions, holds, daily sets, staged acute/chronic schedules, morning prohibition, imaging-direction selection rules, unsupported prevention/mechanism claims and GTOS efficacy cross-promotion. Reframes examples as discussion material for an individually selected program. The coordinator replaced a scope-only WHO reference with the verified NHS slipped-disc page for gradual activity and urgent neurological/bladder/bowel symptom guidance; that source does not validate the ten movement examples or their individual dose. Removed stale hard-coded reading time. |
| `content/blog/bel-agrisina-karsi-evde-yapilabilecek-egzersizler.mdx` | Retains movement examples. Removes unsupported prevalence/causation claims, fixed doses, daily routine and unsupported sciatica/prevention claims. Adds short WHO education/self-care/exercise context with an explicit chronic-primary adult scope restriction and direct overview link. |
| `src/data/treatments.js` | Changes only the GTOS entry's descriptions and keywords so topic cards do not repeat unsupported indication/device attributes. Existing slugs and relationships stay intact. |
| `scripts/check-public-content.mjs` | Adds source-time validation of local Markdown destinations across MDX: content routes, static app pages and public assets. Links to noindex pages remain allowed; the guard does not change indexing policy. Existing rendered-link and policy/media guards remain. |
| `docs/seo-personal-implementation-2026-11-03.md` | This delivery/evidence/test record. |

Existing explicit article-to-topic body links suffice for this focused change; no inferred parent map or renderer layout changes were needed. Canonicals, index/noindex rules, redirects, contact behavior and the nine `/sss` answers are unchanged. No new media, external tracking, outcomes, credentials or review claims were added. Other articles remain outside this focused review.

## Primary evidence and scope

The coordinating agent supplied verification of these exact official pages from 2026-11-03. This implementation relies on that supplied evidence, without claiming a fresh source access or clinical review:

- https://www.who.int/publications/i/item/9789240081789 — 2023 guideline overview: nonsurgical interventions for chronic primary low-back pain in adults in primary/community care. Used in the general low-back article to bound applicability, not to endorse the listed movements, disc-specific programs, pregnancy, surgery or GTOS.
- https://www.who.int/news/item/07-12-2023-who-releases-guidelines-on-chronic-low-back-pain — Supports the short statement about education/self-care and exercise within holistic individualized care in the general low-back article. Under 150 derived words across changed public files, no quotation. Does not prescribe session counts.
- https://www.nhs.uk/conditions/slipped-disc/ — General disc-symptom/activity information and urgent symptom guidance, verified by the coordinator. It does not support fixed sessions, GTOS, disc-direction-based movement selection or the ten examples as an individually approved program.
- https://www.nhs.uk/pregnancy/keeping-well/exercise/ — General pregnancy activity advice: gentle new starts, clinical advice for existing conditions, avoiding excessive effort, adaptation as pregnancy progresses, fall/abdominal-impact risks, cooling/hydration, stopping when unwell and avoiding prolonged supine lying later in pregnancy. Under 150 derived words across changed public files, no quotation. Does not validate a physiotherapy modality, device, universal exercise plan or postpartum timeline. No source-review badge was added.

No verified GTOS-specific trial, protocol or practitioner documentation was provided. General physiology cannot fill that gap. NICE NG59 and ACOG were not verified (reported 403/402); their recommendations and the other unverified pregnancy bibliography were not retained as support in updated passages.

## Remaining documentary and account unknowns

This source edit is not medical certification or legal approval. Retained movement descriptions are examples rather than a clinically reviewed prescription; appropriateness, technique, adverse-event advice and individual dose still require clinical review. No named reviewer or clinical signoff is claimed. Existing related topic pages and biography have not been comprehensively revalidated. Existing GTOS mentions elsewhere are not thereby verified.

Practitioner qualifications, method training, actual practice history, permissions/licences, business identity and address documentation require real records. The coordinating agent accessed both Search Console properties separately and is documenting actual historical evidence. This worker did not access account data or measure the impact of these edits. Current GBP/licence facts, selected canonicals, field CWV and conversion outcomes require their own evidence. No ranking, traffic, enquiry or clinical outcome is claimed.

## Validation performed and root handoff

Actual checks run here, without dependencies or build:

- `node scripts/check-public-content.mjs` — passed: 89 source/public text files and reviewed media.
- `node --check scripts/check-public-content.mjs` — passed.
- Negative regression exercise: temporarily appended a local link to `/blog/missing-seo-regression-fixture` in an existing article, ran the guard and asserted exit 1 plus the broken-link finding; restored the original article in a `finally` block. Re-ran the source guard successfully.
- `git diff --check` — passed.

Root should run the production build locally; the existing postbuild chain checks rendered public copy, actual internal links, metadata, JSON-LD, sitemap dates and homepage reachability. These rendered checks were not run here. Review GTOS visible FAQ/schema parity, refreshed titles/descriptions, computed reading times and external reference links in the resulting HTML; confirm all nine `/sss` answers and existing contact behavior remain intact. No new reference implies clinical approval. Publication is a separate step.

## Coordinator validation

After integration of the additional safety pass and biography corrections, `npm run build` passed locally with 52 public pages, 52 sitemap URLs and 53 generated HTML documents. All source/media, rendered-content and SEO checks passed. No source URL, canonical, index policy, redirect, contact handler or reviewed image changed in this patch. Coordinator owns separate historical URL redirects and publication.
