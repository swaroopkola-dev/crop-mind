# Deployment checklist

## Frontend variables
| Variable | Production/Preview value |
| --- | --- |
| VITE_API_BASE_URL | https://crop-mind-api.vercel.app/api (confirm the active API origin first) |
| VITE_LIVE_POLL_INTERVAL_MS | 15000 |
| VITE_APP_NAME | CropMind |

Only public configuration belongs in Vite environment variables. Never add API secrets, database credentials, JWT secrets, administrator passwords or seed tokens to the frontend.

## Backend environment
| Name | Purpose / typical value |
| --- | --- |
| MONGODB_URI | Atlas connection URI; secret |
| DB_NAME | cropmind |
| JWT_SECRET | High-entropy secret, at least 32 characters |
| JWT_ALGORITHM | HS256 |
| ACCESS_TOKEN_EXPIRE_MINUTES | 15 |
| REFRESH_TOKEN_EXPIRE_DAYS | 7 |
| GEMINI_API_KEY | Optional server-side model key; secret |
| GEMINI_MODEL | Configured model name |
| GEMINI_TIMEOUT_SECONDS | 8 |
| FRONTEND_ORIGIN | https://crop-mind.vercel.app (no trailing slash; replace if assigned domain differs) |
| CRON_SECRET | Secret for scheduled jobs |
| SIMULATOR_ENABLED | false for production by default |
| ADMIN_SEED_EMAIL | Initial admin email |
| ADMIN_SEED_PASSWORD | Strong initial admin password; secret |
| SEED_TOKEN | Seed endpoint token; secret |
| ENVIRONMENT | production |
| LOG_LEVEL | INFO |

## Release gate
Do not create/link a new Vercel project or trigger builds until the account deployment quota has reset and release is explicitly approved. Set the production branch to main; confirm production/preview environments and variables, then deploy once and validate API health, docs, conditional ETag behavior, auth, recommendation, compare and admin access. The first seed call must be done via private Postman environment with X-Seed-Token; never commit or print its value.

## CORS / caching
The API origin must include the deployed frontend in FRONTEND_ORIGIN. Browser JavaScript cannot read arbitrary response headers unless exposed, so API CORS should expose ETag and X-Request-ID for conditional polling.
