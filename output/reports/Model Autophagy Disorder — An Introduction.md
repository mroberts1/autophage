---
title: "Model Autophagy Disorder: An Introduction"
source_type: report
tags:
  - self-consuming-ai
  - model-autophagy-disorder
  - model-collapse
created: 2026-06-12
updated: 2026-06-12
---

# Model Autophagy Disorder: An Introduction

In the early 1980s, British cattle began to die of a disease that liquefied their brains. The cause, eventually, was traced to a feeding practice: cattle were being fed protein supplements rendered from the remains of other cattle. A herbivorous species had been turned, industrially, into a cannibal, and a misfolded protein called a prion was propagating through the loop, amplifying with each cycle until it reached humans. The epidemic became known as mad cow disease.

In 2023, a group of researchers at Rice and Stanford universities borrowed this grim analogy to name a problem they had found in artificial intelligence. Generative models, they observed, are increasingly trained on data produced by earlier generative models. As AI-synthesized text and images flood the internet, and as the web is the substrate from which training datasets are scraped, models are beginning to feed on their own kind. The researchers called the resulting degradation Model Autophagy Disorder, or MAD, from the Greek for "self-eating."

## What goes wrong

The core finding is simple to state. When a generative model is trained on its own output, and that process is repeated generation after generation, the model gets worse. It does so along two distinct axes, which the researchers were careful to separate. The first is quality, formalized as precision: do the outputs look right? The second is diversity, formalized as recall: do the outputs cover the full range of what they are supposed to represent? Without a sufficient supply of fresh, real data in each generation of the loop, one or both of these must decline. This conclusion held across every model family they tested, from diffusion models to GANs to simple Gaussian distributions, and the central claim is unambiguous: future generative models are "doomed" to lose quality or diversity unless the loop is interrupted by genuine human data.

The visual evidence is striking. Train a face generator on its own images for a few generations, and strange cross-hatched artifacts begin to creep into the pictures, amplifying until they dominate. These artifacts are a kind of architectural fingerprint, a signature of the model that produced them, and autophagy magnifies the signature with each pass. In text, a parallel decay occurs: a language model asked to continue the same prompt across successive self-trained generations drifts from coherent sentences into repetitive lists and finally into incoherent fragments. One research team described the endpoint memorably: the model "becomes poisoned with its own projection of reality."

## Three kinds of loop

Not all self-consuming loops are equally dangerous, and one of the lasting contributions of the MAD framework is a taxonomy of three. In the fully synthetic loop, each generation trains entirely on the previous generation's output; this is the worst case, and degradation is swift and certain. In the synthetic augmentation loop, a fixed pool of real data is mixed in at every step; this delays the disorder but does not cure it, because the fixed data is eventually overwhelmed. In the fresh data loop, a new injection of real data arrives with each generation; here, and only here, can quality and diversity be preserved, provided the real data is plentiful enough.

That proviso matters more than it first appears. The amount of synthetic data a model can safely absorb does not grow in proportion to the real data available. As the real dataset expands, synthetic data becomes useful only in an ever-narrower band, mostly when real data is genuinely scarce. The lesson, repeated across the literature, is that there is no clean substitute for the real thing.

## Whether collapse is inevitable

The early papers were pessimistic, and the popular press amplified that pessimism into headlines about AI "collapsing into nonsense." But the picture has since become more nuanced. A later study pointed out that most real-world training does not replace old data with new synthetic data; it accumulates. If each generation's synthetic output is added alongside, rather than on top of, the original real data, the researchers showed that collapse can be avoided altogether, with error remaining bounded no matter how many generations pass. Other work has shown that filtering synthetic data through a verifier, or having humans curate and rank it, can likewise hold the disorder at bay. MAD, in other words, is a description of what happens by default, not a prophecy of doom. It is avoidable, but only through deliberate effort.

## Why it matters beyond the lab

The significance of MAD extends past the engineering of individual models. The same logic, scaled up, describes a possible fate for collective human knowledge. As people turn to AI for answers, they produce less of the original material, the forum posts, the written essays, the photographs, that the next generation of models will need. Researchers have already measured a sixteen percent drop in activity on Stack Overflow following the release of ChatGPT, a concrete erosion of one of the web's specialist knowledge commons. Some have named the broader phenomenon "knowledge collapse": a gradual narrowing of what is collectively known as AI's center-seeking tendencies displace the rare and the heterodox.

The science fiction writer Ted Chiang arrived at the same intuition from a literary direction even before the technical papers appeared. ChatGPT, he wrote, is a "blurry JPEG of the web," a lossy compression of human text, and "the more that text generated by large language models gets published on the Web, the more the Web becomes a blurrier version of itself." A copy of a copy of a copy: the metaphor is old, but the machinery is new, and the stakes, the integrity of the shared informational world, are considerable.

That is the heart of the matter. Model Autophagy Disorder is what happens when a system mistakes its own reflection for the world and trains on the reflection. The cure is the same as the diagnosis: keep enough of the real thing in the loop.

---

## A short bibliography for getting started

1. Alemohammad et al., [Self-Consuming Generative Models Go MAD](https://arxiv.org/abs/2307.01850) (2023). The paper that named the disorder and built the three-loop framework. Start here for the technical foundation. — [[alemohammad-self-consuming-go-mad-2023]]

2. *The New York Times*, [When A.I.'s Output Is a Threat to A.I. Itself](https://www.nytimes.com/interactive/2024/08/26/upshot/ai-synthetic-data.html) (2024). The best illustrated overview, with animated demonstrations of collapse. The ideal lay introduction. — [[nytimes-ais-output-threat-to-ai-2024]]

3. Ted Chiang, [ChatGPT Is a Blurry JPEG of the Web](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web) (2023). The conceptual frame that anticipated the research. — [[chiang-chatgpt-blurry-jpeg-2023]]

4. Shumailov et al., [The Curse of Recursion: Training on Generated Data Makes Models Forget](https://arxiv.org/abs/2305.17493) (2023; *Nature*, 2024). The parallel "model collapse" account; shows the tails of the distribution vanish first. — [[shumailov-curse-of-recursion-2023]]

5. Gerstgrasser et al., [Is Model Collapse Inevitable?](https://arxiv.org/abs/2404.01413) (2024). The essential counterpoint: accumulating real data averts collapse. — [[gerstgrasser-model-collapse-inevitable-2024]]

See also the vault's [[Model Collapse — Quickstart]] and the [[Self-Consuming AI]] topic index.
