# ToolNest Starter

Responsive Next.js App Router + Tailwind CSS v4 starter with **15 functional browser-based tools**. ToolNest is a provisional name; check domain/trademark availability.

## Local setup

1. Install Node.js 20.9+ (Node 22 recommended).
2. `npm install`
3. `cp .env.example .env.local` and set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` for local development.
4. `npm run dev` then visit http://localhost:3000.
5. `npm run build` to validate production build.

## Vercel

Push this folder to GitHub and import it into Vercel as a Next.js project. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain (no trailing slash). Deploy, attach your domain, then verify `/robots.txt` and `/sitemap.xml`. Commercial hosting eligibility and usage limits depend on your Vercel plan.

## Before public launch

Replace provisional branding and legal text; add verified contact details; test tools with real-world inputs and large files; add accessible usage guides and tool-specific FAQs; connect Search Console; review security, accessibility, privacy and browser support. No advertising or payments are integrated. CSS minifier is deliberately conservative and not a full optimizing parser.
