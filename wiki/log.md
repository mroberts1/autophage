# Wiki Log

Chronological, append-only record of ingests, queries, and lint passes.

Format: `## [YYYY-MM-DD] action | Title`

---

## [2026-06-12] lint | Health check

56 pages. 15 broken wikilinks (all tag-style, no backing pages) — top priorities: `recursive-media`, `feedback-loops`, `distributional-drift`. 3 genuine orphans: two reports unlinked from index, `tomshardware` stub unlinked. 3 paywalled stubs still thin. Full report in `output/reports/Lint Report — 2026-06-12.md`.

## [2026-06-12] report | Self-Consuming AI: Synthesis and Future Directions

Generated a ~1,000-word synthesis report in `output/reports/` covering established findings (generality, data-composition control, social register), the central pessimist/optimist tension, and five future research directions: (1) detection/auditing of closed models + autophagy-aware watermarking, (2) a theory of curation that separates signal from amplified bias, (3) a positive theory of when synthetic data helps, (4) the economics of accumulation and real data as a depleting resource, (5) cross-modal and longitudinal societal loops. Synthesizes the full corpus.

## [2026-06-12] report | Model Autophagy Disorder: An Introduction

Generated a ~1,000-word prose introduction to MAD in `output/reports/`. Draws on [[alemohammad-self-consuming-go-mad-2023]], [[shumailov-curse-of-recursion-2023]], [[gerstgrasser-model-collapse-inevitable-2024]], [[chiang-chatgpt-blurry-jpeg-2023]], [[nytimes-ais-output-threat-to-ai-2024]], [[del-rio-chanona-llms-stack-overflow-2023]], and [[knowledge-collapse]]. Includes a 5-source starter bibliography.

## [2026-06-12] ingest | Alemohammad et al. — "Self-Consuming Generative Models Go MAD" (full PDF)

Full-text ingest of MAD paper from `raw/papers/MAD.pdf`. Upgraded [[alemohammad-self-consuming-go-mad-2023]] from abstract stub to full summary covering three-loop taxonomy, λ sampling bias parameter, experimental results across 5 model architectures, and discussion. Updated [[self-consuming-loops]] concept article with the three-loop taxonomy.

## [2026-06-12] ingest | Chiang — "ChatGPT Is a Blurry JPEG of the Web"

Full-text ingest of Ted Chiang's New Yorker essay (Feb 9, 2023). Created [[chiang-chatgpt-blurry-jpeg-2023]]. Updated [[model-collapse]] concept article with cultural framing section. Added to [[Self-Consuming AI]] press coverage table.

## [2026-06-12] ingest | NYT — "When A.I.'s Output Is a Threat to A.I. Itself"

Full-text ingest of NYT Upshot interactive piece (Aug 26, 2024). Updated [[nytimes-ais-output-threat-to-ai-2024]] from stub to full summary.

## [2026-06-12] ingest | Self-Consuming AI Resources — press articles (13 articles)

Ingested 13 press articles from `raw/articles/Self-Consuming AI Resources.md`. 7 full-text summaries (Futurism x2, TweakTown, CDOTrends, Yahoo Finance, Fortune, Rice Magazine); 5 stubs (Tom's Hardware, New Scientist, Telegraph, Independent, Forbes, NYT — blocked or paywalled); 1 skipped (Multiplatform.AI — domain dead). Updated [[Self-Consuming AI]] topic index with press coverage table.

## [2026-06-12] ingest | Self-Consuming AI Resources (28 papers)

Ingested all academic papers from `raw/articles/Self-Consuming AI Resources.md` as light stubs. 28 source summaries created in `wiki/sources/`. Abstracts fetched from arXiv for 23 papers; 2 stubs noted as requiring abstract retrieval (Bertrand 2310.00429, Doshi & Hauser Science Advances). Created 4 concept articles: [[model-collapse]], [[self-consuming-loops]], [[model-autophagy-disorder]], [[knowledge-collapse]]. Created topic index [[Self-Consuming AI]]. Updated Tag Vocabulary with 18 tags. Press articles from the same page deferred for full-text ingest.
