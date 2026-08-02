# Formly

A modern **SaaS Form Builder** built with **Next.js 16, TypeScript, tRPC, PostgreSQL, Drizzle ORM, and TurboRepo**.

Create, customize, publish, and analyze forms through a beautiful drag-and-drop interface with built-in analytics, authentication, and real-time dashboard insights.

## 🌐 Live Demo

**Website:** https://formly-web.vercel.app/

## 📸 Preview

> Add screenshots or GIFs here

- Landing Page
- Dashboard
- Form Builder
- Published Form
- Analytics Dashboard

---

# ✨ Features

### 🔐 Authentication

- Email & Password Authentication
- JWT Authentication
- HTTP-only Cookie Sessions
- Protected Routes

### 📝 Form Builder

- Drag & Drop Form Builder
- Dynamic Form Fields
- Field Reordering
- Persistent Field Order
- Edit/Delete Fields
- Publish & Unpublish Forms

### 📊 Analytics

- Total Forms
- Total Responses
- Total Views
- Response Rate
- Recent Forms Dashboard

### 🌍 Form Sharing

- Public Form Links
- Copy Share Link
- View Tracking
- Response Collection

### ⚙️ Dashboard

- Recent Forms
- Form Management
- Delete Forms
- Responsive UI

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Shadcn UI

## Backend

- tRPC
- Node.js

## Database

- PostgreSQL
- Drizzle ORM

## Authentication

- JWT
- HTTP-only Cookies

## Monorepo

- TurboRepo

## Development

- Docker
- ESLint
- Prettier
- PNPM

---

# 📂 Project Structure

```
formly/
│
├── apps/
│   ├── web
│   ├── api
│   └── docs
│
├── packages/
│   ├── database
│   ├── trpc
│   ├── logger
│   ├── services
│   ├── eslint-config
│   └── typescript-config
│
└── turbo.json
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/GunjanBasak007/Formly.git

cd Formly
```

## Install Dependencies

```bash
pnpm install
```

## Configure Environment Variables

Create a `.env` file in the root directory.

```env
DATABASE_URL=
JWT_SECRET=
```

Add any other required environment variables.

---

## Start PostgreSQL (Docker)

```bash
docker compose up -d
```

---

## Generate Database

```bash
pnpm db:generate
```

---

## Run Migrations

```bash
pnpm db:migrate
```

---

## Start Development Server

```bash
pnpm dev
```

---

# 📦 Available Commands

```bash
pnpm dev              # Run all apps
pnpm build            # Build project
pnpm lint             # Lint code
pnpm format           # Format code
pnpm db:generate      # Generate Drizzle schema
pnpm db:migrate       # Run migrations
```

---

# 🏗 Architecture

Formly follows a modern full-stack architecture powered by TurboRepo.

```
Next.js
     │
     ▼
React UI
     │
     ▼
tRPC
     │
     ▼
Service Layer
     │
     ▼
Drizzle ORM
     │
     ▼
PostgreSQL
```

---

# 🎯 Highlights

- Modern SaaS architecture
- TurboRepo Monorepo
- End-to-end Type Safety
- Secure Authentication
- Responsive UI
- Dashboard Analytics
- Production Deployment

---

# 📈 Future Improvements

- OAuth Login
- AI-powered Form Generation
- Form Templates
- Email Notifications
- CSV Export
- Team Workspaces

---

# 👨‍💻 Author

**Gunjan Basak**

GitHub: https://github.com/GunjanBasak007

LinkedIn: https://www.linkedin.com/in/gunjan-basak-2a7440338/
