---
title: "How to Make YouTube Shorts Without Showing Your Face (100% Free AI Tools)"
description: "Learn how to create faceless YouTube Shorts for free with AI. Follow every step from the free model and skill to render and upload, with real screenshots."
category: "AI & Tools"
tags:
  [
    "YouTube Shorts",
    "Faceless YouTube",
    "Free AI tools",
    "YouTube automation",
    "AI video creation",
  ]
author: "Prince Upadhyay"
publishedAt: 2026-11-27
updatedAt: 2026-11-27
featuredImage: "/images/create-youtube-shorts-without-showing-face-for-free.webp"
featuredImageAlt: "Thumbnail for the guide to making YouTube Shorts without showing your face, 100% free, with a phone showing an AI-made Short"
featured: false
popular: false
draft: true
---

In this article, I will be covering everything related to **creating faceless YouTube Shorts for free using AI**. This particular workflow will take you from a blank screen to a finished Short on your channel without you showing your face, without you recording your voice and without a paid subscription. So if you want to start a Shorts channel with zero budget then read this article till end.

Hello guys! What's up? My name is Prince Upadhyay and welcome to How2Tech. Technology. Explained. Simplified. So let's start with the topic...

So since **YouTube Shorts** is where a lot of new channels are getting their first views so a lot of people are looking for a way to make Shorts without sitting in front of a camera. And honestly most of the tools you will find on Google for this are not free at all. They give you one video, they put a watermark on it, and then they ask you for a monthly plan. In addition, a lot of people think that **faceless YouTube** means you need an editor, a voice artist and a lot of free time. The reason is simple, they have only seen the paid tools and nobody showed them the other way.

The other way is an **AI agent**. Okay? Not a video app, an agent. You give it a topic, it writes the script, it makes the voice, it renders the video, and then you can ask it to upload that video to YouTube as well. Everything from one chat window and all that. And in this article I will show you each step with the real screenshots right in front of you.

In this article I won't be teaching you in detail how to make AI video ads for free which I have already done that in [this article](/create-ai-video-ads-for-free/). So do check this one out but later on.

## What You Need to Create **Faceless YouTube Shorts** for Free

Now let's talk about what you need. There are three free pieces and one free account. The first piece is OpenCode, which is an open source AI coding agent and you can download it for Windows, Mac and Linux from the download page of OpenCode. The second piece is a free AI model inside OpenCode. The third piece is a free faceless Shorts skill, which is basically a zip file that teaches the agent how to make a narrated Short. And the free account is Zapier, which we will use only for the upload part at the end.

![OpenCode download page with the desktop app downloads for macOS, Windows and Linux highlighted](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-opencode-download-page.webp)
_OpenCode desktop downloads, marked in red._

## Step 1: Install **OpenCode**

So step one is installing OpenCode. Go to the download page and pick your system. In the screenshot the desktop version has downloads for macOS, Windows and Linux, and there is also a terminal install and extensions for VS Code and Cursor if you like those. I would say just take the desktop app, it is the easiest one and you don't need to type any command.

## Step 2: Pick a **Free AI Model**

Step two is the model. Over here this is the part where people get confused, so listen. When you open OpenCode there is a model selector near the prompt box. Open it and look for the models which have the **Free tag** next to them. At the time of the recording in early November 2026 one of them was **GLM-5.3-Flash Free** and you can see the Free tag right in front of you in the screenshot. There is also a Manage models screen where OpenCode lists the models it provides and you can switch them on or off. Model names change a lot so if you don't see the same name just pick any model which says Free.

![OpenCode model selector with the GLM-5.3-Flash Free model highlighted](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-free-model-picker.webp)
_Pick a model that carries the Free tag._

![OpenCode Manage models screen listing the models OpenCode provides](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-manage-models-connect.webp)
_The Manage models screen lists the models OpenCode provides._

## Step 3: Add the **Free Faceless Shorts Skill**

