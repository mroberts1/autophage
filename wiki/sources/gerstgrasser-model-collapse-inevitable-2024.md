---
title: "Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data"
source_type: paper
authors: [Matthias Gerstgrasser, Rylan Schaeffer, Apratim Dey, Rafael Rafailov, Henry Sleight, John Hughes, Tomasz Korbak, Rajashree Agrawal, Dhruv Pai, Andrey Gromov, Daniel A. Roberts, Diyi Yang, David L. Donoho, Sanmi Koyejo]
url: https://arxiv.org/abs/2404.01413
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - self-consuming-loops
  - synthetic-data
  - mitigation
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The study investigates how training generative models on their own generated outputs affects performance. While prior research suggested this creates "model collapse"—progressive degradation over iterations—this work challenges that conclusion by examining a more realistic scenario where data accumulates rather than gets replaced. Through experiments with language models and other generative models, the researchers show that "accumulating the successive generations of synthetic data alongside the original real data avoids model collapse." They provide theoretical analysis demonstrating that accumulated data produces bounded test errors independent of iteration count, preventing collapse from occurring.

## Key Concepts

- [[model-collapse]]
- [[self-consuming-loops]]
- [[synthetic-data]]
- [[mitigation]]
- [[iterative-retraining]]

## Notes

Key counterargument to inevitable collapse: if real data is accumulated (not replaced) alongside each generation of synthetic data, collapse is averted. The distinction between data replacement vs. accumulation regimes is the central contribution. Challenges the pessimistic framing of [[shumailov-curse-of-recursion-2023]] and [[alemohammad-self-consuming-go-mad-2023]].

Source page section: Foundations
