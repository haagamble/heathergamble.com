---
title: "Using AI to Build a Greek Grammar Practice App"
date: 2026-03-11
tags: ["diary", "ai", "grammar"]
summary: "I used Claude to build a custom quiz app to practice Greek cases and article endings."
layout: post
---

I ran an experiment yesterday to see which AI chatbot would help me most with language learning. The results were pretty much what I expected.

For explaining grammar, generating example sentences, and general language-learning conversations, the strongest tools were **ChatGPT and Copilot**. For creating small custom learning apps, **Claude clearly performed the best**.

I usually use ChatGPT, so I was glad to see that it did well compared to the others. I used to use Copilot more often, and the main reason I use ChatGPT more now is simply that I’m currently paying for **ChatGPT Plus** to help with some other projects. Because of that, ChatGPT is usually already open on my computer.

I suspected that **Claude would still be the best at creating apps**, but it had been a while since I last built one with it, and I hadn’t tested the other tools for that kind of task.

So if you didn’t read my post yesterday, here are my recommendations:

- **For grammar explanations, example sentences, and general language questions:** ChatGPT or Copilot
- **For creating custom learning apps:** Claude

---

# What my language learning looked like today

## 1. Duolingo review

I started with some Duolingo lessons.

I’m still **not doing new lessons**. Instead, I’m reviewing older ones because I didn’t really learn the material the first time through.

Today I worked on:

- plurals
- the accusative case

I still need a lot of help with the endings and with knowing which word to use for **“the”** and **“a”**, because they change depending on gender, number, and case in Greek.

---

## 2. Writing example sentences

Next, I wrote down a lot of sentences from the Duolingo lessons.

I tried to make sense of the plural endings, but the plural endings also change depending on the case:

- nominative
- accusative
- genitive

So things quickly get complicated.

---

## 3. Asking ChatGPT for help

At this point I asked ChatGPT for help.

> Please give me a lesson on Greek singulars and plurals. I need to know the definite and indefinite articles. I need to know how and when to use a different case.

ChatGPT did a really good job laying out the cases in **clear charts**, followed by examples.

I asked a few follow-up questions for clarification and asked for additional examples.

---

## 4. Writing the charts in my notebook

I then copied the charts into my notebook, hoping that writing them down would help the patterns sink in a bit better.

But I know that what I really need is **practice**.

The charts can serve as a reference, but I need to create lots of sentences and get **immediate feedback and correction**.

At the moment I’m not using a language tutor, so I don’t yet have the option of practicing with a real person. Learning from real people is the best option, but it isn’t available to me right now.

---

## 5. Asking Claude to build a practice app

So I decided to get help from Claude: I asked **Claude** to make an app for me.

It was a long prompt because I needed to explain exactly what I wanted.

> I'd like you to make me an app please. I'm very confused about accusative, nominative, genitive forms in singular and plural in Greek.
>
> For example:  
> The man drinks water.  
> I see the man.  
> The house of the man.  
> The men drink water.  
> I see the men.
>
> In each of those cases "the man" is different. The word for "the" is different, and the ending is different.
>
> Can you make me an app where I have to choose the correct word for "the" and I have to choose the correct word for "man/men".
>
> For example:  
> You would ask "The man drinks water."  
> And you would write:
>
> **\_** **\_** πίνει νερό
>
> Then give six choices for the first blank:  
> (ο, τον, του, οι, τους, των)
>
> And six choices for the second blank:  
> (άντρας, άντρα, άντρες, αντρών)
>
> Each quiz should have 10 questions, and the user should have the option to do the quiz again. There should be lots of questions in the database for the app to choose from.

Claude worked for a few minutes and then presented me with a **really nice-looking app**.

I worked through one quiz and was very happy with how it functioned.

The only problem was that the choices were always shown in the same order. That meant I could guess the answer by position.

So I prompted Claude again.

> OK. That was a great start. But it is easy for the user to guess if the answers are always in the same position. Can you mix the answers up?
>
> And don’t say in the question whether it is nominative, accusative, or genitive.
>
> But it is nice to see that feedback after the user answers, and in the summary at the end.

The new version was **much better**.

I really like it.

---

## Expanding the question bank

Claude also lets you look at the code behind the app.

I had a quick look and scrolled through the question bank. It didn’t take very long to reach the end, so I asked Claude another question.

> OK. This works really well. How many questions are in the question bank?

Claude replied that there were:

- **7 nouns**
- **35 questions**

So I asked:

> I would love to have more nouns and more questions. How many could you do?

Claude replied:

> I could comfortably add another 15–20 nouns and bring the bank up to around 150–180 questions.

It also explained which additional nouns it could include.

Then it asked:

> Want me to go ahead and add them?

Of course I said:

> Yes please.

I can’t help being polite to my chatbots.

---

# The final result

I love the final product.

It is exactly what I need to help me practice these forms.

You can try the app here:

[Greek article and noun practice app](https://claude.ai/public/artifacts/fff46a1c-19d0-4a2b-8590-8b8056a16da5)

---

It is incredibly easy now to create **custom learning apps** and share them.

By explaining the process step by step, I hope that anyone reading this might be inspired to try building something similar for their own language learning.
