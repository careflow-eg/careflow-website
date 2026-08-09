<div align="center">
  <h1>🏥 CareFlow Website</h1>
  <p><em>Public-facing marketing and landing page for the CareFlow platform</em></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
    <img src="https://github.com/careflow-eg/careflow-website/actions/workflows/ci.yml/badge.svg" />
  </p>
</div>

---

## Overview

The **CareFlow Website** is the public-facing landing page and marketing site for the CareFlow Intelligent Clinical Copilot platform. Built with Next.js App Router, Tailwind CSS, and Framer Motion for a polished, responsive experience.

## Key Features

- **Responsive Landing Page** — Mobile-first design with smooth animations
- **Dark/Light Theme** — System-aware theme switching
- **Performance Optimised** — Static generation, image optimisation, and lazy loading
- **SEO Ready** — Meta tags, structured data, and semantic HTML

## Project Structure

```
careflow-website/
├── .github/workflows/    # CI/CD pipeline
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components
│   └── providers/        # Theme and context providers
├── docs/                 # Documentation
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and shared logic
├── public/               # Static assets (images, fonts)
├── .env.example          # Environment template
├── next.config.ts        # Next.js configuration
├── eslint.config.mjs     # Linting configuration
└── package.json          # Dependencies
```

## Quick Start

```bash
git clone https://github.com/careflow-eg/careflow-website.git
cd careflow-website
cp .env.example .env
npm install
npm run dev
# Open http://localhost:3000
```

## Deployment

Deployed via Vercel with automatic previews on pull requests.

## License

Proprietary — CareFlow © 2026
