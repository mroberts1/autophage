---
title: "Self-Consuming Generative Models with Curated Data Provably Optimize Human Preferences"
source_type: paper
authors: [Damien Ferbach, Quentin Bertrand, Avishek Joey Bose, Gauthier Gidel]
url: https://arxiv.org/abs/2407.09499
date: 2024
tags:
  - self-consuming-ai
  - self-consuming-loops
  - synthetic-data
  - generative-models
  - mitigation
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The study examines how synthetic data contamination affects iterative retraining of generative models. The research demonstrates that "data curation on iterated retraining of generative models" functions as an implicit preference optimization mechanism. The authors establish theoretical guarantees showing that when data is curated using a reward model, the expected reward improves through iterative retraining. They also analyze stability when incorporating real data alongside synthetic data at each retraining step. Experimental validation on synthetic datasets and CIFAR10 reveals that this procedure amplifies biases inherent in the underlying reward model.

## Key Concepts

- [[self-consuming-loops]]
- [[synthetic-data]]
- [[mitigation]]
- [[feedback-loops]]

## Notes

Reframes curated self-consuming loops as implicit RLHF: if you filter synthetic data by a reward model before retraining, you are implicitly doing preference optimization. The bias amplification finding (reward model biases get amplified) is an important caveat. From the Gidel/Bertrand group; related to [[bertrand-stability-iterative-retraining-2023]].

Source page section: Foundations
