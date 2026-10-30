# CropMind

CropMind is a responsive React application for exploring crop suitability from soil, nutrient, climate and season information.

## Applications

- **Frontend:** https://crop-mind-rouge.vercel.app
- **API:** https://crop-mind-api.vercel.app
- **API reference:** https://crop-mind-api.vercel.app/docs

Both production Vercel deployments were verified as **Ready** on 30 October 2026. The latest frontend deployment is built from `main` commit `402f8d5ae9f449faba59acd80a66201f5f89fed6`; the API deployment is built from `main` commit `7a8655b6727fdd9189925126cc4a68e245d76c78`. The backend environment configuration is maintained in the [CropMind API repository](https://github.com/swaroopkola-dev/crop-mind-api).

## Features

- Crop recommendations with ranked results and factor explanations
- Refined responsive layout and navigation, including guest access restrictions and return navigation to sign-in
- Crop comparison, saved recommendation history and printable reports
- Guest recommendation flow and account authentication
- Administrator console for users, recommendations, crop profiles, activity, health and settings
- CSV exports, light/dark theme and responsive layouts

## Technology

- React 18 and React Router
- Vite 6
- Tailwind CSS
- Recharts, Framer Motion and lucide-react
- Vercel hosting

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
npm run preview
```

## Environment configuration

Copy `.env.example` to `.env` and adjust public frontend settings when needed.

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_API_BASE_URL` | API base URL; include the `/api` path | `https://crop-mind-api.vercel.app/api` |
| `VITE_LIVE_POLL_INTERVAL_MS` | Dashboard polling interval in milliseconds; minimum is 5,000 | `15000` |
| `VITE_APP_NAME` | Browser document title prefix | `CropMind` |

Only values intended to be visible in the browser belong in `VITE_*` variables. Never put database connection strings, model API keys, JWT secrets, administrator passwords or seed tokens in frontend environment variables.

For Vercel, configure these variables in the frontend project settings for the required deployment environments. Do not commit `.env` files or secrets.

## Application structure

- `index.html` — document shell and browser metadata
- `src/main.jsx` — application bootstrap, API client, app context, routing, pages and admin views
- `src/styles.css` — global styles, components and responsive layouts
- `vite.config.js` — Vite configuration
- `eslint.config.js` — ESLint flat configuration
- `vercel.json` — SPA route rewrite
- `.env.example` — public frontend environment template

The main module currently combines several responsibilities. Splitting it into focused components, hooks and API modules is a worthwhile follow-up refactor; avoid moving code without running lint and production build checks.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/dashboard` | Signed-in overview |
| `/recommend` | Recommendation form |
| `/results` | Ranked recommendation results |
| `/compare` | Crop comparison |
| `/history` | Saved recommendations |
| `/login`, `/register` | Account access |
| `/about` | Methodology and limitations |
| `/admin` and `/admin/*` | Administrator console |

The dashboard and administrator routes have frontend route guards. The API remains responsible for enforcing authorization; frontend guards are not a security boundary.

## API and authentication

The shared request helper in `src/main.jsx` sends JSON requests to `VITE_API_BASE_URL`, includes credentials, attaches the browser-session access token when available and attempts one refresh after an eligible 401 response. The API manages HttpOnly refresh cookies and enforces administrator permissions independently. The production frontend is configured to use `https://crop-mind-api.vercel.app/api`; keep backend-only secrets in the API project's environment settings, never in this frontend repository.

The recommendation form validates soil, nutrient, rainfall, temperature, humidity and season inputs against the API contract. Nitrogen, phosphorus and potassium are optional and expressed in kg/ha. Recommendations require active crop profiles in the API dataset.

## Live data

The dashboard summary uses conditional ETag requests. Polling pauses while the browser tab is hidden and backs off after failures. The administrator activity chart is based on API activity records; explicitly labelled demo charts are illustrative only.

## Security and advisory

- Do not publish `.env` files or secrets.
- Provision administrator accounts privately through the backend's documented operator workflow.
- The administrator console exposes operational actions; use them only with an authorized administrator account.
- Crop suitability scores are relative heuristics, not yield estimates, probabilities or guarantees. Verify recommendations with current soil analysis and qualified local agronomic advice before making planting decisions.
