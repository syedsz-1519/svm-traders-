/**
 * Sitemap generator utility for SVM Traders.
 * Enhances local business SEO for 'eco-friendly leaf plates in Hyderabad'.
 */

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  title: string;
  keywords: string[];
}

export const BASE_SITE_URL = 'https://svmtraders-leafplates.com';

export const SITEMAP_ENTRIES: SitemapUrlEntry[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
    title: 'SVM Traders | Eco-Friendly Leaf Plates in Hyderabad',
    keywords: [
      'eco friendly leaf plates in hyderabad',
      'areca leaf plates hyderabad',
      'biodegradable disposable plates hyderabad',
      'natural leaf plates supplier hyderabad',
      'svm traders hyderabad',
    ],
  },
  {
    loc: '/#products',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9,
    title: 'Areca Leaf Plates Range (14in, 12in, 8in, 4.5in Bowl) - SVM Traders',
    keywords: [
      '14 inch sitting plate hyderabad',
      '12 inch buffet plate hyderabad',
      '8 inch tiffin plate',
      '4.5 inch leaf bowl',
      'bulk leaf tableware hyderabad',
    ],
  },
  {
    loc: '/#about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    title: 'About SVM Traders | S. Pradeep Reddy - Hyderabad Manufacturer',
    keywords: [
      's pradeep reddy leaf plates',
      'svm traders owner',
      'natural plate makers hyderabad',
      'chemical free plate wholesale',
    ],
  },
  {
    loc: '/#faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    title: 'FAQs | Bulk Orders, Material & Shipping in Hyderabad - SVM Traders',
    keywords: [
      'leaf plates bulk order faq',
      'hyderabad leaf plates delivery',
      'areca palm leaves food safety',
    ],
  },
  {
    loc: '/#contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    title: 'Contact SVM Traders | Wholesale Inquiries & Direct Delivery Hyderabad',
    keywords: [
      'leaf plates dealer phone number hyderabad',
      'order areca plates hyderabad',
      'svm traders contact',
    ],
  },
];

/**
 * Generates standards-compliant XML sitemap string.
 */
export function generateSitemapXml(baseUrl: string = BASE_SITE_URL): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const urlBlocks = SITEMAP_ENTRIES.map(
    (entry) => `  <url>
    <loc>${cleanBase}${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlBlocks}
</urlset>`;
}

/**
 * Generates robots.txt string pointing to sitemap.
 */
export function generateRobotsTxt(baseUrl: string = BASE_SITE_URL): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `User-agent: *
Allow: /
Sitemap: ${cleanBase}/sitemap.xml
`;
}
