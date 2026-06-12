---
title: "Heat Death of Generative Models in Closed-Loop Learning"
source_type: paper
authors: [Matteo Marchi, Stefano Soatto, Pratik Chaudhari, Paulo Tabuada]
url: https://arxiv.org/abs/2404.02325
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - self-consuming-loops
  - generative-models
  - feedback-loops
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper investigates what happens when generative models are trained on data they themselves produce. The researchers observe that this "closed-loop learning" typically leads models to degenerate, either "producing gibberish data, or sample[ing] from only a small subset of the desired data distribution." Using dynamical systems analysis, they demonstrate that without sufficient external data at each training iteration, models will asymptotically collapse—either restricting outputs to a narrow set or spreading uniformly across possibilities, regardless of temperature settings.

## Key Concepts

- [[model-collapse]]
- [[self-consuming-loops]]
- [[feedback-loops]]
- [[distributional-drift]]

## Notes

Frames model collapse using dynamical systems theory. The "heat death" metaphor (borrowing from thermodynamics) describes asymptotic collapse to either a Dirac delta (mode collapse) or uniform distribution. The two failure modes—total collapse vs. total diffusion—are a useful framing distinct from prior work. Analyzes the role of temperature settings.

Source page section: Foundations
