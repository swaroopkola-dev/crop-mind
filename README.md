 # CropMind frontend
React + Vite SPA for the CropMind crop-suitability API.

## Features
- Responsive dashboard with API-fed crop catalog and operational summary metrics.
- Field profile form covering soil, pH, N-P-K nutrients, rainfall, temperature, humidity and season.
- Ranked suitability results, confidence/completeness display, factor contribution explanations, print stylesheet.
- Crop comparison, user authentication, recommendation history, methodology and limitations.
- Admin views for overview, users, recommendations, crop catalog, activity, AI/system health, demo actions and settings.
- Light/dark theme, mobile navigation, polling with ETag support, hidden-tab pause and retry backoff.
- All demonstration trend data is labelled. Live KPI values are fetched from the API; no fabricated API counts.

## Configuration
Set VITE_API_BASE_URL (API base including /api), VITE_LIVE_POLL_INTERVAL_MS (default 15000), and VITE_APP_NAME. Never place database credentials, access secrets, model API keys, administrator passwords or seed tokens in VITE_* variables. Vite values are public in the browser bundle.

## Development
Requires Node.js 20 or newer.

    npm install
    npm run lint
    npm run build
    npm run dev

## Routes
/, /recommend, /results, /compare, /history, /login, /register, /about, and /admin with nested administration pages. The Vercel SPA rewrite is configured in vercel.json.

## API and deployment notes
The UI uses the API contract and surfaces API errors rather than silently reporting a successful operation. Authentication and admin access must always be enforced by the API. Client-side route checks are usability controls only. Browser requests require the backend CORS origin to allow the deployed frontend; ETag polling also requires ETag to be exposed by CORS.

Do not link this repository to a new Vercel project or deploy until the account deployment quota has reset and release is explicitly approved.

## Agronomic disclaimer
Suitability scores are comparative heuristics, not guarantees, yield predictions or probabilities of success. Validate the results with a current soil test and qualified local agronomist before making agricultural decisions.
