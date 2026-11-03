# Next SEO work — 2026-11-03

## Evidence and completed follow-up

Independent source review ran through the devbox’s actual Codex CLI, authenticated with ChatGPT and restricted to an isolated read-only snapshot. It reviewed corporate `1bc1a455d1da3a811f32b2dcea896705a08bdb6a` and personal `7c1d74b9549393979590a6d3510c7d1055015ee4`. The full report is retained in fizyonesNew at `docs/seo-independent-devbox-review-2026-11-03.md`.

Generated HTML confirmed that the personal `/sss` was indexable and included in the sitemap, but unreachable through internal links. Actual Google indexing was not observed. Added a descriptive footer link, server-rendered FAQ/breadcrumb JSON-LD, and nine practical answers about preparation, individualized planning and appointment requests. Removed fixed clinical schedules and method-specific FAQ claims rather than presenting them as clinically reviewed. The same data renders visible answers and schema. Both sites’ visible article bylines now link directly to the existing author biography; this does not verify its credentials.

Both postbuild SEO guards now traverse rendered same-origin anchors from the homepage and fail if any indexable page is unreachable, including an isolated circular group. The initial personal check failed specifically on `/sss` before its repair. Existing corporate noindex pages and legacy redirects retain their policy. No images, illustrated homepage sections, dates or tracking providers were changed.

## Priorities and acceptance evidence

1. **Clinical provenance first.** Review existing GTOS mechanism/protocol claims, quantified session counts, exercise prescriptions and prognosis statements against verified primary guidelines/publications and actual practitioner documentation. At the initial baseline, all 140 MDX bodies lacked external HTTP links, although some had plain-text bibliographies. The subsequent implementation added scoped primary links to selected high-risk articles; the source absence is a historical baseline, not the current site state. Verify each existing reference and its claim fit, link the exact source and record the real reviewer/date only after that review actually happens. A citation quota or automatic citation insertion is not useful. This code pass does not certify clinical accuracy or legality.
2. **Measure actual search behavior.** Obtain read-only performance/indexing reports for both Google Search Console properties: a consistent recent 3-month window, prior-period comparison, query-to-page rows, country/device split, indexed-page reasons and Google-selected canonicals. Prioritize pages with relevant impressions and weak click-through rates; document baseline before changing titles. Indexable is not indexed; contact clicks are not appointments.
3. **Give the sites distinct jobs.** Provisional roles: corporate site for the real location, service information and topic hubs; personal site for practitioner identity, approach and authored explanations. Compare actual queries for the four corporate Yalova pillars and the personal Yalova guide. Do not merge, redirect, cross-canonical or noindex them based only on keyword overlap. No exact body duplicates were found; cross-domain similarity heuristics do not establish search competition or penalties.
4. **Strengthen topical navigation.** Review article-to-service relationships. Corporate parent assignment currently depends on the short featured-related-article lists. Separate an explicit parent-topic map from those featured lists after reviewing relevance; confirm all assigned services exist and noindex exclusions remain unchanged. Avoid bulk keyword links in every paragraph.
5. **Verify the existing local identity.** Read the current Google Business Profile and licence documents; confirm the one real location, registered name, phone, address, hours, category and correct website association. Keep facts consistent across both sites and existing legitimate listings. No invented locations, keyword-expanded business names, testimonials or review campaigns.
6. **Measure performance and enquiries carefully.** Actual Core Web Vitals and conversion impact remain unknown (anonymous PageSpeed requests returned 429). Obtain field reports before choosing performance changes. If measurement is later implemented, review privacy/consent first and track only generic phone/WhatsApp/directions clicks and confirmed successful form delivery, never form text, patient data or inferred diagnoses. No tracking was added in this pass.

## Primary guidance

- [Google: helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: crawlable and descriptive links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: accurate local business information](https://support.google.com/business/answer/7091?hl=en)
- Existing legal/documentary boundaries remain in `docs/compliance-review-2026-11-03.md`. Generic Google marketing advice never overrides the site’s healthcare publicity restrictions.

## Validation

The personal production build passed with 52 public pages, 52 sitemap URLs and 53 generated HTML documents; all nine FAQ answers match actual server-rendered JSON-LD. The corporate production build passed with 112 public pages, 107 sitemap URLs and 114 generated HTML documents. Publication is tracked separately from builds. No ranking, traffic, enquiry increase or zero-penalty outcome is claimed.


## Implementation follow-up

The authorized follow-up implemented the known source/code corrections with actual devbox Codex workers and independent review. Corporate parents/featured lists are separated, local guide purposes are differentiated, verified primary-source links and conservative corrections address the identified clinical-claim findings, and historical URL aliases are repaired. Existing machine-readable summaries now use normal Markdown links and omit documentary-unknown licensing/founding/evidence claims. See `docs/seo-delivery-2026-11-03.md` for the final scope, verification and remaining external evidence.

Authenticated Search Console access was established for both domains during the follow-up. The source-only report’s earlier account-access unknown is superseded: performance and indexing were inspected directly, including stale-report dates. No raw account performance exports or query tables are committed. Both properties showed no Google manual actions; this does not establish legal compliance. Both field Core Web Vitals reports had insufficient usage data. Larger consolidation and cross-domain canonical changes remain unjustified by the observations, so existing indexing policy and self-canonicals were retained.
