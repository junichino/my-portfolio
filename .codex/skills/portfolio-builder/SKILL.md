---
name: portfolio-builder
description: Build, redesign, write, or review this developer portfolio project. Use when Codex is asked to create portfolio pages, improve portfolio copy, select projects, design the portfolio UI, add case studies, prepare deployment, or keep future work aligned with the local `.codex/instructions.md` and portfolio context.
---

# Portfolio Builder

## First Read

Before changing portfolio code or copy, read:

- `.codex/instructions.md`
- `.codex/context/portfolio-content-brief.md`

If real app files exist, inspect the current framework and follow it instead of forcing the default stack.

## Core Workflow

1. Identify the task type: content, UI, implementation, verification, or deployment prep.
2. Check whether the requested change needs real user facts. Do not invent credentials, employers, metrics, or project outcomes.
3. For contributed projects with limited public detail, only mention contribution, role, broad stack, and high-level category.
4. Prefer a polished single-page portfolio unless the user asks for multiple pages or case studies.
5. Keep public-facing copy bilingual in Thai and English.
6. Implement with the existing project patterns.
7. Verify with the strongest lightweight check available:
   - Syntax/type/build check
   - Browser render check for UI changes
   - Responsive check for important layout changes
8. Summarize what changed and what still needs real user input.

## Design Rules

- Make the portfolio feel current, calm, and professional.
- Use typography, spacing, and clear hierarchy as the main design language.
- Avoid gimmicky hero effects, excessive glow, retro sci-fi styling, and generic template sections.
- Do not make a landing page that talks about the portfolio instead of showing the work.
- Make project evidence easy to scan.
- Ensure mobile layout is not an afterthought.

## Content Rules

- Use concrete evidence over self-praise.
- Use placeholders only when clearly marked as placeholders.
- Do not add confidential details for client/company projects.
- For each project, prefer this structure:
  - Problem
  - What I built
  - Stack
  - Result or status
  - Link
- If the user writes in Thai, answer in Thai. For the website UI, preserve bilingual Thai and English copy unless the user changes the language direction.

## Tech Stack Profile

Default when starting from an empty folder:

- Vite + React
- TypeScript if the user wants a more serious long-term setup
- Plain CSS or CSS modules for styling
- lucide-react for icons
- Playwright for browser UAT
- Vercel or Netlify deployment

If a different stack already exists, preserve it.

## needs_specialist_skill Notices

Explicitly mention `needs_specialist_skill` before acting when the task involves:

- Legal or immigration claims on the portfolio
- Security-sensitive analytics or tracking
- Paid ads, SEO guarantees, or hiring-result guarantees
- Production credentials, domains, DNS, or payment integrations
