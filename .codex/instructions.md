# Codex Project Context: my-portfolio

## Project Purpose

Build and maintain a personal online portfolio for a developer who wants to return attention to hands-on software work. The site should make the owner look practical, credible, and current without feeling like a marketing landing page.

## Product Direction

- Create a focused developer portfolio, not a broad personal brand site.
- Prioritize proof of capability: projects, problem solving, tech stack, implementation notes, and contact paths.
- Keep visible site copy bilingual: Thai and English.
- Use Thai in internal notes or planning when it helps the user think.
- Start with a polished single-page MVP, then add deeper case-study pages only when there is real project content.

## Audience

- Hiring managers, technical leads, founders, and collaborators who want to quickly answer:
  - What can this developer build?
  - What kind of work do they prefer?
  - Can they explain tradeoffs clearly?
  - Is there enough evidence to start a conversation?

## Positioning

Use this framing unless the user changes it:

- Developer focused on practical web apps, internal tools, and clean implementation.
- A practical developer who is ready to keep learning in the AI / vibe-coding era.
- Stronger at building software than customer-coordination-heavy roles.
- Comfortable with small useful products, dashboards, workflow tools, and low-capital SaaS experiments.
- Portfolio tone should be calm, capable, and specific.

## UX And Visual Direction

- Make the first screen the portfolio itself, not a generic hero-only landing page.
- Use modern editorial/minimal product styling: generous spacing, strong typography, restrained color, and clear project evidence.
- Avoid retro sci-fi, glow-heavy, gimmicky, or template-like visuals.
- Avoid one-note palettes dominated by purple, dark slate, beige, or orange.
- Prefer dense but readable sections over oversized decorative cards.
- Project cards should show outcomes and responsibilities, not just screenshots.
- Make mobile layout first-class.

## Recommended Site Structure

- Intro: name, role, short positioning, primary links.
- Selected Work: 2-4 projects with problem, role, stack, result, and links.
- Skills: grouped by frontend, backend, database, tooling, and workflow.
- Working Style: short evidence-based notes about how the developer works.
- Contact: email, GitHub, LinkedIn or other available links.

## Tech Stack Profile

Default stack for this project unless existing files say otherwise:

- Framework: Vite + React
- Language: TypeScript if starting fresh; JavaScript is acceptable for a simpler MVP.
- Styling: CSS modules or plain CSS first; Tailwind only if the project is already set up for it.
- Icons: lucide-react when React is used.
- Testing: Playwright for browser UAT when interactive UI exists.
- Deployment target: Vercel or Netlify.

## Delivery Standards

- Keep changes small and reviewable.
- Prefer concrete artifacts over abstract advice.
- After frontend changes, run syntax/build checks and browser verification when available.
- Record important decisions or verification notes under `.codex/reports/` when the work is substantial.
- Call out `needs_specialist_skill` when work crosses areas like legal claims, hiring guarantees, privacy/security-sensitive analytics, or production deployment credentials.

## Content Standards

- Do not invent work history, employers, metrics, credentials, or project results.
- Be clear when projects are projects the owner contributed to, not projects they owned.
- For contributed client/company projects with limited public detail, state only the role, broad stack, and high-level project category.
- Do not expose internal workflows, business logic, screenshots, architecture, or operational details unless the user explicitly confirms they are public.
- Use placeholders clearly when the user has not provided real content.
- Prefer specific project descriptions over generic adjectives.
- When describing projects, use this shape:
  - Problem
  - What I built
  - Tech stack
  - Result or current status
  - Link
