# Implementation Plan: Direct Hyderabad Wholesale Supply Redesign & Hyper-Local SEO Overhaul

Modernize the **Direct Hyderabad Wholesale Supply** section on the homepage into a high-contrast, high-conversion bento grid layout and upgrade the site's SEO metadata and JSON-LD schema to dominate hyper-local search intent for eco-friendly leaf plate wholesale in Hyderabad.

---

## 1. User Review & Clarifications Received
- **Target Audience & Hyper-Local Scope**: Wedding caterers, banquet halls, temple trusts (Annadanam), restaurants, and wholesale distributors across Madhapur, Gachibowli, Kukatpally, Secunderabad, Banjara Hills, and greater Telangana.
- **Section Layout Choice**: A high-contrast grid highlighting bulk ordering tiers, logistical guarantees (breakage-free transit, steam-sterilized food grade), and distinct action cards for direct phone and quote requests.
- **Build & Deployment Requirement**: Strict Vercel build compatibility (`npm run build`), clean lowercase asset paths, and zero peer-dependency conflicts.

---

## 2. Proposed Architectural & UI Changes

### A. Direct Hyderabad Wholesale Supply Section (`src/pages/HomePage.tsx`)
Transform `#contact-cta` from a plain container into a **high-contrast B2B wholesale command grid**:
1. **Marquee Header**:
   - Eyebrow: `DIRECT FACTORY WHOLESALE • GREATER HYDERABAD SUPPLY`
   - Headline: `Bulk Eco-Friendly Leaf Plates for Caterers & Banquets`
   - Subtitle: Transparent pricing, guaranteed same-day dispatches, and zero-breakage packaging direct from Hyderabad.
2. **Bento Grid Architecture (3 High-Contrast Modules)**:
   - **Module 1: Wholesale Volume Tiers & Benefits (Large Card)**
     - Tier breakdowns:
       - *Event & Party Pack (100–500 pcs)*: Fast dispatch, mixed sizes.
       - *Caterer & Banquet Tier (1,000–5,000 pcs)*: Custom cartons, wholesale rates.
       - *Distributor & Mega Event (10,000+ pcs)*: Factory-direct bulk pricing, scheduled consignments.
     - Value proposition chips: *Steam-Sterilized Food Grade*, *100% Home Compostable*, *Zero Leakage with Hot Sambar/Ghee*.
   - **Module 2: Hyper-Local Delivery Coverage & Dispatch Hub (Medium Card)**
     - Dedicated delivery map badges: *Madhapur, Gachibowli, Kukatpally, Secunderabad, Banjara Hills, Shamshabad, Uppal, Kompally*.
     - Transit commitment: *Same-Day / Next-Day doorstep delivery* or *Immediate Warehouse Self-Pickup*.
   - **Module 3: Direct Helpline & Action Hub (Interactive Cards)**
     - **Primary Owner Helpline**: `+91 9985812721` (S. Pradeep Reddy) — Instant negotiation & sample dispatch.
     - **Logistics & Dispatch Desk**: `+91 8186801206` — Vehicle loading & timing coordination.
     - **Primary Action Button**: "Request Wholesale Rate Card" (opens the enquiry modal pre-filled for bulk).
     - **WhatsApp Quick Chat**: Direct link with a customized wholesale inquiry message.

---

### B. Hyper-Local SEO & Structured Data Overhaul (`index.html`)
Upgrade HTML metadata and JSON-LD to hyper-target high-intent B2B search queries:
1. **Title & Meta Tags**:
   - Title: `SVM Traders | Eco-Friendly Leaf Plates Wholesale Hyderabad | Bulk Areca Tableware`
   - Meta Description: Hyper-local copy mentioning Hyderabad wedding caterers, temples, and bulk delivery zones.
   - Meta Keywords: `eco-friendly leaf plates wholesale Hyderabad, areca leaf plates manufacturer Hyderabad, bulk buffet plates Madhapur, catering leaf bowls Secunderabad, biodegradable plates Gachibowli, svm traders leaf plates`.
2. **Schema.org Rich Data (`WholesaleStore` + `LocalBusiness`)**:
   - Complete `geo` coordinates and `PostalAddress` for Hyderabad (`500001`).
   - Detailed `areaServed` list covering all key Hyderabad and Telangana hubs.
   - Comprehensive `hasOfferCatalog` including all 4 standard sizes:
     - 14-Inch Sitting Plate (banquet feasts)
     - 12-Inch Buffet Plate (caterers & weddings)
     - 8-Inch Tiffin Plate (breakfast & high tea)
     - 4.5-Inch Curry Bowl (leak-proof gravies & prasadam)
   - Real-world `priceSpecification`, `availability: "https://schema.org/InStock"`, `businessHours`, and `paymentAccepted`.

---

### C. Static Asset Organization & Fallbacks
1. Ensure image paths in `/src/assets/images` or `/public/images` have explicit `loading="lazy"`, `width`, `height`, and accessible `alt` text.
2. Confirm zero git conflict markers and clean peer resolution.

---

## 3. Verification & Testing Plan
1. **Compilation & Build Check**:
   - Run `lint_applet` (`tsc --noEmit`) to ensure zero TypeScript errors.
   - Run `compile_applet` (`npm run build`) to ensure Vercel-ready clean production output.
2. **Responsive Layout Inspection**:
   - Test layout across mobile viewport (360px), tablet (768px), and desktop (1024px–1440px).
   - Ensure the high-contrast wholesale grid remains legible and buttons have clear tap targets ($\ge 44\text{px}$).
3. **SEO & Structured Data Verification**:
   - Inspect rendered `<script type="application/ld+json">` to ensure syntax validity without dangling commas or missing keys.
