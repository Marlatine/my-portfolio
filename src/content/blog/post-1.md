---
title: "Creating my first portfolio"
slug: "creating-my-first-portfolio"
description: "Sharing my first real experience building a portfolio with Astro — how I learned, made decisions, and shaped a simple, maintainable frontend project."
image: ./images/first-blog-post.png
pubDate: 2026-02-03
isDraft: false
author: "Martine Evensen"
---

# Building My First Frontend Portfolio with Astro

This is my first portfolio project as a frontend developer—and also my first real project using **Astro**.
I have a 2-year vocational degree in frontend development and professional experience in a role titled _fullstack developer_. In practice, though, most of my day-to-day work was frontend-focused. Earlier this year, I started working as a **Frontend Developer at Gokstad Akademiet**, where Astro is part of the tech stack.

Since Astro was completely new to me, my first step was to complete an Astro course. I worked through all the modules up to **Module 6**, which walks through building a portfolio site. After finishing the course, the task was no longer about following instructions—it was about starting from a blank slate.
The assignment was simple on paper: build my own portfolio using Astro, and make my own decisions around structure, tooling, and design.

## Learning Astro by Building

One of the things I quickly appreciated about Astro is how opinionated it is about performance, without being restrictive about how you build things. The static-first approach, combined with island architecture, makes it easy to reason about what actually needs JavaScript—and what doesn’t.
For a portfolio site, that feels like the right default. I want the site to be fast, predictable, and easy to maintain, rather than over-engineered.

## Setting Some Boundaries

Before writing much code, I set a few boundaries for myself.
I wanted to keep the project simple and avoid unnecessary abstractions. That meant minimal JavaScript, no heavy UI libraries, and a focus on clarity over visual complexity. Accessibility and responsiveness weren’t optional add-ons—they were part of the baseline.
This portfolio isn’t meant to impress with animations or effects. It’s meant to clearly communicate who I am, what I work on, and how I think as a frontend developer.

## Tools and Styling Choices

The tech stack reflects those decisions.
Astro is doing most of the heavy lifting, with **Tailwind CSS** handling layout and spacing. For theming, I’m using **CSS variables** to define global design tokens and handle light and dark mode. The goal is to keep components small, reusable, and easy to change as the site evolves.
I’ve also added **Docker** to ensure consistent environments locally and in production, even for a relatively small project. It’s probably more than strictly necessary, but it mirrors how I like to work on larger systems.

## What’s in the Portfolio (So Far)

At this stage, the scope is intentionally modest. The site includes a profile section, a curated list of projects—both personal and professional—and an optional blog section for technical notes and experiments.
This post is part of testing that blog setup. I want writing to be a natural extension of the portfolio, not a separate thing.

## A Starting Point, Not a Finished Product

This portfolio isn’t a final version—it’s a foundation.
It represents my first real experience building with Astro, my preference for simple and maintainable frontend architectures, and how I approach projects when starting from scratch. Over time, I expect both the design and the content to change as I learn more and get feedback.

Future posts will likely dive deeper into Astro patterns, performance decisions, and things I’d do differently after using the site in practice.
For now, this is the starting point.
