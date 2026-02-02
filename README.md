# Blog Post Platform (User App + Admin Dashboard)

Full-stack blog platform with **two separate frontends**:
- **User Web App**: read posts, register/login, like posts, write comments
- **Admin Dashboard**: create/edit/delete posts, toggle statuses (published/hidden/read), manage content

Backend is a **TypeScript + Express** REST API with **JWT auth** and a **PostgreSQL** database via **Prisma**.

## Preview

- **Live demo** https://personal-blog-3bi.pages.dev/

---

## Tech Stack

### Backend (API)
- **Node.js + Express (ESM)**
- **TypeScript**
- **PostgreSQL**
- **Prisma ORM**

### Frontends (2 apps)
- **React + TypeScript**
- **Vite (rolldown-vite override)**
- **React Router**
- **Tailwind CSS**

---

## Key Libraries

### Backend
- **express** – REST API
- **prisma / @prisma/client / @prisma/adapter-pg** – DB access + Postgres adapter
- **pg** – PostgreSQL driver
- **jsonwebtoken** – sign/verify JWTs
- **passport-jwt** – JWT strategy / protected routes
- **bcryptjs** – password hashing
- **express-validator** – request validation
- **cors** – CORS configuration
- **cookie-parser** – cookie handling (useful if storing tokens in cookies)
- **dotenv** – environment variables
- **tsx** – dev runner (`tsx watch`)
- Types: `@types/express`, `@types/node`, `@types/jsonwebtoken`, `@types/pg`, etc.

### Frontend (User App)
- **react / react-dom**
- **react-router / react-router-dom**
- **tailwindcss + @tailwindcss/vite**
- **jwt-decode** – decode JWT payload on the client

---

## Features

### User Web App
- Register / login
- Browse published posts
- View a single post + comments
- Like / unlike posts (authenticated)
- Create comments (authenticated)
- Client-side routing with React Router
- JWT decoding with `jwt-decode` for role/id/expiry display/logic

### Admin Dashboard
- Create new posts
- Edit posts (title/content/etc.)
- Delete posts
- Toggle/update post status (example: `draft`, `published`, `hidden`, `read`)
- Access restricted to admin accounts (JWT + role checks)

### Backend API
- JWT authentication + protected routes
- Password hashing with bcrypt
- Input validation with `express-validator`
- Prisma models + migrations (Postgres)
- CORS + cookie support
- Separation of concerns (routes/controllers/middleware pattern)
