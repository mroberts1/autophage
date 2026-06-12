---
title: "Fairness Feedback Loops: Training on Synthetic Data Amplifies Bias"
source_type: paper
authors: [Sierra Wyllie, Ilia Shumailov, Nicolas Papernot]
url: https://arxiv.org/abs/2403.07857
date: 2024
tags:
  - self-consuming-ai
  - fairness
  - feedback-loops
  - synthetic-data
  - model-collapse
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper examines how prior model outputs can contaminate subsequent training datasets across successive model generations. The authors explain that "Model-induced distribution shifts (MIDS) occur as previous model outputs pollute new model training sets over generations of models." They demonstrate that this phenomenon can degrade performance, fairness, and representation of minority groups even when datasets begin without bias. The research introduces "algorithmic reparation (AR)" as a framework for intentional, positive interventions. By carefully selecting training batches for stochastic gradient descent, the authors show how AR can address unfairness emerging from feedback loops in machine learning systems.

## Key Concepts

- [[fairness]]
- [[feedback-loops]]
- [[model-collapse]]
- [[synthetic-data]]
- [[mitigation]]

## Notes

Connects model collapse explicitly to fairness: even unbiased datasets degrade to under-represent minority groups when models loop on their own outputs. Proposes "algorithmic reparation" (AR) as a mitigation. Co-authored with Shumailov, linking to [[shumailov-curse-of-recursion-2023]]. Published at ACM FAccT 2024.

Source page section: Fairness & Bias
