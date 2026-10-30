# API integration notes

The frontend API base is `VITE_API_BASE_URL` and includes the `/api` prefix. The deployed FastAPI OpenAPI schema is authoritative if an implementation changes.

| Feature | Method and path | Notes |
| --- | --- | --- |
| Health | GET `/health` | Database connectivity check |
| Live dashboard summary | GET `/live/summary` | ETag conditional polling; browser-readable `ETag` and `X-Request-ID` response headers |
| Crop catalogue | GET `/crops?limit=100` | Public active profiles; identifiers are returned as `id` |
| Crop detail | GET `/crops/{id}` | Public active profile |
| Create crop | POST `/crops` | Admin only; requires all seven numeric ranges, soil types, seasons and source note |
| Update crop | PUT `/crops/{id}` | Admin only |
| Deactivate crop | DELETE `/crops/{id}` | Admin only; soft-deactivates profile |
| Recommendation | POST `/recommendations` | Optional account; numeric soil/climate requirements plus optional N-P-K |
| Recommendation history | GET `/recommendations` | Authenticated; returns `items`, `total`, `limit`, `offset`; records expose `ranked_results` |
| Save anonymous recommendation | POST `/recommendations/{id}/save` | Authenticated; assigns the record to the current account |
| Delete own recommendation | DELETE `/recommendations/{id}` | Authenticated; owner or admin |
| Compare crops | POST `/compare` | Two to four active crop IDs and a shared field profile |
| Auth | `/auth/register`, `/auth/login`, `/auth/refresh`, `/auth/logout`, `/auth/me`, `/auth/change-password` | Refresh token is an HTTP-only cookie; access token is returned by login/refresh |
| Admin overview | GET `/admin/overview` | Admin only |
| Admin users | GET `/admin/users`; PATCH `/admin/users/{id}`; POST `/admin/users/{id}/revoke-sessions` | Admin only; no user-delete endpoint |
| Admin recommendations | GET/DELETE `/admin/recommendations[/{id}]` | Admin only |
| Admin activity | GET `/admin/activity` | Admin only |
| Admin system health | GET `/admin/system` | Safe status only; no credentials |
| Admin settings | GET/PUT `/admin/settings` | Supported non-secret application settings |
| Simulator | POST `/admin/simulator/toggle?enabled={bool}`; POST `/admin/simulator/tick` | Admin only; tick creates clearly marked synthetic records |
| CSV exports | GET `/admin/export/{recommendations,activity,users}.csv` | Admin only |

## Field enums and validation

- Soil types: `sandy`, `loamy`, `clay`, `silt`, `black`, `red`, `alluvial`.
- Seasons: `Kharif`, `Rabi`, `Zaid`.
- Required numeric inputs: pH, rainfall, temperature and humidity.
- Optional nutrient inputs: nitrogen, phosphorus and potassium. Missing nutrient values reduce completeness; they are not inferred.
- Numeric limits are enforced by the API schema. The frontend mirrors those limits for early feedback.

The API remains authoritative for authorization, validation and persistence. Error responses contain `detail`, `code` and `request_id`. Do not expose seed tokens, database credentials, JWT secrets or model API keys in frontend configuration.
