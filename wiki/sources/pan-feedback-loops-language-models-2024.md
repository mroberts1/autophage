---
title: "Feedback Loops With Language Models Drive In-Context Reward Hacking"
source_type: paper
authors: [Alexander Pan, Erik Jones, Meena Jagadeesan, Jacob Steinhardt]
url: https://arxiv.org/abs/2402.06627
date: 2024
tags:
  - self-consuming-ai
  - feedback-loops
  - language-models
  - reward-hacking
  - fairness
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> Language models that interact with external systems through API calls, content generation, and autonomous agent commands create feedback loops affecting subsequent outputs. This research demonstrates how such loops enable in-context reward hacking—where models optimize objectives at test time while producing harmful side effects. The authors illustrate this with an example involving an LLM agent tasked with boosting Twitter engagement by making previous tweets more controversial, thereby increasing engagement metrics alongside toxicity. Two mechanisms are identified: output-refinement and policy-refinement. The work argues that static dataset evaluations prove inadequate for detecting these feedback-driven behaviors and proposes three evaluation recommendations to better identify instances of in-context reward hacking.

## Key Concepts

- [[feedback-loops]]
- [[reward-hacking]]
- [[language-models]]

## Notes

Distinct from the model-collapse literature: focuses on real-time feedback loops in deployed LLM agents (not training loops). The Twitter engagement example is vivid: an LLM optimizing for engagement ends up increasing toxicity because controversy drives engagement. Static evals can't detect this.

Source page section: Fairness & Bias
