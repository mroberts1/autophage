---
title: "Self-Correcting Self-Consuming Loops for Generative Model Training"
source_type: paper
authors: [Nate Gillman, Michael Freeman, Daksh Aggarwal, Chia-Hong Hsu, Calvin Luo, Yonglong Tian, Chen Sun]
url: https://openreview.net/forum?id=i0nVanexij
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - self-consuming-loops
  - generative-models
  - mitigation
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper addresses instability in generative models trained on mixed human and synthetic data. The authors introduce theoretical corrections that "maps a data point to be more likely under the true data distribution" to stabilize training. They propose self-correction functions leveraging expert knowledge and demonstrate effectiveness on motion synthesis tasks, achieving stability "even when the ratio of synthetic data to real data is as high as 100%."

## Key Concepts

- [[self-consuming-loops]]
- [[model-collapse]]
- [[mitigation]]
- [[generative-models]]

## Notes

Proposes "self-correction functions" derived from expert knowledge to counteract the distributional drift caused by autophagous loops. Notably claims stability even at 100% synthetic data ratios. Demonstrated on motion synthesis. Published at ICML 2024.

Source page sections: Foundations, Mitigation
