---
title: "Why Tabs vs Spaces Doesn’t Matter Anymore"
date: "2025-06-01"
excerpt: "Tabs? Spaces? Doesn’t matter. Your editor decided for you five years ago. Let’s talk about why we ever cared in the first place."
tags: "codequality,devtools,cleancode"
published: true
---

# Why Tabs vs Spaces Doesn’t Matter Anymore

Well… the title says it all. Guess I’m not so good at this blogging thing… 😅

Okay, well if you’re still here, I suppose we should discuss the elephant in the room: **tabs vs spaces.** A debate so old it predates your favorite programming language, and one that has somehow lingered on like a zombie from the early internet. But why do we even have this conversation at all?

## The Great Split

Let’s rewind to the early days of programming, back when teams shared code through patch files, diffs, and printouts. The way your code *looked* wasn’t just a matter of preference—it was about consistency, portability, and often about how your terminal or editor would render it. In that context, tabs and spaces were *not* interchangeable.

- **Tabs** saved file size and let users choose how wide indentation should appear.
- **Spaces** ensured precise control over alignment, regardless of editor or terminal settings.

Teams argued passionately, editors behaved inconsistently, and it wasn’t uncommon to see a project’s entire codebase rewritten just to normalize indentation.

At some point, this simple formatting choice became a stand-in for bigger philosophical arguments: _flexibility vs control_, _accessibility vs uniformity_, _performance vs aesthetics_. You weren’t just choosing a character—you were picking a side in a war for the ages. 

So, where did you fall? Were you a principled space purist, or a tab-for-efficiency evangelist? Or did you just copy whatever the team did and hope no one noticed?

I personally had my own opinions of what was best. Reflecting back, I question, does it really matter?

## The Modern Landscape

Fast-forward to today. You’re probably using an IDE or editor that auto-formats your code on save. You have `.editorconfig`, or Prettier, or ESLint, or some combination of tools that makes the decision for you. You write the code; your editor handles the rest. If you aren't, maybe we should discuss what's keeping you up at night. It's really ok, the monsters aren't in the tools.

In other words: **it doesn’t matter anymore.**

Modern engineering teams align on a formatter and move on. The days of nitpicking whitespace in PRs are over (or at least, they *should* be). The battle was won—not by tabs or spaces—but by automation. Automation that helps us bootstrap quicker, deliver higher quality code with a higher confidence and actually enjoy our day to day work. If you are miserable with your tools, why are you still using them?

## So Why Does It Still Come Up?

Because it’s *funny*. It’s a meme. It’s a shibboleth. Saying “I use tabs” is like saying “vim is better than emacs”—it signals tribe, not tooling. And that’s okay. Joking about tabs vs spaces is a rite of passage. Arguing about it seriously in 2025, though? That might just be a red flag.

## The Bottom Line

Use tabs. Use spaces. Use Morse code if you want. But **let your editor handle it**. Configure your formatter, commit the settings, and never think about it again.

And if you *do* catch yourself in a heated tabs-vs-spaces debate, just remember:

```json
"editor.formatOnSave": true
```
