---
title: "Greek Verbs"
summary: "A project focused on practicing and learning Greek verbs."
status: "In Progress"
type: "Learning Tool"
order: 5
---

## Overview

Greek Verbs is a language-learning tool I’m building to help me practice Greek verbs more intentionally.

## Greek Verb App

This project grew out of a problem I kept running into while learning Greek. I was seeing the same verbs again and again in Duolingo, but I wasn’t really _owning_ them. I could recognize them in context, but I couldn’t easily use them, and I certainly couldn’t keep track of all the different forms and patterns.

So I started building a small app to reinforce verbs more intentionally.

The idea is simple. The learner sees a Greek verb and chooses the correct English translation. If the answer is correct, they are prompted to say their own sentence using the same verb or they can see sample sentences. The goal is not just recognition, but _active use_.

## How It Was Built

For this project, I used ChatGPT to think through the idea and the functionality of the app. It also helped me consider how to group the verbs into levels.

I collected sample sentences from Duolingo and from Greek literature. I didn’t use AI to generate sentences because I didn’t have a reliable way to verify their accuracy.

I used Codex in VS Code to help build the app. I started with a project folder that contained only a JSON file with about 50 verbs arranged in 6 levels. Then I prompted: "Can you build me an app using the verbs in verbs.json?" along with a description of how I wanted the app to work.

## What I learned

- **Not all Greek verbs behave the same way.**  
  I had to distinguish between:
  - standard verbs (γράφω, βλέπω)
  - -ομαι verbs (χρειάζομαι, κάθομαι)
  - special pattern verbs (μου αρέσει, με νοιάζει)
  - multiple forms (πηγαίνω / πάω or αγαπάω / αγαπώ )

- **I can make an app and learn Greek at the same time.**😄  
  I had some reservations about spending time coding instead of doing language study, but my learning actually continued as I collected and sorted sentences and tested the app.

- **I learned how to use a Git submodule.**  
  This let me keep the app in a separate repository while still publishing it on this site.

This is still very much a work in progress. I’m continuing to add more verbs and sentences and refine the levels.

This app has helped me change how I review and use verbs. Instead of passively recognizing them, I’m starting to actually use them—and that was the goal from the beginning.

## Try the App

<a href="https://heathergamble.com/greek-verbs/" target="_blank" rel="noopener noreferrer">Greek Verbs</a>  
(opens in a new tab)
