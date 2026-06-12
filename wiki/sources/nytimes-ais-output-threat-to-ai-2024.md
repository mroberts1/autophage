---
title: "When A.I.'s Output Is a Threat to A.I. Itself"
source_type: article
authors: []
publisher: The New York Times (The Upshot)
url: https://www.nytimes.com/interactive/2024/08/26/upshot/ai-synthetic-data.html
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - synthetic-data
  - social-implications
  - knowledge-collapse
  - distributional-drift
created: 2026-06-12
updated: 2026-06-12
---

## Summary

An NYT Upshot interactive piece — the most thorough popular treatment of model collapse, combining data journalism with animated visualizations. Published August 26, 2024, timed to the Nature publication of [[shumailov-curse-of-recursion-2023]]. (Author byline not captured in clipped version.)

## Main Arguments

The article has four sections, progressing from the empirical to the structural to the prescriptive.

**The loop is already happening.** Sam Altman reported OpenAI generating ~100 billion words per day, an unknown share of which reaches the internet. AI companies scrape the web for training data and will inevitably ingest their own outputs. NewsGuard identified over a thousand websites generating AI-produced news articles.

**Degenerative AI.** The Shumailov team's turkey-thanksgiving prompt is used as the central demonstration: the model's output degrades from coherent text to lists to incoherent repetition over four training generations. The Rice/Alemohammad image research is shown alongside: models produce wrinkled patterns and mangled fingers. The researchers' key framing: "The model becomes poisoned with its own projection of reality." Baraniuk: "You're kind of drifting into parts of the space that are like a no-fly zone."

**Why collapse happens.** The article explains training in terms of statistical distributions — a pedagogical choice: the model learns a probability distribution, and training on its own output narrows that distribution. The "copy of a copy" metaphor is invoked (referencing Ted Chiang's "blurry JPEG" essay). The animated MNIST digit demonstration visualizes the widening gap between real-data and synthetic-data distributions across 30 training iterations. Linguistic diversity loss ([[guo-curious-decline-linguistic-diversity-2023]]), bias amplification ([[taori-data-feedback-loops-2022]]), and minority-data erasure ([[wyllie-fairness-feedback-loops-2024]]) are cited as related effects.

**Ways out.** Four responses are outlined:
- Licensing high-quality data from publishers (OpenAI and Google making deals; NYT-OpenAI lawsuit noted)
- Watermarking AI outputs (Google SynthID, OpenAI efforts) — but noted as technically difficult and easily subverted (doesn't survive translation)
- Data scarcity as a compounding problem: Epoch AI projects largest models may exhaust public internet text within a decade; Baraniuk: "the entire internet of images or conversations is somehow close to being not enough"
- Contexts where synthetic data *does* work: distillation from larger to smaller models; verifiable outputs (math proofs, chess); human-curated ranking of synthetic outputs — citing [[ferbach-self-consuming-curated-data-2024]] and related work

Conclusion: "there's no replacement for the real thing."

## Key Concepts

- [[model-collapse]]
- [[self-consuming-loops]]
- [[distributional-drift]]
- [[knowledge-collapse]]
- [[synthetic-data]]
- [[mitigation]]

## Notes

This is the single most widely read piece on model collapse — the Upshot interactive format with animated distributions made the technical concept accessible to a mass audience. The statistical distribution framing ("the bell curve narrows") became a go-to explanation in subsequent popular coverage. The van Gogh example (AI-generated Van Gogh images outnumbering real ones in training data) is a memorable domain-specific illustration of the tail-erasure problem. The article also serves as a bibliography, linking directly to [[shumailov-curse-of-recursion-2023]], [[alemohammad-self-consuming-go-mad-2023]], [[guo-curious-decline-linguistic-diversity-2023]], [[taori-data-feedback-loops-2022]], and [[wyllie-fairness-feedback-loops-2024]].
