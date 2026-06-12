---
title: Model Autophagy Disorder
aliases: [MAD, model autophagy disorder, MADness]
tags:
  - self-consuming-ai
  - model-autophagy-disorder
  - model-collapse
created: 2026-06-12
updated: 2026-06-12
---

# Model Autophagy Disorder (MAD)

Model Autophagy Disorder (MAD) is the term introduced by Alemohammad et al. ([[alemohammad-self-consuming-go-mad-2023]]) for the degradation that occurs when generative models are trained in a [[self-consuming-loops|self-consuming loop]]. The name is a deliberate parallel to mad cow disease (bovine spongiform encephalopathy), where a pathological protein propagates through a biological loop.

MAD is effectively a synonym for [[model-collapse]] but with two specific emphases:

1. It distinguishes between two dimensions of degradation: **quality** (precision — does the model produce realistic outputs?) and **diversity** (recall — does it cover the full range of the distribution?)
2. It foregrounds the recursive, self-propagating character of the phenomenon

## Autophagy vs. Collapse

"Autophagy" (Greek: self-eating) captures the idea that the model consumes itself. Unlike [[model-collapse]], MAD is used primarily by the Rice DSP Lab (Baraniuk group) and does not require assuming that collapse is inevitable — [[alemohammad-self-improving-diffusion-2024]] proposes SIMS as a way to train in autophagous conditions without MAD.

## Key Sources

- [[alemohammad-self-consuming-go-mad-2023]] — introduced MAD
- [[mayer-improving-fairness-mad-2024]] — connects MAD to fairness for minority classes
- [[alemohammad-self-improving-diffusion-2024]] — proposes SIMS to avoid MAD
- [[casco-rodriguez-impact-generative-ai-2023]] — precursor internal report from the same group
