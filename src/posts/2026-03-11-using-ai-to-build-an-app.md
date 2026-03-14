---
title: "Using AI to Build a Greek Grammar Practice App"
date: 2026-03-11
tags: ["diary", "ai", "grammar"]
summary: "I used Claude to build a custom quiz app to practice Greek cases and article endings."
layout: post
---

I ran an experiment yesterday to see which AI chatbot would help me most with language learning. The results were pretty much what I expected.

For explaining grammar, generating example sentences, and general language-learning conversations, the strongest tools were **ChatGPT and Copilot**. For creating small custom learning apps, **Claude clearly performed the best**.

I suspected that **Claude would still be the best at creating apps**, but it had been a while since I last built one with it, and I hadn’t tested the other tools for that kind of task.

So if you didn’t read my post yesterday, here are my recommendations:

- **For grammar explanations, example sentences, and general language questions:** ChatGPT or Copilot
- **For creating custom learning apps:** Claude

---

## What my language learning looked like today

Today I was reviewing Greek nouns and cases in Duolingo. I worked on plurals and the accusative case, but quickly ran into the usual problem: the endings change depending on case (nominative, accusative, genitive) and number.

I copied some example sentences from Duolingo and asked ChatGPT for a quick explanation of how the articles and noun endings change. It produced some helpful charts, which I copied into my notebook.

But charts only go so far. What I really needed was **practice** — lots of sentences and immediate feedback.

So I decided to get help from Claude: I asked **Claude** to make an app for me.

---

## Asking Claude to build a practice app

It was a long prompt because I needed to explain exactly what I wanted.

<div class="chat chat-user">
I'd like you to make me an app please. I'm very confused about accusative, nominative, genitive forms in singular and plural in Greek.<br><br>

For example:<br>
The man drinks water.<br>
I see the man.<br>
The house of the man.<br>
The men drink water.<br>
I see the men.<br>

In each of those cases "the man" is different. The word for "the" is different, and the ending is different.<br>

Can you make me an app where I have to choose the correct word for "the" and I have to choose the correct word for "man/men".<br>

For example, you would ask, "The man drinks water."<br>
And you would write: <strong>\_ \_ πίνει νερό</strong><br>

Then give six choices for the first blank (ο, τον, του, οι, τους, των) and six choices for the second blank (άντρας, άντρα, άντρες, αντρών)<br>

Each quiz should have 10 questions, and the user should have the option to do the quiz again. There should be lots of questions in the database for the app to choose from.

</div>

Claude worked for a few minutes and then presented me with a **really nice-looking app**.

I worked through one quiz and was very happy with how it functioned. The only problem was that the choices were always shown in the same order. That meant I could guess the answer by position.

So I prompted Claude again.

<div class="chat chat-user">
OK. That was a great start. But it is easy for the user to guess if the answers are always in the same position. Can you mix the answers up? And don’t say in the question whether it is nominative, accusative, or genitive. But it is nice to see that feedback after the user answers, and in the summary at the end.

</div>

The new version was **much better**. I really like it.

---

## Expanding the question bank

Claude also lets you look at the code behind the app. I had a quick look and scrolled through the question bank. It didn’t take very long to reach the end, so I asked Claude another question.

<div class="chat chat-user">
OK. This works really well. How many questions are in the question bank?
</div>

<div class="chat chat-ai">
Looking at the database in the file there are <strong>35 questions</strong> across 7 nouns.
</div>

So I asked:

<div class="chat chat-user">
I would love to have more nouns and more questions. How many could you do?
</div>

<div class="chat chat-ai">
I could comfortably add another 15–20 nouns and bring the bank up to around 150–180 questions.
</div>

It also explained which additional nouns it could include.

Then it asked:

<div class="chat chat-ai">
Want me to go ahead and add them?
</div>

Of course I said:

<div class="chat chat-user">
Yes please.
</div>

I can’t help being polite to my chatbots.

---

# The final result

I love the final product. It is exactly what I need to help me practice these forms.

You can try the app here: [Greek article and noun practice app](https://claude.ai/public/artifacts/fff46a1c-19d0-4a2b-8590-8b8056a16da5)

---

It is incredibly easy now to create **custom learning apps** and share them.

By explaining the process step by step, I hope that anyone reading this might be inspired to try building something similar for their own language learning.
