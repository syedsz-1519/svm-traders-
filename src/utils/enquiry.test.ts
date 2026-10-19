import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEnquiryForm,
  createWhatsAppEnquiryUrl,
  createDirectWhatsAppChatUrl,
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

test('creates properly formatted WhatsApp enquiry URL with product details', () => {
  const url = createWhatsAppEnquiryUrl({
    name: 'Anand Rao',
    phone: '9123456789',
    product: '14-Inch Sitting Plate',
    quantity: '500 plates',
    message: 'For temple festival',
  });

  assert.ok(url.startsWith('https://wa.me/919985812721?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Anand Rao'));
  assert.ok(decoded.includes('14-Inch Sitting Plate'));
  assert.ok(decoded.includes('500 plates'));
  assert.ok(decoded.includes('For temple festival'));
});

test('creates default direct WhatsApp chat URL', () => {
  const url = createDirectWhatsAppChatUrl();
  assert.ok(url.includes('wa.me/919985812721'));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('SVM Traders'));
});

test('has the exact 5 products and 4 trust badges specified by SVM Traders', () => {
  assert.equal(PRODUCTS.length, 5);
  assert.equal(PRODUCTS[0].name, 'Areca Leaf Plates');
  assert.equal(PRODUCTS[1].name, '14-Inch Sitting Plate');
  assert.equal(PRODUCTS[2].name, '12-Inch Buffet Plate');
  assert.equal(PRODUCTS[3].name, '8-Inch Tiffin Plate');
  assert.equal(PRODUCTS[4].name, '4.5-Inch Bowl');

  assert.deepEqual([...TRUST_BADGES], [
    '100% Natural',
    'Biodegradable',
    'Chemical Free',
    'Safe for Environment',
  ]);

  assert.equal(CONTACT_INFO.primaryPhone, '9985812721');
  assert.equal(CONTACT_INFO.secondaryPhone, '8186801206');
  assert.equal(CONTACT_INFO.owner, 'S. Pradeep Reddy');
  assert.equal(CONTACT_INFO.location, 'Hyderabad, Telangana');
});
