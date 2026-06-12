---
title: "Lint Report — 2026-06-12"
source_type: report
tags:
  - meta
created: 2026-06-12
updated: 2026-06-12
---

# Lint Report — 2026-06-12

56 pages across concepts, art, sources, indexes, and reports.

## Broken wikilinks (15)

These are referenced with `[[...]]` across the wiki but have no corresponding page. All are tags from the Tag Vocabulary used as concept links — they need either a concept article or to be converted to plain text.

| Link | Priority | Notes |
| ---- | -------- | ----- |
| `[[recursive-media]]`      | high   | Core topic of the wiki — needs a concept article |
| `[[feedback-loops]]`       | high   | Referenced by 4+ pages, closely related to art section |
| `[[distributional-drift]]` | medium | Referenced by several papers, natural concept article |
| `[[synthetic-data]]`       | medium | Frequently referenced, mitigation-adjacent |
| `[[diffusion-models]]`     | low    | Technical, could be a brief stub |
| `[[generative-models]]`    | low    | Broad umbrella — may not need its own page |
| `[[language-models]]`      | low    | Same |
| `[[fairness]]`             | low    | Better handled via [[mayer-improving-fairness-mad-2024]] |
| `[[mitigation]]`           | low    | Index-style page listing mitigations would work |
| `[[recommender-systems]]`  | low    | Referenced by pappalardo source only |
| `[[iterative-retraining]]` | low    | Very narrow, stub or redirect |
| `[[reinforcement-learning]]` | low  | Technical background only |
| `[[reward-hacking]]`       | low    | Same |
| `[[scaling-laws]]`         | low    | Same |
| `[[social-implications]]`  | low    | Could fold into [[knowledge-collapse]] |

Recommended action: create concept articles for `recursive-media`, `feedback-loops`, and `distributional-drift`. Demote the rest to plain text in their source files.

## Orphaned pages (8)

Pages with no incoming wikilinks from the rest of the wiki.

| Page | Status | Action |
| ---- | ------ | ------ |
| `Master Index`          | expected — it's the home page | none |
| `Health Dashboard`      | expected — tool page | none |
| `Tag Vocabulary`        | expected — tool page | none |
| `log`                   | expected — append-only log | none |
| `recursion-meme-gallery` | new, no links yet | link from art index once populated |
| `tomshardware-generative-ai-goes-mad-2023` | paywalled stub | link from Self-Consuming AI index |
| `Model Autophagy Disorder — An Introduction` | report | link from Master Index or Quickstart |
| `Self-Consuming AI — Synthesis and Future Directions` | report | link from Master Index |

## Stubs needing upgrade

Three press article source summaries are very thin (23 lines each) because they were paywalled at ingest time:

- `forbes-why-ai-models-are-collapsing-2024.md`
- `independent-ai-collapsing-into-nonsense-2024.md`
- `tomshardware-generative-ai-goes-mad-2023.md`

If you can access these, save the clipped articles to `raw/articles/` and they can be upgraded to full summaries.

## Missing concept articles

The following concepts are frequently referenced across the wiki but have no article:

1. `recursive-media` — the wiki's own overarching subject, needs a founding article
2. `feedback-loops` — bridges the AI and art sections, should exist
3. `distributional-drift` — the mechanism underlying model collapse, worth a proper treatment

## Cross-section connections to develop

The art section ([[feedback-as-aesthetic-practice]]) and the AI section ([[model-collapse]], [[self-consuming-loops]]) are currently connected only by a few wikilinks. Lucier's *I Am Sitting in a Room* is described as "model collapse avant la lettre" in both sections but there is no concept article that holds that comparison explicitly. A concept article on `recursive-media` would be the natural home for it.

## Suggestions

- Add links to the two reports (`Model Autophagy Disorder — An Introduction`, `Self-Consuming AI — Synthesis and Future Directions`) from the Master Index or the Quickstart page
- The `recursion-meme-gallery` page needs at least one image before it's worth linking anywhere
- Consider a concept article on `distributional-drift` — it underlies both model collapse and the statistical arguments in Shumailov and Alemohammad and is never defined in the wiki
