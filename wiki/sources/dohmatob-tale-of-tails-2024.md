---
title: "A Tale of Tails: Model Collapse as a Change of Scaling Laws"
source_type: paper
authors: [Elvis Dohmatob, Yunzhen Feng, Pu Yang, Francois Charton, Julia Kempe]
url: https://arxiv.org/abs/2402.07043
date: 2024
tags:
  - self-consuming-ai
  - model-collapse
  - scaling-laws
  - synthetic-data
  - language-models
created: 2026-06-12
updated: 2026-06-12
---

## Abstract

> As AI models expand in scale, neural scaling laws help forecast performance improvements. This research examines what occurs when synthetic data increasingly contaminates training datasets. The authors developed a theoretical framework analyzing model collapse through scaling law changes. They identified various deterioration patterns including "loss of scaling, shifted scaling with number of generations, the 'un-learning' of skills, and grokking when mixing human and synthesized data." The findings were confirmed through experiments using transformers on arithmetic tasks and Llama2 for text generation.

## Key Concepts

- [[model-collapse]]
- [[scaling-laws]]
- [[synthetic-data]]
- [[distributional-drift]]

## Notes

Connects model collapse to the scaling laws literature, showing that synthetic data contamination changes the shape of scaling curves rather than just lowering a fixed baseline. The "grokking" phenomenon in mixed data settings is a notable finding. See companion paper [[dohmatob-model-collapse-demystified-2024]] for the regression analysis.

Source page section: Foundations
