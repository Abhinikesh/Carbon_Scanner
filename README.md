# CO2 Emission - Climate Lens — Backend API

Production-ready Node.js + Express backend for the CO2 Emission Climate Lens app.

---

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values
npm run dev
```

---

## API Endpoints

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| POST | /api/auth/refresh-token | Refresh access token |
| POST | /api/auth/logout | Logout |
| GET | /api/auth/me | Get current user |

### Scan
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/scan/upload | Upload image → get CO2 result |
| GET | /api/scan/history | Get scan history |
| GET | /api/scan/:id | Get single scan |
| DELETE | /api/scan/:id | Delete scan |

### User
| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/user/dashboard | Dashboard stats |
| PUT | /api/user/profile | Update profile |
| GET | /api/user/leaderboard | Top 10 users |

### Carbon
| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/carbon/factors | All emission factors |
| GET | /api/carbon/compare | Compare two items |

---

## Environment Variables

See `.env.example` for all required variables.

## APIs Required
- **MongoDB Atlas** — database
- **Cloudinary** — image storage
- **Google Vision API** — image recognition + OCR
- **Climatiq API** — carbon calculation (optional, falls back to local data)

## Scan Types
`product` | `food` | `receipt` | `flight` | `barcode`

## Response Format
```json
{ "success": true, "message": "...", "data": {} }
{ "success": false, "message": "...", "error": "..." }
```
