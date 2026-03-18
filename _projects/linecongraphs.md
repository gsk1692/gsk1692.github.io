---
layout: project
title: Emotion Recognition in Conversations
status: completed
description: Linecongraphs - Line conversation graphs for effective emotion recognition using graph neural networks.
theme: Applied AI
areas: Applied NLP
---

**Team**: Gokul S Krishnan, Sarala Padi, Craig S. Greenberg, Balaraman Ravindran, Dinesh Manocha, and Ram D. Sriram

**Collaborators**: Precog Labs, IIIT Hyderabad

<p style="text-align: justify">
<b>Short Description:</b> Emotion Recognition in Conversations (ERC) is an important aspect of affective computing with practical applications in healthcare, education, chatbots, and social media platforms. Previous approaches to ERC\text {ERC} analysis involved using graph neural network architectures to model both speaker and long-term contextual information. In this paper, we introduce new models for ERC\text {ERC} analysis: the LineConGCN and LineConGAT models, which are constructed using a graph construction strategy for conversations called line conversational graphs (LineConGraphs). LineConGraph is designed to capture short-term conversational context using one previous and future utterance, while also capturing long-term context using GCN or GAT layers without explicitly integrating into the graph construction strategy. We evaluate the performance of our proposed models on two benchmark datasets, IEMOCAP\text {IEMOCAP} and MELD\text {MELD}, and show that our LineConGAT model outperforms the state-of-the-art methods with an F1-score of 64.58%\text {64.58}\% and 76.50%\text {76.50}\%. Furthermore, we demonstrate that incorporating sentiment shift information into line conversation graphs further enhances ERC\text {ERC} performance in the case of LineConGCN models. We also evaluate the performance of our proposed model by embedding speaker information into LineConGCN and LineConGAT models and show that LineConGAT and LineConGAT with speaker embeddings performed equally for ERC analysis.
</p>

**Publication**: Gokul S Krishnan, Sarala Padi, Craig S. Greenberg, Balaraman Ravindran, Dinesh Manocha, and Ram D. Sriram. "[*InSaAF: Incorporating Safety Through Accuracy and Fairness-Are LLMs Ready for the Indian Legal Domain?.*](https://ieeexplore.ieee.org/abstract/document/10858741){:target="_blank"}", IEEE Transactions on Affective Computing 16, no. 3 (2025): 1747-1759.