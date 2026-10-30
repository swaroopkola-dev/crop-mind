# CropMind frontend

## 1. Project overview
CropMind is a responsive React single-page application for exploring crop suitability using soil, nutrients, climate and season information.

## 2. Live applications
- Frontend: https://crop-mind-rouge.vercel.app
- Backend: https://crop-mind-api.vercel.app
- API docs: https://crop-mind-api.vercel.app/docs

## 3. Product capabilities
Landing page, dashboard, recommendations, ranked results, comparison, saved history, authentication, methodology, admin console, CSV exports, theme switching and print view.

## 4. Technology stack
React 18, Vite, React Router, Tailwind CSS, lucide-react, Recharts and Framer Motion. Hosted as a Vercel single-page application.

## 5. Routes
/, /dashboard, /recommend, /results, /compare, /history, /login, /register, /about, /admin, /admin/users, /admin/recommendations, /admin/crops, /admin/activity, /admin/health, /admin/demo, /admin/settings, plus a not-found route.

## 6. Getting started
Use Node.js 20 or newer. Run npm install, npm run lint, npm run build and npm run dev.

## 7. Configuration
Set VITE_API_BASE_URL (including /api), VITE_LIVE_POLL_INTERVAL_MS and VITE_APP_NAME in Vercel. Vite values are public browser values; never put database credentials, model keys, JWT secrets, admin passwords or seed tokens in VITE_* variables.

## 8. API communication
A shared request helper in src/main.jsx handles JSON requests, bearer authorization, credentials-included calls, API errors and one refresh retry after 401. The API base is configured by VITE_API_BASE_URL.

## 9. Authentication and route guards
The application context restores the user through /auth/me and keeps the access token for the browser session. Expired requests retry through /auth/refresh. Refresh cookies are HttpOnly and rotated by the API. User routes require authentication; admin pages check the admin role and the API independently enforces 403 for non-admins.

## 10. Recommendation workflow
The form validates soil type, pH, rainfall, temperature, humidity and season against the API contract. N/P/K are optional and use kg/ha. A sample profile and completeness indicator are provided. Ranked results require active crop profiles in the API dataset.

## 11. Results and explanation
Results show ranked crops, score, confidence/completeness, strengths, weaknesses, factor breakdown and explanation. Explanations are labelled AI-generated (Gemini) or generated from rules (fallback). Users can save results after signing in and print the report.

## 12. Comparison and history
Compare supports two to four crop profiles and renders API-backed charts and factor tables. Signed-in users can revisit and remove saved recommendations.

## 13. Administrator console
Views cover overview, users, recommendations, crop dataset, activity, system health, demo controls and settings. User changes, session revocation and guarded account removal use admin APIs. CSV exports are API-backed; crop removal is a soft deactivation.

## 14. Live data and polling
The dashboard uses the API summary and ETag conditional requests. Polling pauses while the tab is hidden and retries with backoff after failures. The admin overview chart uses live API activity; illustrative charts are labelled Demo data.

## 15. Styling, accessibility and print
Warm agricultural palette, rounded cards, responsive layouts, light/dark theme, labelled controls, loading and empty states, status messages and print stylesheet. Print output includes the advisory disclaimer.

## 16. Demo-only credentials
No shared demo username or password is published or embedded in the frontend. A dedicated demo administrator must be provisioned privately by the operator. Never put real administrator credentials in source code or public docs.

## 17. Limitations and advisory disclaimer
The crop library contains approximate educational data. Scores are relative suitability heuristics, not yield estimates or probabilities. Recommendations require an active crop dataset. Verify results with current soil tests and qualified local agronomic advice before planting.
