---
title: "RL on Incorrect Synthetic Data Scales the Efficiency of LLM Math Reasoning by Eight-Fold"
source_type: paper
authors: [Amrith Setlur, Saurabh Garg, Xinyang Geng, Naman Garg, Virginia Smith, Aviral Kumar]
url: https://arxiv.org/abs/2406.14532
date: 2024
tags:
  - self-consuming-ai
  - synthetic-data
  - language-models
  - mitigation
  - reinforcement-learning
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The paper examines training large language models on synthetically generated data for mathematical reasoning. Researchers discovered that incorporating model-generated incorrect responses alongside correct ones, when structured appropriately, delivers performance improvements equivalent to "attaining performance similar to amplifying the amount of synthetic data by 8×." The approach leverages per-step negative examples to help models unlearn spurious patterns, functioning as advantage-weighted reinforcement learning that proves more robust than relying solely on positive training examples.

## Key Concepts

- [[synthetic-data]]
- [[reinforcement-learning]]
- [[language-models]]
- [[mitigation]]

## Notes

Counter-intuitive result: training on incorrect synthetic data, not just correct data, improves performance significantly. Framed as advantage-weighted RL. Relevant to the mitigation literature: structured use of negative examples from synthetic data can be highly beneficial rather than harmful.

Source page section: Mitigation
