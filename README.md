# Bharosa

A plain-language health-insurance app for first-time buyers in India — tech-savvy,
but anxious about and unfamiliar with health cover. This is the interactive
prototype (41 screens across 9 stages) rebuilt as a real, routed web app:
every screen is a shareable URL, state is real and persisted, and the copy is
the product's actual voice, not placeholder.

- **AI advisor:** Meera — warm, plain-spoken, always available.
- **Human advisor:** Rohit Menon — IRDAI-certified, salaried, no commission.
- **Demo user:** Aditya Rao, 27, Mumbai — buying cover for himself and his
  parents (Sunita, 54; Mahesh, 58, has blood pressure). Insurer: Niva Suraksha.

## Run it locally

Requires Node 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

```bash
npm run build      # type-check + production build to dist/
npm run preview     # serve the production build
npm run typecheck   # tsc, no emit
```

## Deploy to Vercel

The repo is Vercel-ready — [`vercel.json`](vercel.json) sets the Vite preset, the
`dist` output, and an SPA rewrite so deep links like `/claims/tracker` resolve
on refresh instead of 404ing.

**Option A — Vercel CLI (no Git needed):**

```bash
npm i -g vercel
cd bharosa
vercel          # first run: log in, link/create the project — accept the detected defaults
vercel --prod   # promote to a production URL
```

**Option B — Git import:** push this folder to a GitHub/GitLab repo, then in the
Vercel dashboard *Add New → Project → Import*. Framework preset **Vite** is
detected automatically; no settings to change.

Notes:
- The Vercel build runs `vite build` only (via `vercel.json` / the
  `vercel-build` script) so a stray type error can't block a deploy. Run
  `npm run build` locally to type-check before shipping.
- Node 18+ is pinned in `engines`.

## Tech

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** — design tokens in `tailwind.config.js` (colours, the
  Plus Jakarta Sans / IBM Plex Mono pairing, the `max-w-app` phone column).
- **React Router 6** — one route per screen (`/advisory/intake`,
  `/claims/tracker`, …). Full list at **`/dev`**.
- **Zustand** (`src/store/store.ts`), persisted to `localStorage` under
  `bharosa-v1`. Ships pre-seeded with Aditya's data so every screen looks
  complete on first load; screens write real answers back, so moving between
  them (dashboard → claim → tracker) stays consistent with what you entered.
  `/dev` has a **Reset demo data** button.

## Project structure

```
src/
  components/        shared primitives — Button, Chip, ChatBubble, Tracker,
                     PlanCard, PlainWords, Sheet, BottomNav, AdvisorFab, …
  data/content.ts    all human-written copy: brand + persona, quote data,
                     plan detail, comparison table, hospitals, glossary,
                     engagement cards, claim paper-trail
  lib/               calculator (city × age cost estimate), INR formatting,
                     recap builder
  store/store.ts     profile + policy + claim state machine (draft →
                     submitted → pre-approved → query-raised → under-review →
                     settled), with a timestamped history per transition
  screens/
    awareness/ landing/ advisory/ comparison/ purchase/
    onboarding/ retention/ claims/ renewal/
  routes.tsx         the route table (path, stage, screen) — wires all 41
  App.tsx            router
```

## The 9 stages

1. **Awareness** — myth-busting discovery card.
2. **Landing** — hero cost calculator (`/`), readiness check.
3. **Advisory** — Meera's intro, conversational intake, inline "in plain
   words" cards, the "here's what I'm hearing" recap, the quote reveal, and a
   persistent human-escalation panel.
4. **Comparison** — recommendations, full plan detail, opt-in side-by-side,
   a quiet "still unsure?" prompt.
5. **Purchase** — selection confirmation, 3-step form (details, medical
   declaration with a live effect on the flagged answer, nominee), mocked
   payment, "you're covered".
6. **Onboarding** — 5 setup screens: plan in plain words, e-card, hospital
   locator, claims explainer, meet-your-advisor, plus a two-type reminder
   opt-in.
7. **Retention** — home dashboard, engagement cards, a 4-month check-in.
8. **Claims** — entry, type, incident details, per-document checklist,
   optional human pre-check, submission, live status tracker, plain-language
   query handling, settlement resolution, a 3-day human follow-up.
9. **Renewal** — 45-day reminder, one-tap renew.

## Not built (by design)

- No real payment gateway — the payment screen is mocked and transitions
  straight to confirmation.
- No backend or authentication — front-end only, all data mocked locally.
- No maps API — the hospital locator uses a static styled map plus the
  pinned list.
