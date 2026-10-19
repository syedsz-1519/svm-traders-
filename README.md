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

## Product categories

Product cards, gallery captions, and enquiry dropdowns identify Areca leaf plates separately from Sal leaf plates and bowls. The homepage shows a three-photo hero, then a gallery containing every clean product photo, then the “Why Choose Us” section. The full, enquiry-ready product cards are on the separate “Our Range” page. Product cards have carousel arrows and selectable thumbnails. The recently supplied bowl-stack photo had the embedded sparkle mark, so it was omitted; the bowl card uses the clean single-bowl and food-serving photos instead. A matching Areca plate with food and a clean Sal bowl stack were not included in the uploads.

## Campaign video

The campaign video lives at `public/videos/svm-traders-campaign.mp4`. It uses native playback controls, starts only when the visitor presses play, and sits in a black frame. The video is displayed with `object-fit: contain` so the full portrait clip remains visible with black side bars on wider screens and no cropping.

## Navigation and footer

On mobile, the menu toggle sits on the right side of the header. The fixed bottom Call/WhatsApp bar has been removed; the header call link and floating WhatsApp button remain available. The footer includes the business subheading, navigation, contact numbers, and subtle motion that respects reduced-motion preferences.

## Images and visibility

Static site images live in `public/images/` and are referenced using absolute `/images/...` paths. The optimized `svm-traders-logo.webp` is used in the navbar and footer. Photos with the embedded sparkle mark have been deleted or omitted; the hero collage shows Areca plates, a Sal leaf bowl, and an empty Sal leaf plate. The buffet-plate gallery currently lacks an empty single-plate photo. Bowl photos are reserved for Sal leaf products. Keep one file for each distinct photo rather than adding duplicate copies. The test suite checks image-file hashes, verifies known marked files are absent, and ensures product, gallery, and hero image lists contain no repeated paths.

The home gallery lists only the distinct supplied images selected for it. Additional gallery subjects such as packed orders or local delivery should be added only when matching photos are supplied. Scroll-reveal and page fade animations are intentionally not used, so content is not hidden while waiting for an observer or animation.
