# SVM Traders

Responsive website for SVM Traders, built with React, TypeScript, Vite, and Tailwind CSS. The site presents the Hyderabad-based natural leaf tableware range and provides direct WhatsApp enquiries.

## Requirements

- Node.js 20 or later
- npm

## Run locally

```sh
npm ci
npm run dev
```

Vite serves the local site at `http://localhost:3000`.

## Verify and build

```sh
npm test
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel

The repository is configured for Vercel with `vercel.json`. Import the GitHub repository in Vercel and use the Vite defaults:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Push changes to the connected deployment branch to trigger a deployment. The production site is [svm-traders.vercel.app](https://svm-traders.vercel.app).

## Enquiry flow

The Contact form and product quote modal validate the entered details and open WhatsApp addressed to **+91 99858 12721** with a prefilled enquiry. The visitor reviews the message and taps Send in WhatsApp; the website does not send messages automatically.

## Images and visibility

Static site images live in `public/images/` and are referenced using absolute `/images/...` paths. Keep one canonical file per unique image; reference that file instead of copying it under a second name. The test suite checks file hashes and ensures product and gallery image lists contain no repeated paths. Product photos appear on the Products page; the homepage uses a text-based product preview and a separate gallery so an image is not repeated on that page.

The home gallery lists only the distinct supplied images selected for it. Additional gallery subjects such as packed orders or local delivery should be added only when matching photos are supplied. Scroll-reveal and page fade animations are intentionally not used, so content is not hidden while waiting for an observer or animation.
