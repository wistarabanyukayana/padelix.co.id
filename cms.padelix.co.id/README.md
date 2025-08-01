# Padelix.co.id CMS (Strapi)

Backend CMS for Padelix Indonesia, built with Strapi and using MariaDB as the database.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Content Types & API](#content-types--api)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## About

This Strapi CMS manages content for the Padelix.co.id website.  
It uses MariaDB (production on Rumahweb, local via db-dump) and is configured to send emails as `noreply@padelix.co.id` via SMTP.

---

## Tech Stack

- **Strapi CMS** (Node.js, TypeScript)
- **Database:** MariaDB
- **Email:** SMTP (noreply@padelix.co.id)

---

## Prerequisites

- **Node.js v20+ (even-numbered LTS releases only)**
- **npm v9+**
- Access to a MariaDB database (request latest db-dump for local development)

---

## Getting Started

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your database, Strapi, and SMTP credentials.

- SMTP is configured for sending emails as `noreply@padelix.co.id`.

```bash
cp .env.example .env
```

---

## Database Setup

- Request the latest MariaDB db-dump from the maintainer.
- Import the db-dump into your local MariaDB instance.
- Update your `.env` file with your local database credentials.

---

## Available Scripts

- `npm run develop` — Start Strapi in development mode
- `npm run build` — Build the Strapi admin panel
- `npm run start` — Start Strapi in production mode

---

## Deployment

1. Build the admin panel using `npm run build`.
2. Upload the project to your cPanel Node.js app directory.
3. Ensure your environment variables are set in cPanel.
4. Start the Node.js app from cPanel.

---

## Content Types & API

Content types are defined in `src/api/`.  
API endpoints are auto-generated by Strapi based on content types.

### Example Content Types (from codebase):

- **contact-signup**: `/api/contact-signups`
- **global**: `/api/globals`
- **home-page**: `/api/home-pages`
- **product**: `/api/products`

> For more details, see the files in `src/api/`.

---

## Troubleshooting

- **Strapi CMS on cPanel:**  
  Use Node.js version below 20 for `npm install` if you encounter memory issues, but run Strapi with Node.js 20+ (Strapi 5 requires Node 20+).

---

## License

This project is proprietary and not open source.

---
