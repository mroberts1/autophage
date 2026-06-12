---
title: "Model Collapse Demystified: The Case of Regression"
source_type: paper
authors: [Elvis Dohmatob, Yunzhen Feng, Julia Kempe]
url: https://arxiv.org/abs/2402.07712
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - synthetic-data
  - scaling-laws
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper examines "model collapse," a phenomenon occurring when models trained recursively on data from prior model generations experience performance degradation. The researchers provide analytical formulas for this behavior in high-dimensional regression settings. Their work identifies polynomial spectral decay conditions that produce modified scaling laws with crossover phenomena between fast and slow convergence rates. They introduce an adaptive regularization strategy to reduce model collapse and validate findings experimentally.

## Key Concepts

- [[model-collapse]]
- [[scaling-laws]]
- [[iterative-retraining]]
- [[mitigation]]

## Notes

Companion to [[dohmatob-tale-of-tails-2024]]; this paper provides exact analytical formulas in the regression setting. Introduces adaptive regularization as a mitigation strategy. The spectral decay analysis links model collapse to the geometry of the training data distribution.

Source page section: Foundations
