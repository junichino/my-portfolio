# Portfolio v1 Implementation

Date: 2026-05-12

Implemented a Vite + React + TypeScript single-page portfolio for Sitthikorn Maneesut / First.

## Included

- Clean product visual direction with responsive desktop and mobile layouts.
- Thai / English language toggle.
- High-level contributed project cards only.
- Privacy-first contact and language analytics events through Vercel Web Analytics with Plausible-compatible fallback calls.
- Contact links for GitHub, LinkedIn, and email.

## Verification

- `npm run build`: passed.
- `npm test`: passed 4 Playwright checks across desktop Chromium and mobile Chromium.
- Visual QA checked desktop, mobile, and full-page screenshots.

## Analytics Policy

Tracked events are limited to language changes and contact clicks. Events do not include visitor personal data or confidential project details.
