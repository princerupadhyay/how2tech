---
title: "Microsoft MAI Code 2 vs GitHub Copilot: It's Not a Rival, It's a New Model Inside Copilot"
description: "MAI Code 2 isn't a rival to GitHub Copilot, it's a new model inside it. See what it does, which plans get it, and the promo-price catch in Microsoft's claims."
category: "AI & Tools"
tags: ["MAI Code 2", "GitHub Copilot", "Microsoft AI", "AI coding"]
author: "Prince Upadhyay"
publishedAt: 2026-11-18
updatedAt: 2026-11-18
featuredImage: "/images/microsoft-mai-code-2-vs-github-copilot.webp"
featuredImageAlt: "Abstract illustration of a code editor with a dropdown list of AI model names open"
featured: false
popular: false
draft: true
---

In this article, I will be covering everything related to Microsoft MAI Code 2 and how it is different from GitHub Copilot. This particular article will clear up a lot of confusion which is going around since the launch. So if you want to know what MAI Code 2 really is and whether you have to change anything in your setup then read this article till end. Hello guys! What's up? My name is Prince Upadhyay and welcome to How2Tech. Technology. Explained. Simplified. So let's start with the topic...

## Is MAI Code 2 a GitHub Copilot Rival?

So since Microsoft announced MAI Code 2 on 17 November 2026 at its Ignite event so right now a lot of people are searching for it, and most of them are typing it with the words vs GitHub Copilot like these are two different products fighting each other. They are not. Okay? That is the first thing I want you to take away and I will keep saying it in this article because the headlines made it sound like a boxing match and all that. MAI Code 2 is a coding model and GitHub Copilot is the place where you use that model. It is kind of like when you are studying for an exam and you have one app but inside that app you can change the teacher who is explaining the chapter, so the app is not the teacher and the teacher is not the app and...

In addition, a lot of people who already use Copilot will open the model picker one day and see two new names over there, MAI Code 2 and MAI Code 2 Flash, and they will not know which one to click. The reason is simple, Microsoft launched both of them on the same day and most of the news pages are busy talking about benchmarks. And this is not the first time by the way. Microsoft's own coding model came in June as MAI-Code-1-Flash and then MAI-Code-1.1-Flash was in August, and as per GitHub's notice that 1.1 Flash is going away from all of Copilot on 18 December 2026. So if you were picking it by hand then you have to move to something else.

Now that I have made sure that you know it is a model and not a separate tool, let's get started.

## What Is Microsoft MAI Code 2?

![Diagram showing GitHub Copilot as the tool and MAI Code 2 as one model in its model picker](/images/microsoft-mai-code-2-vs-github-copilot-model-picker-diagram.svg)
_MAI Code 2 is a model you pick inside Copilot, not a separate product._

