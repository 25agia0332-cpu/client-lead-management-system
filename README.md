# Client Lead Management System (Mini CRM)

A beginner-friendly full-stack Mini CRM for managing website client leads.

## Features
- Admin login with JWT authentication
- Dashboard statistics
- Create, view, edit and delete leads
- Search and status filtering
- Statuses: New, Contacted, Converted
- Notes and follow-up date
- Responsive mobile-friendly interface
- MongoDB database

## Tech Stack
HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, JWT, bcrypt

## Structure
```text
client-lead-management-system/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── config/db.js
│   ├── middleware/authMiddleware.js
│   ├── models/Lead.js
│   ├── routes/authRoutes.js
│   ├── routes/leadRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Setup
1. Install Node.js.
2. Create a MongoDB Atlas database.
3. Copy `backend/.env.example` to `backend/.env`.
4. Put your MongoDB connection string in `MONGO_URI` and set a long `JWT_SECRET`.
5. In `backend/`, run `npm install` then `npm start`.
6. Open `http://localhost:5000`.

Demo admin defaults are `admin@example.com` / `Admin@123`; change them before public deployment.

Never commit `backend/.env` or your MongoDB password.
