---
title: Tag Vocabulary
tags: []
created: 2026-06-12
updated: 2026-06-12
---

# Tag Vocabulary

Canonical tag list. Check here before creating a new tag. Tags use lowercase-kebab-case and derive from the subject's own conceptual vocabulary.

## Tags

### Topic Tags (top-level research area)

- `self-consuming-ai` — umbrella tag for all research on AI self-consuming/feedback loops, model collapse, and related phenomena

### Core Phenomena

- `model-collapse` — the progressive degradation of model quality/diversity when trained on their own outputs
- `model-autophagy-disorder` — the MAD framing of collapse (Alemohammad/Baraniuk group); includes quality (precision) vs. diversity (recall) degradation
- `self-consuming-loops` — the mechanism: iterative training where model outputs feed back as training data (also: autophagous loops)
- `knowledge-collapse` — epistemic/social version of model collapse: AI use erodes diversity and accuracy of collective human knowledge (Peterson)
- `distributional-drift` — shift in a model's output distribution away from the true data distribution over training iterations
- `feedback-loops` — general concept; includes training-time loops, deployment-time loops (recommender systems, agent feedback), and societal loops

### Technical Concepts

- `synthetic-data` — AI-generated data used for training or evaluation
- `iterative-retraining` — the process of training successive model generations on prior outputs
- `scaling-laws` — power-law relationships between model scale and performance; model collapse changes these curves
- `diffusion-models` — generative models trained by denoising; specific domain for several papers
- `reinforcement-learning` — RL methods; relevant to mitigation strategies and reward hacking
- `reward-hacking` — in-context optimization of a proxy objective with harmful side effects

### Applied and Social

- `fairness` — bias amplification and minority-class degradation in self-consuming loops
- `social-implications` — societal effects: knowledge commons, cultural diversity, public goods
- `recommender-systems` — recommendation algorithms as a distinct class of feedback loop
- `language-models` — LLM-specific research
- `generative-models` — general tag for image generators, LLMs, VAEs, etc.
- `mitigation` — approaches to prevent or reduce model collapse / feedback loop harms
