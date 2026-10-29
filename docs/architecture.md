# CropMind architecture
- React/Vite SPA with React Router and responsive component styles.
- API layer targets the configurable VITE_API_BASE_URL; access token is held in session storage for this implementation, while the backend refresh token uses an HTTP-only cookie.
- Live-query hook issues conditional requests with If-None-Match, pauses while the tab is hidden, and backs off when a request fails.
- Results and comparison views consume API-provided scores, confidence/completeness and factor breakdowns when present.
- Dashboard totals are API-sourced. Trend visualization is deliberately labelled Demo data and is not presented as live traffic.
- Admin pages call protected API routes and surface authorization/errors. Server authorization is authoritative.
- Vercel rewrite sends SPA routes to index.html.

## API contract expectations
Health: GET /api/health; live summary: GET /api/live/summary; crop catalog: GET /api/crops; recommendations: POST /api/recommendations; compare: POST /api/compare; auth under /api/auth; admin under /api/admin.

The API remains authoritative for the final request and response schema. Verify API behavior in Postman against the current OpenAPI docs before production.
