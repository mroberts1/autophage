---
title: "Regurgitative Training: The Value of Real Data in Training Large Language Models"
source_type: paper
authors: [Jinghui Zhang, Dandan Qiao, Mochen Yang, Qiang Wei]
url: https://arxiv.org/abs/2407.12835
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - synthetic-data
  - language-models
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> The research examines what occurs when training new LLMs with data partially sourced from other LLMs. The authors assess "regurgitative training" effects through fine-tuning experiments with GPT-3.5 on machine translation tasks. They "find strong evidence that regurgitative training clearly handicaps the performance of LLMs." The performance decline stems from "higher error rates and lower lexical diversity in LLM-generated data." The team proposes three mitigation strategies: quality-driven ordered training, combining outputs from multiple LLMs, and AI detection-based filtering. The researchers conclude that "the value of real, human-generated data in training LLMs...cannot be easily substituted by synthetic, LLM-generated data."

## Key Concepts

- [[model-collapse]]
- [[synthetic-data]]
- [[language-models]]
- [[mitigation]]

## Notes

Coined the term "regurgitative training" for the practice of training on LLM-generated data. Practical focus: fine-tuning GPT-3.5 on machine translation. Mitigation strategies proposed include AI-detection-based filtering.

Source page section: Foundations
