---
title: "Improving Fairness and Mitigating MADness in Generative Models"
source_type: paper
authors: [Paul Mayer, Lorenzo Luzi, Ali Siahkoohi, Don H. Johnson, Richard G. Baraniuk]
url: https://arxiv.org/abs/2405.13977
date: 2024
tags:
  - self-consuming-ai
  - model-autophagy-disorder
  - model-collapse
  - fairness
  - generative-models
  - mitigation
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> "Generative models unfairly penalize data belonging to minority classes, suffer from model autophagy disorder (MADness), and learn biased estimates of the underlying distribution parameters." The researchers demonstrate that using intentionally designed hypernetworks improves fairness for minority classes, enhances stability in self-consumed settings, and produces less statistically biased parameter estimates. They also introduce a regularization approach that penalizes discrepancies between weights estimated from real versus synthetic data, and provide a scalable hypernetwork implementation for existing deep generative models.

## Key Concepts

- [[model-autophagy-disorder]]
- [[fairness]]
- [[model-collapse]]
- [[mitigation]]

## Notes

From the Baraniuk group (Rice DSP Lab). Connects MAD to fairness: minority-class data is disproportionately lost in self-consuming loops. The hypernetwork-based approach is the main technical contribution. Note: source page lists this as "Removing Bias from Maximum Likelihood Estimation with Model Autophagy" — the arXiv title differs.

Source page section: Foundations (listed as mitigation-related)
