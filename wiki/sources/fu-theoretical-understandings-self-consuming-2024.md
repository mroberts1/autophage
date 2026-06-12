---
title: "Towards Theoretical Understandings of Self-Consuming Generative Models"
source_type: paper
authors: [Shi Fu, Sen Zhang, Yingjie Wang, Xinmei Tian, Dacheng Tao]
url: https://arxiv.org/abs/2402.11778
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - self-consuming-loops
  - generative-models
  - diffusion-models
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper investigates how generative models perform when trained iteratively on mixed datasets containing both authentic and artificially generated data from earlier model iterations. The researchers establish a mathematical framework measuring distributional divergence using total variation distance. For diffusion models with simple neural network score functions, they demonstrate this distance remains manageable when training datasets are sufficiently large or contain adequate real data proportions. Notably, they identify a phase transition phenomenon: as synthetic data volumes increase, the divergence initially rises before eventually decreasing past a critical point. They also analyze kernel density estimation approaches, revealing insights about error propagation in mixed-data scenarios.

## Key Concepts

- [[self-consuming-loops]]
- [[model-collapse]]
- [[diffusion-models]]
- [[distributional-drift]]

## Notes

Mathematically rigorous treatment using total variation distance. The phase transition result (divergence rises then falls as synthetic data fraction increases) is counterintuitive and worth noting. Focuses on diffusion models specifically.

Source page section: Foundations
