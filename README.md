# Swensen's Clone

## Requirements

- Node.js v20.x or higher
- MongoDB Atlas account

## Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB
MONGO_URL=mongodb+srv://swensens:swensens123@swensens-db.4gp2qzc.mongodb.net/swensens?appName=swensens-db

# JWT Secret
JWT_SECRET=your-secret-key-here

# Server Port
PORT=4000
```

Create a `.env` file in the root directory for frontend:

```env
# API URL
VITE_API_URL=http://localhost:4000/api

# Swensen's Assets URL (optional)
VITE_SWENSENS_URL=https://www.swensens1112.com
```

## Installation

```bash
npm install
```

## Run Development

```bash
# Run frontend (Vite)
npm run dev

# Run backend (Express + MongoDB)
npm run server
```

Frontend: http://localhost:5173  
Backend: http://localhost:4000

## Admin Account

For testing admin features:

**Login with Phone:**

- Phone: 099-999-9999
- PIN: 999999

**Login with Email:**

- Email: admin@gmail.com
- Password: 999999
