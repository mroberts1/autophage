---
title: "The Unmet Promise of Synthetic Training Images: Using Retrieved Real Images Performs Better"
source_type: paper
authors: [Scott Geng, Cheng-Yu Hsieh, Vivek Ramanujan, Matthew Wallingford, Chun-Liang Li, Pang Wei Koh, Ranjay Krishna]
url: https://arxiv.org/abs/2406.05184
date: 2024
tags:
  - self-consuming-ai
  - synthetic-data
  - generative-models
  - model-collapse
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The research examines whether generative text-to-image models provide advantages over directly accessing source data. Comparing Stable Diffusion-generated images against real images retrieved from LAION-2B for image classification, the authors found that "real data from the simple retrieval baseline" consistently matched or exceeded synthetic data performance. Generator artifacts and inaccurate visual details explain part of this underperformance, suggesting that targeted retrieval warrants consideration as a baseline when developing synthetic data training methods.

## Key Concepts

- [[synthetic-data]]
- [[generative-models]]
- [[model-collapse]]

## Notes

Challenges the premise that synthetic data is a viable substitute for real data in image classification tasks. Retrieval of real images consistently outperforms generation. Practical implication: before turning to synthetic data, check whether retrieval from a large real corpus is feasible.

Source page section: Synthetic Data and Downstream Tasks
