---
title: "Self-Consuming Generative Models Go MAD"
source_type: paper
authors: [Sina Alemohammad, Josue Casco-Rodriguez, Lorenzo Luzi, Ahmed Imtiaz Humayun, Hossein Babaei, Daniel LeJeune, Ali Siahkoohi, Richard G. Baraniuk]
url: https://arxiv.org/abs/2307.01850
date: 2023
tags:
  - self-consuming-ai
  - model-collapse
  - model-autophagy-disorder
  - self-consuming-loops
  - generative-models
  - synthetic-data
  - fairness
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> Seismic advances in generative AI algorithms for imagery, text, and other data types has led to the temptation to use synthetic data to train next-generation models. Repeating this process creates an autophagous ("self-consuming") loop whose properties are poorly understood. We conduct a thorough analytical and empirical analysis using state-of-the-art generative image models of three families of autophagous loops that differ in how fixed or fresh real training data is available across the generations of training and in whether the samples from previous-generation models have been biased to trade off data quality versus diversity. Our primary conclusion across all scenarios is that *without enough fresh real data in each generation of an autophagous loop, future generative models are doomed to have their quality (precision) or diversity (recall) progressively decrease.* We term this condition Model Autophagy Disorder (MAD), making analogy to mad cow disease.

## Overview

The foundational paper from Rice/Stanford that named [[model-autophagy-disorder]] (MAD) and established the three-loop taxonomy of self-consuming training. This is the ICLR 2024 extended version of an earlier preprint (arXiv:2307.01850, July 2023). The full PDF is at `raw/papers/MAD.pdf`.

The loop is already happening: LAION-5B, used to train Stable Diffusion, already contains synthetic images from StyleGAN, AICAN, Pix2Pix, DALL-E, and BigGAN — identified via haveibeentrained.com. The paper's opening quote, overheard at ICLR 2022: "There will soon be more synthetic data than real data on the Internet."

## The Three-Loop Taxonomy

The paper's central contribution is a hierarchy of three realistic autophagous loop variants (Figure 3):

**1. Fully synthetic loop** — each generation's training data consists entirely of synthetic samples from the previous generation. Worst case. Both quality (precision) and diversity (recall) decrease monotonically. The mechanism: the model mean follows a random walk (drifts from true distribution) and the covariance converges to zero (diversity collapses). Proven for Gaussian distributions; confirmed experimentally on DDPM, StyleGAN-2, WGAN-GP, normalizing flows, and Gaussian mixture models.

**2. Synthetic augmentation loop** — training data = fixed real dataset + synthetic data from previous generations. The fixed real data delays MADness but does not prevent it. Inevitable degradation is slower but the same dynamics apply.

**3. Fresh data loop** — training data = fresh real data (drawn anew each generation) + synthetic data. This is the most realistic scenario (internet scraping delivers both real and synthetic). Key finding: *with enough fresh real data, quality and diversity do not degrade*. But the threshold matters — synthetic data is only helpful when real data is scarce. As the real dataset grows, the admissible amount of synthetic data does not grow proportionally. In the limit, fresh real data is always preferable to synthetic.

## Sampling Bias (the λ Parameter)

Practitioners cherry-pick synthetic samples (e.g., truncation in GANs, temperature in LLMs, guidance in diffusion models). The paper unifies these as a single sampling bias parameter λ ∈ [0,1]:

- λ = 1: unbiased sampling, maximum diversity
- λ < 1: biased toward modes, higher quality, lower diversity

Effect of sampling bias on autophagy:
- Without bias (λ = 1): both precision and recall decrease over generations; synthetic data modes drift and merge (Figure 5 t-SNE)
- With bias (λ < 1): precision can be maintained or even increased temporarily, but recall collapses *faster* (Figure 7 t-SNE — modes collapse individually rather than merging)

The bias parameter also shrinks the "admissible" zone in the fresh data loop (Figure 12): with more sampling bias, fewer synthetic samples can be safely used before degradation occurs.

## Key Experimental Results

Confirmed on:
- StyleGAN-2 on FFHQ (faces): cross-hatching artifacts appear at t=3, amplify through t=9 (Figure 1 — the paper's cover image)
- DDPM on MNIST: both quality and diversity drop monotonically
- WGAN-GP on MNIST: 100 generations, same result
- Gaussian mixture models: 25 modes progressively lost over 2,000 generations (Figure 14)
- Normalizing flows on Rosenbrock distribution: tails disappear with or without bias (Figure 17)

Recall (diversity) is the most sensitive and reliable metric for MADness; it detects mode loss better than FID or variance alone.

## Discussion and Implications

**The doomsday scenario:** "if left uncontrolled for many generations, MAD could poison the data quality and diversity of the entire Internet."

**For practitioners deliberately using synthetic data:** maximize fresh real data inclusion; minimize sampling bias if diversity matters; be especially careful in data-scarce settings (e.g., medical imaging from anonymized synthetic data).

**For practitioners inadvertently getting synthetic data:** the community needs detection methods to identify and filter synthetic data from training sets. Watermarking is one avenue but double-edged: watermarks introduce artifacts that autophagy can amplify.

**Applies to LLMs:** "Generative models for any kind of data can be connected into autophagous loops and go MAD. One timely data type is the text produced by LLMs (some of which are already being trained on synthetic data from pre-existing models like ChatGPT)."

**The architectural fingerprint insight:** synthetic images from StyleGAN-2 carry cross-hatching artifacts that are architectural fingerprints; autophagy amplifies these, making them increasingly dominant across generations (Figure 1).

## Key Concepts

- [[model-autophagy-disorder]]
- [[self-consuming-loops]]
- [[model-collapse]]
- [[distributional-drift]]
- [[synthetic-data]]
- [[mitigation]]

## Notes

- Preceded by [[casco-rodriguez-impact-generative-ai-2023]] (internal Rice reports, same group)
- Published at ICLR 2024; precursor arXiv preprint July 4, 2023
- The three-loop taxonomy underpins [[gerstgrasser-model-collapse-inevitable-2024]]'s rebuttal (which focuses on the fresh data loop's accumulating variant)
- The precision/recall framing (quality vs. diversity) became standard vocabulary in subsequent papers including [[mayer-improving-fairness-mad-2024]] and [[alemohammad-self-improving-diffusion-2024]]
- Also listed in Mitigation section of source page because Section 5 (fresh data loop) shows how collapse is avoidable

Source page sections: Foundations, Mitigation
