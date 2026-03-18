---
layout: project
title: Analyzing Fairness in Medical LMs
status: completed
description: Incorporating Safety Through Accuracy and Fairness (InSaAF) - Checking readiness of LLMs in the Indian Legal Domain.
theme: fairness
areas: healthcare
---

**Team**: Gokul S Krishnan, Krithi Shailya, Shreyash Adappanavar, Balaraman Ravindran

<p style="text-align: justify">
<b>Short Description:</b> The deployment of Large Language Models (LLMs) in high-stakes medical settings poses a critical AI alignment challenge, as models can inherit and amplify societal biases, leading to significant disparities. Existing fairness evaluation methods fall short in these contexts as they typically use simplistic metrics that overlook the multi-dimensional nature of medical harms. This also promotes models that are fair only because they are clinically inert, defaulting to safe but potentially inaccurate outputs. To address this gap, our contributions are mainly two-fold: first, we construct two large-scale, controlled benchmarks (ED-Triage and Opioid Analgesic Recommendation) from MIMIC-IV, comprising over 50,000 prompts with twelve race x gender variants and three context tiers. Second, we propose a multi-metric framework - Multi-faceted Fairness Assessment based on hARMs (mFARM) to audit fairness for three distinct dimensions of disparity (Allocational, Stability, and Latent) and aggregate them into an mFARM score. We also present an aggregated Fairness-Accuracy Balance (FAB) score to benchmark and observe trade-offs between fairness and prediction accuracy. We empirically evaluate four open-source LLMs (Mistral-7B, BioMistral-7B, Qwen-2.5-7B, Bio-LLaMA3-8B) and their finetuned versions under quantization and context variations. Our findings showcase that the proposed mFARM metrics capture subtle biases more effectively under various settings. We find that most models maintain robust performance in terms of mFARM score across varying levels of quantization but deteriorate significantly when the context is reduced. Our benchmarks and evaluation code are publicly released to enhance research in aligned AI for healthcare.
</p>

**Publication**: Shreyash Adappanavar, Krithi Shailya, Gokul S Krishnan, Sriraam Natarajan, Balaraman Ravindran. "[*mFARM: Towards Multi-Faceted Fairness Assessment based on HARMs in Clinical Decision Support*](https://arxiv.org/abs/2509.02007){:target="_blank"}", arXiv preprint arXiv:2509.02007 (2025).