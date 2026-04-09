# 🌍 CO2 Emission — Climate Lens

> AI-powered carbon footprint tracker. Scan products, receipts, food & flights to get instant CO₂ estimates, sustainability scores, and greener alternatives.

![Climate Lens](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Stack](https://img.shields.io/badge/Stack-MERN-green)

---

## 📸 Screenshots

| Home | Dashboard | Upload Center |
|------|-----------|---------------|
| ![Home](./screenshots/home.png) | ![Dashboard](./screenshots/dashboard.png) | ![Upload](./screenshots/upload_center.png) |

| Education Hub | Settings |
|---------------|----------|
| ![Education](./screenshots/education_hub.png) | ![Settings](./screenshots/settings.png) |

---

## ✨ Features

- 📸 **Smart Upload** — Upload receipts, flight tickets, product images, barcodes
- 🤖 **AI Recognition** — Google Vision API identifies items with 98.4% OCR accuracy
- 🌿 **CO₂ Calculator** — Real emission data using Climatiq API + EPA/DEFRA/FAO datasets
- ♻️ **Green Alternatives** — AI suggests lower-carbon swaps for every item scanned
- 📊 **Carbon Dashboard** — Track your monthly footprint with real-time charts
- 🏆 **Badges & Streaks** — Gamified sustainability rewards
- 🔐 **Secure Auth** — JWT access + refresh token system
- 🌙 **Dark Mode** — Full dark theme support
- 📱 **Mobile Responsive** — Works on all screen sizes

---

## 🛠 Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Recharts
- Axios
- Lucide React

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (image storage)
- Google Cloud Vision API
- Climatiq API
- Multer

---

## ⚙️ Environment Variables

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/co2lens
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GOOGLE_VISION_API_KEY=your_google_key
CLIMATIQ_API_KEY=your_climatiq_key
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

Create a `.env` in `/client`:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Endpoints

```
POST   /api/auth/register        Register new user
POST   /api/auth/login           Login
POST   /api/auth/refresh-token   Refresh access token
GET    /api/auth/me              Get current user

POST   /api/scan/upload          Upload image → CO₂ result
GET    /api/scan/history         Get scan history
GET    /api/scan/:id             Get single scan result
DELETE /api/scan/:id             Delete scan

GET    /api/user/dashboard       Dashboard stats + chart data
PUT    /api/user/profile         Update profile
GET    /api/user/leaderboard     Top 10 users

GET    /api/carbon/factors       All emission factors
GET    /api/carbon/compare       Compare two items
```

---

## 📂 Project Structure

```
CO2-emission-Climate-Lens/
├── backend/
│   ├── config/          → db.js, cloudinary.js
│   ├── controllers/     → auth, scan, user, carbon
│   ├── middleware/      → auth, error, upload, rateLimiter
│   ├── models/          → User, Scan, CarbonFactor
│   ├── routes/          → all API routes
│   ├── services/        → AI, carbon, sustainability, alternatives
│   ├── utils/           → token, response, calculator helpers
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/  → Layout, Navbar, Sidebar
│   │   ├── pages/       → Home, Dashboard, Upload, Result, Settings
│   │   └── utils/       → api.js
│   └── vite.config.js
└── README.md
```

---

## 🌱 Carbon Data Sources

- 🇺🇸 EPA (United States Environmental Protection Agency)
- 🇬🇧 DEFRA (UK Department for Environment)
- 🌾 FAO (Food and Agriculture Organization)
- 🌐 Climatiq API (real-time global emission factors)

> ⚠️ Carbon values are estimates based on public datasets. Not intended as scientific or legal advice.

---

## 📄 License

MIT License © 2026 [Abhinikesh](https://github.com/Abhinikesh)
