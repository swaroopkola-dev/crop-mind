# API integration notes
Frontend base URL is VITE_API_BASE_URL and should include the /api prefix.

| Operation | Method and path |
| --- | --- |
| Health | GET /health |
| Live operational summary | GET /live/summary |
| Crop catalog | GET /crops?limit=100 |
| Compute recommendation | POST /recommendations |
| Compare profiles | POST /compare |
| Auth | /auth/register, /auth/login, /auth/refresh, /auth/logout, /auth/me |
| Admin overview | GET /admin/overview |
| Admin users | GET /admin/users |
| Admin recommendation records | GET /admin/recommendations |
| Admin crop CRUD | /admin/crops |
| Admin activity | GET /admin/activity |
| Admin service status | GET /admin/health, GET /admin/ai-health |
| Admin configuration | GET /admin/settings, PUT /admin/settings |

The deployed OpenAPI document at /docs takes precedence if routes or fields differ. The UI defensively checks common response wrappers but does not claim success after an API error.
