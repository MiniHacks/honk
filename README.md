# Honk!
*A goose (and a friend) ~~helps you hold yourself~~ hold you accountable while studying.*

![This is what the goose does if you don't behave](https://cdn.discordapp.com/attachments/939609038226857995/944985356477026314/chonk.png)
(this is what the goose does if you don't behave)

## What Is Honk?

We all struggle with staying focused online.

**Honk is a browser extension that helps users be more aware of when they get off topic while studying.** It uses ML to determine if the user is going down a rabbithole or rapidly changing topics in a way unconducive to learning. In addition, **Honk offers accountability features such as texting a friend when the user is unproductive.**

## Infrastructure

![We’re big Lucidchart enthusiasts](https://cdn.discordapp.com/attachments/939609038226857995/944987038262890556/Blank_diagram.png)

The frontend is **Next.js (React)** with **Chakra UI** for components. We implemented **Firebase Auth** with based on **phone number** for login. Our main product is a **Chrome extension** which interfaces through our website with an `iframe` (hacky way to avoid most extension specific work).

The backend is a **FastAPI** REST microservice that serves both keyword extraction and document similarity analysis. For extraction, **YAKE!** and **SpaCy** were used initially for keywords from statistical features (not pretrained on a corpus!) and entities extraction respectively. **KeyBERT** (**BERT** embeddings + cosine similarity, in short) proved to be more effective in n-gram extraction, likely due to the pretraining. For document similarity, we used **MiniLM**, a lightweight distilled transformer model (created via “deep self-attention distillation” which is a process I don’t quite understand yet). 

We structured the project as a monorepo and use **Docker Compose** with **GitHub Actions** to automagically deploy to a **Google Cloud Run** on push. We have a random **MongoDB** instance in our composition for no reason (I don’t know why I felt the need to mention that). **Caddy** was used as a reverse proxy.

## Challenges

I am running on minimal sleep, apologies if none of these issues make sense.

This project was actually a massive pivot. We were initially planning to make a VR hack for watching movies with friends but encountered a multitude of problems. For one, none of us have done significant game development work and we didn’t have a clear idea of the tooling to use. We initially split between Unreal and Unity then found that to work with Oculus requires building Oculus’ Unreal fork from scratch which requires over a day on even incredibly beefy hardware. Thus, we were limited to Unity and quickly realized how clueless we are about ~~most things~~ everything. With Photon as an additional layer for multiplayer, having to deal with Oculus developer accounts, the ADB not playing nicely with multiple headsets, and the fact that we’re written exactly 37 lines of C# ever between us made it increasingly clear that our idea was not viable in the timeframe. Feeling thoroughly burnt out around dinner (1900 EST), we pivoted to Honk! leaving us with about 12 hours to complete our hack.

With projects like this, there is always a balance between ML and frontend heuristics. I think the ML went swimmingly but we didn’t have an entirely clear vision which made heuristic design difficult. I’d get more into this but I’m being pressured to narrate a video at the last second.

We had a JS REST API haphazardly attached to our frontend via Next.js magic that communicated directly with the Python microservice. All of the DB (Firebase) work was done through JS and that meant we had to serialize vectors then transfer them. Numpy was rather uncooperative and conveying the JSON programmatically rather than through Postman somehow surfaced issues with little-endian notation and structures that were just being parsed as strings so we had to parse it twice then that broke for whatever reason but it seems to be working now so ¯\\_(ツ)_/¯.

Through brilliantly inefficient code we managed to hit the Firebase free tier limit. We were excited to have the opportunity to actually spend some GCP credit but it seems that we’ll fail to hit even the 5 dollar mark on the Blaze plan.

## What’s Next for Honk?

By our standards, this is a strangely practical project. As such, might mess with the heuristic further to make it more usable for day-to-day study sessions.

## Citations
[1]
W. Wang, F. Wei, L. Dong, H. Bao, N. Yang, and M. Zhou, “MiniLM: Deep Self-Attention Distillation for Task-Agnostic Compression of Pre-Trained Transformers,” arXiv:2002.10957 [cs], Apr. 2020, Accessed: Feb. 20, 2022. [Online]. Available: http://arxiv.org/abs/2002.10957
[2]
P. Sharma and Y. Li, “Self-Supervised Contextual Keyword and Keyphrase Retrieval with Self-Labelling,” MATHEMATICS & COMPUTER SCIENCE, preprint, Aug. 2019. doi: 10.20944/preprints201908.0073.v1.
[3]
R. Campos, V. Mangaravite, A. Pasquali, A. M. Jorge, C. Nunes, and A. Jatowt, “YAKE! Collection-Independent Automatic Keyword Extractor,” in Advances in Information Retrieval, vol. 10772, G. Pasi, B. Piwowarski, L. Azzopardi, and A. Hanbury, Eds. Cham: Springer International Publishing, 2018, pp. 806–810. doi: 10.1007/978-3-319-76941-7_80.
