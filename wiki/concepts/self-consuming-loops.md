---
title: Self-Consuming Loops
aliases: [self-consuming loop, autophagous loop, self-consuming feedback loop]
tags:
  - self-consuming-ai
  - self-consuming-loops
  - feedback-loops
created: 2026-06-12
updated: 2026-06-12
---

# Self-Consuming Loops

A self-consuming loop (also: autophagous loop) is a training regime in which a generative model's own outputs are recycled as inputs to train successive model generations. The term was introduced by [[alemohammad-self-consuming-go-mad-2023]] to describe the mechanism underlying [[model-collapse]].

## Structure

The loop has three steps:
1. A model generates synthetic data
2. The synthetic data enters (or replaces) the training corpus
3. A new model generation is trained on this corpus

Whether the loop is destructive depends primarily on the ratio of fresh real data to recycled synthetic data, and whether real data is accumulated or replaced at each step.

## Variants

[[alemohammad-self-consuming-go-mad-2023]] defines three families of increasing realism:

- **Fully synthetic loop**: training data consists entirely of synthetic samples from the prior generation. Worst case — both quality (precision) and diversity (recall) degrade monotonically. The model mean follows a random walk away from the true distribution; the covariance collapses to zero.
- **Synthetic augmentation loop**: a fixed real dataset is combined with synthetic data from each generation. Delays MADness but does not prevent it.
- **Fresh data loop**: fresh real data (drawn anew each generation) is combined with synthetic data. With *enough* fresh real data, quality and diversity are preserved. This is the realistic internet-scraping scenario.

Additional variants from other work:
- Curated loop: synthetic data is filtered by a verifier or reward model before inclusion — can stabilize or implicitly optimize preferences ([[ferbach-self-consuming-curated-data-2024]])
- Self-correcting loop: a correction function steers data closer to the true distribution ([[gillman-self-correcting-self-consuming-2024]])
- Accumulating loop: real data is accumulated (not replaced) across generations — provably avoids collapse ([[gerstgrasser-model-collapse-inevitable-2024]])

## Relation to Broader Feedback Loops

Self-consuming loops at training time are one instance of a broader class of AI feedback loops:

- **Deployment loops**: recommender systems and LLM agents shape user behavior, which in turn reshapes future training data ([[pappalardo-survey-recommender-systems-2024]], [[pan-feedback-loops-language-models-2024]])
- **Societal loops**: AI use reduces human production of the public-domain data future AI will need ([[del-rio-chanona-llms-stack-overflow-2023]], [[gray-chatgpt-contamination-2024]])

## Key Sources

- [[alemohammad-self-consuming-go-mad-2023]]
- [[shumailov-curse-of-recursion-2023]]
- [[gerstgrasser-model-collapse-inevitable-2024]]
- [[gillman-self-correcting-self-consuming-2024]]
- [[ferbach-self-consuming-curated-data-2024]]
- [[taori-data-feedback-loops-2022]]
