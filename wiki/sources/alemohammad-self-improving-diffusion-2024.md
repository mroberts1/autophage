---
title: "Self-Improving Diffusion Models with Synthetic Data"
source_type: paper
authors: [Sina Alemohammad, Ahmed Imtiaz Humayun, Shruti Agarwal, John Collomosse, Richard Baraniuk]
url: https://arxiv.org/abs/2408.16333
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - model-autophagy-disorder
  - diffusion-models
  - synthetic-data
  - mitigation
  - fairness
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The research addresses the challenge of training large generative models when real data becomes scarce. The authors propose SIMS (Self-IMproving diffusion models with Synthetic data), a novel training approach for diffusion models that uses "self-synthesized data to provide negative guidance during the generation process to steer a model's generative process away from the non-ideal synthetic data manifold." The method achieves state-of-the-art results on benchmark datasets including CIFAR-10 and ImageNet-64, and demonstrates that diffusion models can be iteratively trained on their own synthetic outputs without experiencing model autophagy disorder (MAD). An additional capability allows adjusting synthetic data distributions "to match any desired in-domain target distribution to help mitigate biases and ensure fairness."

## Key Concepts

- [[model-autophagy-disorder]]
- [[diffusion-models]]
- [[synthetic-data]]
- [[mitigation]]
- [[fairness]]

## Notes

Proposes SIMS: uses self-synthesized data as negative guidance to steer away from "bad" synthetic manifold rather than toward "good" real manifold. From the Baraniuk group (Rice DSP Lab). One of the few papers claiming to solve MAD rather than just document it. Also listed in Fairness section due to the bias mitigation capability.

Source page sections: Mitigation, Fairness