Step three is the skill. Download the free faceless Shorts skill zip from [this link](https://drive.google.com/file/d/1FxtUVWkfqQs2uNqQ-sAGFGxDm_S0hd-r/view?usp=sharing) and keep it as a zip, don't unzip it. Then in OpenCode attach that zip file to the prompt box and write something like install this skill and make a 20 second short, choose any topic that you like. That is the whole prompt, you know, nothing fancy.

![OpenCode prompt box with the skill zip attached and the install and make a 20 second short prompt](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-install-skill-prompt.webp)
_Attach the zip and write the prompt._

## Step 4: Approve the Plan and Render Your **Short**

Now what happens next is the interesting part. The agent installs the skill, runs a setup script, and before it builds anything it shows you a plan. In the screenshot the plan had a title, a style, a length of about 20 seconds, a 9:16 vertical format, an AI voice and a table with one line of narration per cut, the captions and what the shot will be. It waits for your go-ahead so you can change the topic or the lines here itself. If a path error shows up in between, like the Windows path thing in the screenshot, the agent usually fixes it by itself and retries.

![The agent showing its plan with style, length, voice and a narration table](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-plan-and-script.webp)
_The agent shows a plan and waits for your go-ahead._

Step four is the render. Once you say go, it writes the script, makes the voice, builds the scenes and renders the video. In the recording the finished file was about 22 seconds long, vertical, with the voice, the music and a lot of sound effects mixed in, and around 14.6 MB. The video opens in a review pane so you can watch it right there. And it also gives you a cover frame, a title, a caption and hashtags, so the publishing part is already written for you. Watch the Short before you upload anything, okay? Because this is where you catch a wrong fact or a wrong word.

![The rendered vertical Short playing in the OpenCode review pane with title, caption and cover frame](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-rendered-short-preview.webp)
_The finished Short opens in the review pane._

## Step 5: Upload the Short to **YouTube** with **Zapier MCP**

Step five is the upload and this is the part which nobody shows. For this you use Zapier MCP. Go to Zapier, open MCP servers, create a server and connect a client. Zapier has OpenCode in the client list, and it gives you a small config snippet to add to your OpenCode configuration, and then the next step is to run the opencode mcp auth zapier command in your terminal to log in. In the recording the agent was simply asked to add that snippet to the OpenCode config and it did that.

![Zapier home screen with the MCP servers menu item highlighted](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-zapier-mcp-servers.webp)
_Open MCP servers in Zapier._

![Zapier Connect to OpenCode window showing the config snippet to copy](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-zapier-connect-opencode.webp)
_Zapier gives you the config snippet for OpenCode._

After that go to Add tools in your Zapier MCP server, search YouTube, add the Upload Video tool and connect your YouTube account. This is a one time setup and all that. Then you go back to OpenCode and say, using the faceless shorts skill, upload the video to youtube. The agent checks that YouTube is connected, then it asks you a question, which is the visibility. Public, Unlisted or Private. Choose Unlisted or Private for the first one so you can check it before the whole world sees it.

![Zapier Add tools window with the app search box highlighted](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-zapier-add-tools.webp)
_Search YouTube here and add the Upload Video tool._

![Agent asking whether to upload the Short as Public, Unlisted or Private](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-upload-visibility-choice.webp)
_The agent asks for the visibility before uploading._

One thing you must know here. Zapier fetches the video from a link, it doesn't take the file directly. So in the recording the agent put the video on a free temporary file host for one hour and gave that link to Zapier. The reason is simple, Zapier needs a link. But it also means your video file sits on a third party host for that one hour, so don't use this with anything private. After the upload finished the Short was live at the link on YouTube and the agent listed what it had applied, like the visibility, the category, the tags and that it is not made for kids. YouTube then processes it and shows it as a Short because it is vertical and short. The custom cover frame was not uploaded in the recording, so YouTube made its own thumbnail.

![The uploaded Short live on YouTube as Unlisted with the agent summary of applied settings](/images/create-youtube-shorts-without-showing-face-for-free/create-youtube-shorts-without-showing-face-for-free-video-live-on-youtube.webp)
_The Short is live on YouTube, set as Unlisted._

## Is It Really **100% Free**? The Honest Limits

Now the honest part. Free here means free at the time of the recording in early November 2026. Free models, free tiers and early access offers can change or get limited, and in the Zapier dashboard in the recording there was a plan task counter and an Upgrade button on screen, so check what your own account shows. Also a lot of people forget the YouTube AI rule. YouTube says creators have to disclose realistic content that is made or meaningfully changed with AI. Clearly unrealistic content like animation doesn't need that label, and using AI for scripts or captions doesn't need it either. A cartoon Short like the one in the recording is on the safe side, but if your Short looks real or uses a real person's voice then tick the disclosure box in YouTube Studio.

So there are three tools in this whole workflow, first one is OpenCode, second one is the free AI model inside it with the faceless Shorts skill, and third one is Zapier for the YouTube upload.

OpenCode is the place where everything happens, the chat, the script and the render. The skill is the thing which knows how a Short should look and sound. And Zapier is only the bridge to your YouTube channel, nothing else.

## Why an **AI Agent** Beats a **Free Video App**

Now let me explain the logic behind this. Why an agent and not a normal video app? Because a normal free app gives you one step, either the script or the video, and then you have to move the file around yourself. An agent does the script, the voice, the render and the upload in one place. And the paid apps limit you with watermarks and credits, so this one gives you a way to keep going when you are on zero budget. Why? Because the cost sits in the tools you already have for free, not in a monthly plan.

Related: [How to Make Money Clipping GTA 6 Streams Using Just Your Phone](/make-money-clipping-gta-6-streams/)

So friends, this was **How to Make YouTube Shorts Without Showing Your Face (100% Free AI Tools)** was this article helpful to you? Let me know which one you would prefer or like to use, in the comments section below. Till then, I'm signing off, So stay tuned and stay safe...😊
