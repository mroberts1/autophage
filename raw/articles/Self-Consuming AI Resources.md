![](https://dsp.rice.edu/files/2024/09/2cows.jpeg)

Advances in generative artificial intelligence (AI) algorithms for text, imagery, and other data types have led to the temptation to use AI-synthesized data to train next-generation models. Repeating this process creates a self-consuming loop whose properties are poorly understood. Unfortunately, recent research has shown that repeated training with synthetic data forms a **self-consuming feedback loop** that causes the model distribution to drift away from reality, reinforcing biases, amplifying artifacts, and lowering the quality and diversity of next-generation models, a phenomena often referred to as **model collapse** or **model autophagy disorder (MAD)**.

The goal of this webpage is to collect and help organize the growing literature on AI self-consuming feedback loops. To post new links or correct existing links, please email [selfconsumingAI@gmail.com](mailto:selfconsumingAI@gmail.com)

**Foundations**

- Martínez G, Watson L, Reviriego P, Hernández JA, Juarez M, Sarkar R. [Combining Generative Artificial Intelligence (AI) and the Internet: Heading Towards Evolution or Degradation?](https://arxiv.org/abs/2303.01255). arXiv preprint arXiv:2303.01255. 17 February 2023.
- Casco-Rodriguez J, Luzi L, Alemohammad S, Humayun AI, LeJeune D, Siahkoohi A, Baraniuk R. [Toward Understanding the Impact of Generative AI on Future Generative AI](https://dsp.rice.edu/files/2024/09/599_josue_12apr23.pdf). Rice University ELEC599 Project Report, 12 April 2023.
- Casco-Rodriguez J, Luzi L, Alemohammad S, Sonkar, S, Humayun AI, Siahkoohi A, Baraniuk R. [Toward Understanding the Impact of Generative AI on Future Generative AI](https://dsp.rice.edu/files/2024/09/madcow_interface_rice.pdf). Interface Rice, 18 May 2023.
- Shumailov I, Shumaylov Z, Zhao Y, Gal Y, Papernot N, Anderson R. [The Curse of Recursion: Training on Generated Data Makes Models Forget](https://arxiv.org/abs/2305.17493). arXiv:2305.17493, 27 May 2023.
- Alemohammad S, Casco-Rodriguez J, Luzi L, Humayun AI, Babaei H, LeJeune D, Siahkoohi A, Baraniuk R. [Self-Consuming Generative Models Go MAD](https://arxiv.org/abs/2307.01850). arXiv:2307.01850, 4 July 2024.
- Bertrand Q, Bose AJ, Duplessis A, Jiralerspong M, Gidel G. [On the Stability of Iterative Retraining of Generative Models on Their Own Data](https://arxiv.org/abs/2310.00429). arXiv:2310.00429. 30 September 2023.
- Guo Y, Shang G, Vazirgiannis M, Clavel C. [The curious decline of linguistic diversity: Training language models on synthetic text](https://arxiv.org/abs/2311.09807). arXiv:2311.09807. 16 November 2023.
- Bohacek M, Farid H. [Nepotistically Trained Generative-AI Models Collapse](https://arxiv.org/abs/2311.12202). arXiv:2311.12202. 20 November 2023.
- Alemohammad S, Casco-Rodriguez J, Luzi L, Humayun AI, Babaei H, LeJeune D, Siahkoohi A, Baraniuk R. [Self-Consuming Generative Models Go MAD](https://openreview.net/forum?id=ShjMHfmPs0). International Conference on Learning Representations (ICLR), 16 January 2024.
- Bertrand Q, Bose AJ, Duplessis A, Jiralerspong M, Gidel G. [On the Stability of Iterative Retraining of Generative Models on Their Own Data](https://openreview.net/forum?id=ShjMHfmPs0)[.](https://arxiv.org/abs/2310.00429) International Conference on Learning Representations (ICLR), 16 January 2024.
- Dohmatob E, Feng Y, Yang P, Charton F, Kempe J. [A Tale of Tails: Model Collapse as a Change of Scaling Laws](https://arxiv.org/abs/2402.07043). arXiv:2402.07043. 10 February 2024.
- Dohmatob E, Feng Y, Kempe J. [Model Collapse Demystified: The Case of Regression](https://arxiv.org/abs/2402.07712). arXiv:2402.07712. 12 February 2024.
- Fu S, Zhang S, Wang Y, Tian X, Tao D. [Towards Theoretical Understandings of Self-Consuming Generative Models](https://arxiv.org/abs/2402.11778). arXiv:2402.11778. 19 February 2024.
- Gerstgrasser M, Schaeffer R, Dey A, Rafailov R, Sleight H, Hughes J, Korbak T, Agrawal R, Pai D, Gromov A, Roberts DA. [Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data](https://arxiv.org/abs/2404.01413). arXiv:2404.01413. 1 April 2024.
- Marchi M, Soatto S, Chaudhari P, Tabuada P. [Heat Death of Generative Models in Closed-Loop Learning](https://arxiv.org/abs/2404.02325). arXiv:2404.02325. 2 April 2024.
- Martínez G, Watson L, Reviriego P, Hernández JA, Juarez M, Sarkar R. [Towards Understanding the Interplay of Generative Artificial Intelligence and the Internet](https://link.springer.com/chapter/10.1007/978-3-031-57963-9_5). International Workshop on Epistemic Uncertainty in Artificial Intelligence, 4 April 2024.
- Gillman N, Freeman M, Aggarwal D, Chia-Hong HS, Luo C, Tian Y, Sun C. [Self-Correcting Self-Consuming Loops for Generative Model Training](https://openreview.net/forum?id=i0nVanexij). International Conference on Machine Learning, 1 May 2024.
- Mayer P, Luzi L, Siahkoohi A, Johnson DH, Baraniuk RG. [Removing Bias from Maximum Likelihood Estimation with Model Autophagy](https://arxiv.org/abs/2405.13977). arXiv:2405.13977. 22 May 2024
- Feng Y, Dohmatob E, Yang P, Charton F, Kempe J. [Beyond Model Collapse: Scaling Up with Synthesized Data Requires Reinforcement](https://arxiv.org/abs/2406.07515). arXiv:2406.07515. 11 June 2024.
- Ferbach D, Bertrand Q, Bose AJ, Gidel G. [Self-Consuming Generative Models with Curated Data Provably Optimize Human Preferences](https://arxiv.org/abs/2407.09499). arXiv:2407.09499. 12 June 2024.
- Zhang J, Qiao D, Yang M, Wei Q. [Regurgitative Training: The Value of Real Data in Training Large Language Models](https://arxiv.org/abs/2407.12835). arXiv:2407.12835. 3 July 2024.
- Shumailov I, Shumaylov Z, Zhao Y, Papernot N, Anderson R, Gal Y. [AI Models Collapse when Trained on Recursively Generated Data](https://www.nature.com/articles/s41586-024-07566-y). Nature. 631(8022):755-9, 25 July 2024.

**Mitigation & Prevention**

- Bertrand Q, Bose AJ, Duplessis A, Jiralerspong M, Gidel G. [On the Stability of Iterative Retraining of Generative Models on Their Own Data](https://openreview.net/forum?id=ShjMHfmPs0)[.](https://arxiv.org/abs/2310.00429) International Conference on Learning Representations (ICLR), 16 January 2024.
- Alemohammad S, Casco-Rodriguez J, Luzi L, Humayun AI, Babaei H, LeJeune D, Siahkoohi A, Baraniuk R. [Self-Consuming Generative Models Go MAD](https://openreview.net/forum?id=ShjMHfmPs0). International Conference on Learning Representations (ICLR), 16 January 2024.
- Gillman N, Freeman M, Aggarwal D, Chia-Hong HS, Luo C, Tian Y, Sun C. [Self-Correcting Self-Consuming Loops for Generative Model Training](https://openreview.net/forum?id=i0nVanexij). International Conference on Machine Learning. 1 May 2024.
- Feng Y, Dohmatob E, Yang P, Charton F, Kempe J. Beyond Model Collapse: [Scaling Up with Synthesized Data Requires Reinforcement](https://arxiv.org/abs/2406.07515). arXiv:2406.07515. 11 June 2024.
- Setlur A, Garg S, Geng X, Garg N, Smith V, Kumar A. [RL on Incorrect Synthetic Data Scales the Efficiency of LLM Math Reasoning by Eight-Fold](https://arxiv.org/abs/2406.14532). arXiv:2406.14532. 20 June 2024.
- Alemohammad S, Humayun AI, Awarval S, Collomosse J, Baraniuk R. [Self-Improving Diffusion Models with Synthetic Data](https://arxiv.org/abs/2408.16333). arXiv:2408.16333. 29 August 2024.

**Fairness & Bias**

- Pan A, Jones E, Jagadeesan M, Steinhardt J. [Feedback Loops with Language Models Drive In-Context Reward Hacking](https://arxiv.org/abs/2402.06627). arXiv:2402.06627. 9 February 2024.
- Wyllie S, Shumailov I, Papernot N. [Fairness Feedback Loops: Training on Synthetic Data Amplifies Bias](https://arxiv.org/abs/2403.07857). ACM Conference on Fairness, Accountability, and Transparency. 3 June 2024.
- Alemohammad S, Humayun AI, Awarval S, Collomosse J, Baraniuk R. [Self-Improving Diffusion Models with Synthetic Data.](https://arxiv.org/abs/2408.16333) arXiv:2408.16333. 29 August 2024.

**Social Implications**

- Peterson AJ. [AI and the Problem of Knowledge Collapse](https://arxiv.org/abs/2404.03502). arXiv:2404.03502. 4 April 2024.
- Del Rio-Chanona M, Laurentsyeva N, Wachs J. [Are Large Language Models a Threat to Digital Public Goods? Evidence from Activity on Stack Overflow](https://arxiv.org/abs/2307.07367). arXiv:2307.07367. 14 July 2023.
- Pappalardo L, Ferragina E, Citraro S, Cornacchia G, Nanni M, Rossetti G, Gezici G, Giannotti F, Lalli M, Gambetta D, Mauro G. [A Survey on the Impact of AI-based Recommenders on Human Behaviours: Methodologies, Outcomes and Future Directions.](https://www.arxiv.org/abs/2407.01630) arXiv:2407.01630. 29 June 2024.
- Gray A. [ChatGPT" Contamination": Estimating the Prevalence of LLMs in the Scholarly Literature](https://arxiv.org/abs/2403.16887). arXiv:2403.16887. 25 March 2024.
- Doshi AR, Hauser OP. [Generative Artificial Intelligence Enhances Individual Creativity But Reduces the Collective Diversity of Novel Content.](https://www.science.org/doi/10.1126/sciadv.adn5290) 12 July 2024.

**Synthetic Data and Downstream Tasks**

- Taori R, Hashimoto T. [Data Feedback Loops: Model-Driven Amplification of Dataset Biases.](https://arxiv.org/abs/2209.03942) InInternational Conference on Machine Learning (ICLR). 3 July2023.
- Geng S, Hsieh CY, Ramanujan V, Wallingford M, Li CL, Koh PW, Krishna R. [The Unmet Promise of Synthetic Training Images: Using Retrieved Real Images Performs Better.](https://arxiv.org/abs/2406.05184) arXiv:2406.05184. 7 June 2024.

**Selected Media Coverage**

- - **[Google News search](https://www.google.com/search?q=%22model+collapse%22+OR+%22model+autophagy%22&source=lnms&tbm=nws)**
		- " [Generative AI Goes 'MAD' When Trained on AI-Created Data Over Five Times](https://www.tomshardware.com/news/generative-ai-goes-mad-when-trained-on-artificial-data-over-five-times)," Tom's Hardware, 12 July 2023
		- " [AI Loses Its Mind After Being Trained on AI-Generated Data](https://futurism.com/ai-trained-ai-generated-data)," Futurism, 12 July 2023
		- " [Scientists make AI go crazy by feeding it AI-generated content](https://www.tweaktown.com/news/92328/scientists-make-ai-go-crazy-by-feeding-it-generated-content/index.html)," TweakTown, 13 July 2023
		- " [AI models trained on AI-generated data experience Model Autophagy Disorder (MAD) after approximately five training cycles](https://multiplatform.ai/ai-models-trained-on-ai-generated-data-experience-model-autophagy-disorder-mad-after-approximately-five-training-cycles/)," Multiplatform.AI, 13 July 2023
		- " [AIs trained on AI-generated images produce glitches and blurs](https://www.newscientist.com/article/2382519-ais-trained-on-ai-generated-images-produce-glitches-and-blurs/),” NewScientist, 18 July 2023
		- " [Training AI With Outputs of Generative AI Is Mad](https://www.cdotrends.com/story/18288/training-ai-outputs-generative-ai-mad) " CDOtrends, 19 July 2023
		- " [When AI Is Trained on AI-Generated Data, Strange Things Start to Happen](https://futurism.com/ai-trained-ai-generated-data-interview) " Futurism, 1 August 2023
		- " [Mad AI risks destroying the Information Age](https://twitter.com/AndrewOrlowski/status/1788464497570545827) " The Telegraph, 1 February 2024
		- '' [AI's 'mad cow disease' problem tramples into earnings season''](https://finance.yahoo.com/news/ais-mad-cow-disease-problem-tramples-into-earnings-season-100005953.html?guccounter=1), Yahoo!finance, 12 April 2024
		- ["AI systems could be on the verge of collapsing into nonsense, scientists warn"](https://www.independent.co.uk/tech/ai-chatgpt-artificial-intelligence-nonsense-b2586279.html) Independent, 24 July 2024
		- " [Cesspool of AI crap or smash hit? LinkedIn’s AI-powered Collaborative Articles offer a sobering peek at the future of content](https://fortune.com/2024/04/18/linkedin-microsoft-collaborative-articles-generative-ai-feedback-loop-user-backlash/?456789) '' Fortune, 18 April 2024
		- ["Why AI Models Are Collapsing And What It Means For The Future Of Technology"](https://www.forbes.com/sites/bernardmarr/2024/08/19/why-ai-models-are-collapsing-and-what-it-means-for-the-future-of-technology/) Forbes, 19 August 2024
		- " [When A.I.’s Output Is a Threat to A.I. Itself](https://www.nytimes.com/interactive/2024/08/26/upshot/ai-synthetic-data.html)," New York Times, 26 August 2024
		- " **[AI's Mad Loops](https://magazine.rice.edu/winter-2025/ais-mad-loops)**," Rice Magazine, February 2025