# Sitthikorn Maneesut Portfolio

Single-page developer portfolio for Sitthikorn Maneesut / First.

## Stack

- Vite
- React
- TypeScript
- Vercel Web Analytics with Plausible-compatible fallback event calls

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm test
```

## Analytics Events

The portfolio tracks only low-risk interaction events:

- `language_changed`
- `contact_email_click`
- `github_click`
- `linkedin_click`

Project cards do not currently send interaction analytics. Contact and language events do not include confidential project details or visitor personal data.