So what is MAI Code 2 exactly? GitHub describes it as a general purpose coding model for the harder jobs, like deep debugging and changes that touch a lot of files and refactoring and understanding a whole repository. And MAI Code 2 Flash is the lighter and cheaper one which is for explaining a piece of code, a small targeted fix, routine stuff and quick back and forth. Both of them are built for what people call agentic coding. This particular word sounds big but it just means the model can do a few steps on its own, like looking at your files and making changes, instead of only answering one question and stopping. GitHub also points to vision support in [Microsoft's announcement](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/), so, you know, images are in the picture as well.

### What MAI Code 2 Can't Do Yet

Now what can it not do? Microsoft itself says over here that these two models are not yet tuned for really hard things like fundamental science research and very long agentic work. So if you are somebody who leaves the Copilot cloud agent running on one huge task for an hour then you may want to keep using the other models in the picker for that. And honestly I like that Microsoft said this part clearly, it is not very common.

### Where You Can Use MAI Code 2

Where can you use it? GitHub lists a lot of places where the picker shows these models, Visual Studio Code, Visual Studio, JetBrains, Xcode, Eclipse, the Copilot CLI, the Copilot cloud agent, the GitHub Copilot app, github.com and GitHub Mobile on iOS and Android. So basically wherever you already use Copilot.

## Which GitHub Copilot Plans Get MAI Code 2?

| Copilot plan | MAI Code 2 | MAI Code 2 Flash |
| ------------ | ---------- | ---------------- |
| Free         | No         | Yes              |
| Student      | No         | Yes              |
| Pro          | Yes        | Yes              |
| Pro+         | Yes        | Yes              |
| Max          | Yes        | Yes              |
| Business     | Yes        | Yes              |
| Enterprise   | Yes        | Yes              |

_Source: GitHub changelog, 17 November 2026. Plans can change, so check GitHub before you rely on it._

Now who gets it? This one is really important because it depends on your plan. MAI Code 2 is on Copilot Pro, Pro+, Max, Business and Enterprise. MAI Code 2 Flash is on all of those and on top of that on Copilot Free and Copilot Student also. So if you are on the free plan then Flash is the only one you will see. GitHub also says both models are for eligible subscribers on annual plans, and I could not find a clear explanation of what that means for each plan so check that on GitHub's own page before you rely on it. If you are on Business or Enterprise then your admin controls this from the model policy in Copilot settings, and new models are switched on automatically unless the admin has turned off the global default or blocked that specific model. Both are billed with usage-based billing by the way, so the more you use them the more it counts.

I should say one thing over here. I do not have a Copilot plan right now so I have not tested these models myself, and everything in this article is from GitHub's and Microsoft's own announcements and from what other people have published in these 2 days. Okay? So whenever I say Microsoft says, then it is Microsoft who says it, not me.

## MAI Code 2 Benchmarks and Price: What Microsoft Claims

So now the claim everybody is talking about. Microsoft says that if you average four coding benchmarks then MAI Code 2 gets about 98 percent of the performance of OpenAI's GPT-6.1 Sol at about 40 percent of the cost, and about 96 percent of the performance of Anthropic's Claude Opus 5.5 at about 5 percent of the cost. Sounds amazing, right? But there is a catch and actually two. First one is that most of those tests were run by Microsoft on its own evaluation platform, only one of the four came from an outside lab called Artificial Analysis. Second one is that Microsoft says the cost figures for its own models are shown at a 50 percent promotional price, and the Visual Studio Code team said that discount is through 17 May 2027. So that 40 percent is for roughly six months, after that the maths will change. And from the numbers which were published it looks like on one of the four tests, SWE Atlas, MAI Code 2 is clearly behind Claude Opus 5.5. So it is cheaper and close on average but it is not winning everything, you know.

| MAI Code 2 compared with  | Performance (Microsoft's claim) | Cost (Microsoft's claim, at a 50% promo price) |
| ------------------------- | ------------------------------- | ---------------------------------------------- |
| OpenAI GPT-6.1 Sol        | about 98%                       | about 40%                                      |
| Anthropic Claude Opus 5.5 | about 96%                       | about 5%                                       |

_These are Microsoft's own figures, averaged over four coding benchmarks, and have not been independently confirmed._

## How to Try MAI Code 2 in GitHub Copilot

How would you try it yourself? If you have a plan that shows the models then open Copilot chat in your editor, find the model picker and choose MAI Code 2 or MAI Code 2 Flash instead of whatever you are using now. Then do not just trust the percentages, organise your own small test. Take one real task from your project, give the exact same prompt to MAI Code 2, to Flash and to the model you use every day, and then see which answer you would actually keep. Use Flash for the small boring stuff and Code 2 for the bigger ones, that is how Microsoft and GitHub are positioning them anyway. If you are on a Business or Enterprise plan and you cannot see them then ask your admin about the model policy.

## MAI Code 2 vs Other Options: Is It a GitHub Copilot Alternative?

Now the vs part which people really came here for. Inside Copilot, the comparison is MAI Code 2 against the other models in that same picker, like the GPT and Claude models which Copilot already offers. That is the fair fight. And outside Copilot, if you are looking for a GitHub Copilot alternative then today MAI Code 2 is not that, because you still need Copilot to use it. Microsoft says MAI Code 2 Flash is in a limited access preview in Microsoft Foundry and that both models are coming to OpenRouter, Vercel, Hermes, OpenCode and Kilo, but I did not see any dates for it. So maybe later it becomes a way to use Microsoft's model without Copilot, and maybe not, I will update this article when that happens. Stay tune and subscribe to the blog if you want to be the first one to see that.

## What You Need to Get Started

If you want to try this I generally think you need three things, first one is a GitHub Copilot plan, second one is an editor like Visual Studio Code and third one is [GitHub's changelog page](https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/) for these models.

The Copilot plan is the main thing because the models do not come separately, Flash on the free plan is the cheapest way to get started.

Visual Studio Code is just where you will see the model picker, though JetBrains and the others are also on the list.

And the changelog page is what I would keep open because the plans and the details are the type of thing which can change in the next few weeks.

## Why Is Microsoft Building Its Own Coding Models?

Now let me explain the logic behind this. Why is Microsoft making its own coding models when Copilot already has models from OpenAI and Anthropic? Because if Microsoft only sells other companies' models then it has to pay for them, and the way I read it, Microsoft wants one more option in that picker which it controls and which is cheaper for the everyday stuff, and then they can keep the big expensive models for the really hard tasks. That is also why I think Microsoft wants to capitalise on this whole price angle so much in the announcement. Is it going to work? I do not know yet, honestly nobody does because the benchmarks are Microsoft's own and independent tests are not out in these first 2 days. So my suggestion is to wait for those or run your own small test, and not switch your whole workflow only because of a percentage in a launch post.

So friends, this was Microsoft MAI Code 2 vs GitHub Copilot: It's Not a Rival, It's a New Model Inside Copilot was this article helpful to you? Let me know which one you would prefer or like to use, in the comments section below. Till then, I'm signing off, So stay tuned and stay safe...😊
