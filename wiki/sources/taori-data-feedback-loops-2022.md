---
title: "Data Feedback Loops: Model-Driven Amplification of Dataset Biases"
source_type: paper
authors: [Rohan Taori, Tatsunori B. Hashimoto]
url: https://arxiv.org/abs/2209.03942
date: 2022
tags:
  - self-consuming-ai
  - feedback-loops
  - synthetic-data
  - fairness
  - model-collapse
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper examines how machine learning models create problematic feedback cycles when their outputs become training data for future models. The researchers formalize a system where model interactions are collected and later used as supervision signals. They analyze stability by measuring bias changes over time, finding that bias amplification correlates with whether model outputs resemble samples from the original training distribution—a property called consistent calibration. The study tests this theory across three domains: image classification, visual role-labeling, and language generation. Models exhibiting sampling-like behavior show better calibration and greater system stability. The authors propose an intervention method to stabilize such feedback systems.

## Key Concepts

- [[feedback-loops]]
- [[distributional-drift]]
- [[fairness]]
- [[iterative-retraining]]

## Notes

Early (2022) formalization of data feedback loops in deployed ML systems. Introduces "consistent calibration" as the property predicting whether feedback loops amplify or stabilize bias. Submitted to ICML 2023. Provides theoretical grounding that connects model deployment (not just training) to distributional drift.

Source page section: Synthetic Data and Downstream Tasks
