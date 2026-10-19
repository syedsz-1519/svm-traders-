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

Product cards, gallery captions, and enquiry dropdowns identify Areca leaf plates separately from Sal leaf plates and bowls. Product cards include selectable photo strips with stack, single-item, and food-serving views grouped under the matching product.

## Campaign video

The homepage campaign video is stored at `public/videos/svm-traders-ad.mp4` and served at `/videos/svm-traders-ad.mp4`. It is encoded as a landscape 16:9 video from the supplied portrait clip using a centered crop, so some content at the top and bottom is cropped. The player sits beside its campaign text on tablet and desktop, and stacks below it on smaller screens. It uses native playback controls and loads metadata until a visitor chooses to play it. Keep a single canonical copy of the video in `public/videos/`.

## Navigation and footer

On mobile, the menu toggle sits on the right side of the header. The fixed bottom Call/WhatsApp bar has been removed; the header call link and floating WhatsApp button remain available. The footer includes the business subheading, navigation, contact numbers, and subtle motion that respects reduced-motion preferences.

## Images and visibility

Static site images live in `public/images/` and are referenced using absolute `/images/...` paths. The optimized `svm-traders-logo.webp` is used in the navbar and footer. Product cards include selectable photo strips grouping stack, single-product, and food-serving photos under their matching product. The homepage hero now leads with the new Areca leaf plate stack photo. Bowl photos are reserved for Sal leaf products. Keep one file for each distinct photo rather than adding duplicate copies. The test suite checks image-file hashes and ensures product, gallery, and hero image lists contain no repeated paths.

The home gallery lists only the distinct supplied images selected for it. Additional gallery subjects such as packed orders or local delivery should be added only when matching photos are supplied. Scroll-reveal and page fade animations are intentionally not used, so content is not hidden while waiting for an observer or animation.
