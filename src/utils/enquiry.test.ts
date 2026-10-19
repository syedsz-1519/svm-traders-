import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONTENT } from '../data/siteContent.ts';
import {
  validateEnquiryForm,
  createDirectWhatsAppChatUrl,
  createEnquiryWhatsAppUrl,
  PRODUCTS,
  TRUST_BADGES,
  CONTACT_INFO,
} from './enquiry.ts';

test('validates valid enquiry data correctly', () => {
  const result = validateEnquiryForm({
    name: 'Suresh Kumar',
    phone: '9876543210',
    product: '12-Inch Buffet Plate',
    quantity: '1000 plates',
    message: 'Need for wedding catering next month',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing required fields in enquiry form', () => {
  const result = validateEnquiryForm({
    name: '',
    phone: '123',
    product: '',
    quantity: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.product);
  assert.ok(result.errors.quantity);
});

test('creates default direct WhatsApp chat URL', () => {
  const url = createDirectWhatsAppChatUrl();
  assert.equal(
    url,
    'https://wa.me/919985812721?text=Hello%20SVM%20Traders%2C%20I%20am%20interested%20in%20your%20eco%20friendly%20leaf%20plates%20in%20Hyderabad.',
  );
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('SVM Traders'));
});

test('creates a WhatsApp enquiry URL with the submitted form details', () => {
  const url = new URL(createEnquiryWhatsAppUrl({
    name: 'Suresh Kumar',
    phone: '+91 98765 43210',
    product: '12-Inch Buffet Plate',
    quantity: '1,000 plates',
    message: 'Please call after 5pm & share delivery details.',
  }));

  assert.equal(url.origin + url.pathname, 'https://wa.me/919985812721');
  assert.equal(
    url.searchParams.get('text'),
    [
      'Hello SVM Traders, I would like to enquire about your products.',
      '',
      'Name: Suresh Kumar',
      'Phone: +91 98765 43210',
      'Product: 12-Inch Buffet Plate',
      'Quantity: 1,000 plates',
      'Message: Please call after 5pm & share delivery details.',
    ].join('\n'),
  );
});

test('has the exact product range and trust strip provided by SVM Traders', () => {
  assert.equal(PRODUCTS.length, 5);
  assert.equal(PRODUCTS[0].name, 'Areca Leaf Plates');
  assert.equal(PRODUCTS[1].name, '14-Inch Sitting Plate');
  assert.equal(PRODUCTS[2].name, '12-Inch Buffet Plate');
  assert.equal(PRODUCTS[3].name, '8-Inch Tiffin Plate');
  assert.equal(PRODUCTS[4].name, '4.5-Inch Bowl');
  assert.equal(PRODUCTS[0].images[0].src, '/images/areca-leaf-plate-single.jpeg');
  assert.doesNotMatch(PRODUCTS[0].images.map((image) => image.alt).join(' '), /bowl/i);
  assert.deepEqual(PRODUCTS.map((product) => product.images.length), [3, 3, 3, 3, 2]);
  assert.deepEqual(
    PRODUCTS.map((product) => product.images.map((image) => image.src)),
    [
      [
        '/images/areca-leaf-plate-single.jpeg',
        '/images/areca-leaf-plates.webp',
        '/images/areca-leaf-plates-stack.png',
      ],
      [
        '/images/sal-sitting-plate-single.png',
        '/images/sal-sitting-plate-with-food.png',
        '/images/sal-sitting-plates-stack.png',
      ],
      [
        '/images/sal-buffet-plates-stack.png',
        '/images/sal-buffet-plate-with-food.png',
        '/images/sal-buffet-plate-served.png',
      ],
      [
        '/images/sal-tiffin-plate-single.jpeg',
        '/images/sal-tiffin-plate-with-food.jpeg',
        '/images/sal-tiffin-plates-stack.png',
      ],
      ['/images/sal-bowl-single.png', '/images/leaf-bowl-4-5in.webp'],
    ],
    'each product carousel should show matching photos in single, served, and stack order where available',
  );
  assert.deepEqual(
    PRODUCTS.map((product) => product.categoryLabel),
    [
      'Areca leaf',
      'Sal leaf',
      'Sal leaf',
      'Sal leaf',
      'Sal leaf',
    ],
  );
  assert.match(SITE_CONTENT.products.subtitle, /Areca leaf plates and Sal leaf plates and bowls/);
  assert.equal(SITE_CONTENT.faq[0].answer, 'Areca leaf products are plates. Our green plates and bowls are Sal leaf products.');

  assert.deepEqual([...TRUST_BADGES], [
    '100% Natural',
    'Chemical Free',
    'Biodegradable',
    'Plastic-Free',
  ]);

  assert.equal(CONTACT_INFO.primaryPhone, '9985812721');
  assert.equal(CONTACT_INFO.secondaryPhone, '8186801206');
  assert.equal(CONTACT_INFO.owner, 'S. Pradeep Reddy');
  assert.equal(CONTACT_INFO.location, 'Hyderabad, Telangana');
});

test('keeps product and gallery image references unique and all public image files distinct', () => {
  const imageDirectory = new URL('../../public/images/', import.meta.url);
  const logoImage = new URL('../../public/images/svm-traders-logo.webp', import.meta.url);
  const productImages = PRODUCTS.flatMap((product) => product.images.map((image) => image.src));
  const galleryImages = SITE_CONTENT.galleryImages.map((image) => image.src);
  const heroImages = SITE_CONTENT.hero.images.map((image) => image.src);
  const imageFiles = readdirSync(imageDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
  const watermarkedImages = [
    'areca-plates-stack.webp',
    'bunch of bowls.png',
    'sal-bowl-single.webp',
    'sal-bowls-stack.webp',
    'buffet-plate-12in.webp',
    'sal-buffet-plate-served.webp',
    'sal-buffet-plate-single.webp',
    'sal-leaf-plates-stack.webp',
    'sal-sitting-plate-meal.webp',
    'sal-sitting-plate-single.webp',
    'sal-tiffin-plate-single.webp',
  ];
  const fileHashes = imageFiles.map((file) =>
    createHash('sha256')
      .update(readFileSync(join(fileURLToPath(imageDirectory), file)))
      .digest('hex'),
  );

  assert.equal(new Set(productImages).size, productImages.length, 'product images must not repeat');
  assert.equal(new Set(galleryImages).size, galleryImages.length, 'gallery images must not repeat');
  assert.equal(new Set(heroImages).size, heroImages.length, 'hero collage images must not repeat');
  assert.deepEqual(
    [...galleryImages].sort(),
    [...productImages].sort(),
    'the home gallery must include each product category photo exactly once',
  );
  assert.equal(new Set(fileHashes).size, fileHashes.length, 'public image files must not contain duplicates');
  assert.equal(existsSync(logoImage), true, 'SVM Traders brand logo must exist in public/images');
  assert.ok(
    [...productImages, ...galleryImages, ...heroImages].every((image) => imageFiles.includes(image.split('/').at(-1) ?? '')),
    'product and gallery references must exist in public/images',
  );
  assert.deepEqual(heroImages, [
    '/images/areca-leaf-plates-stack.png',
    '/images/sal-bowl-single.png',
    '/images/sal-sitting-plate-single.png',
  ]);
  assert.ok(
    [...productImages, ...galleryImages, ...heroImages].every((image) =>
      !watermarkedImages.some((file) => image.endsWith(file)),
    ),
    'watermarked product photos must not be referenced by the site',
  );
  assert.ok(
    [...watermarkedImages, 'bunch of bowls.png'].every((file) => !imageFiles.includes(file)),
    'watermarked product photos must be deleted from public/images',
  );
});

test('includes the configured campaign video asset', () => {
  const campaignVideo = new URL('../../public/videos/svm-traders-campaign.mp4', import.meta.url);
  assert.equal(SITE_CONTENT.campaign.videoSrc, '/videos/svm-traders-campaign.mp4');
  assert.equal(existsSync(campaignVideo), true);
});
