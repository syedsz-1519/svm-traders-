import test from 'node:test';
import assert from 'node:assert/strict';
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
