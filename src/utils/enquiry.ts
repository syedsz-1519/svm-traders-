/**
 * Pure helper logic for SVM Traders bulk inquiries and product catalog.
 */

export interface EnquiryData {
  name: string;
  phone: string;
  product: string;
  quantity: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const PRODUCTS = [
  {
    id: 'areca-leaf-plates',
    name: 'Areca Leaf Plates',
    subtitle: 'Classic Handcrafted Areca Palm Plates',
    sizeSpec: 'Standard Dimensions',
    bestFor: 'Events, Catering & Daily Use',
    image: '/images/areca-leaf-plates.webp',
    imageAlt: 'Stack of natural areca leaf plates on a table',
    description: 'Natural hand-stitched leaf plates made by SVM Traders in Hyderabad. A plastic-free choice for events, catering, temples and daily use.',
  },
  {
    id: '14-inch-sitting-plate',
    name: '14-Inch Sitting Plate',
    subtitle: 'For sit-down meals & traditional banquets',
    sizeSpec: '14-Inch (35.5 cm) Diameter',
    bestFor: 'Sit-down meals, wedding banquets & temple feasts',
    image: '/images/sitting-plate-14in.webp',
    imageAlt: '14-inch natural leaf plate displayed upright',
    description: 'Generous 14-inch dining plate designed for traditional sit-down meals, allowing comfortable serving of multiple curries and rice.',
  },
  {
    id: '12-inch-buffet-plate',
    name: '12-Inch Buffet Plate',
    subtitle: 'For catering buffets & large dinners',
    sizeSpec: '12-Inch (30.5 cm) Diameter',
    bestFor: 'Buffets, caterers, parties & functions',
    image: '/images/buffet-plate-12in.webp',
    imageAlt: 'Natural leaf plate set for a buffet meal',
    description: 'Robust 12-inch buffet plate with elevated rims, ideal for standing buffet spreads with hot gravies and dry items.',
  },
  {
    id: '8-inch-tiffin-plate',
    name: '8-Inch Tiffin Plate',
    subtitle: 'For snacks, breakfast, tiffin & desserts',
    sizeSpec: '8-Inch (20.3 cm) Diameter',
    bestFor: 'Tiffin, breakfast, snacks, sweets & appetizers',
    image: '/images/tiffin-plate-8in.webp',
    imageAlt: 'Natural leaf plate for tiffin and snacks',
    description: 'Handy 8-inch plate tailored for morning tiffin, idli-dosa, snacks, desserts, or corporate high-tea gatherings.',
  },
  {
    id: '4-5-inch-bowl',
    name: '4.5-Inch Bowl',
    subtitle: 'For curries, sambar, chutneys & desserts',
    sizeSpec: '4.5-Inch (11.4 cm) Diameter',
    bestFor: 'Curries, gravies, prasadam, payasam & condiments',
    image: '/images/leaf-bowl-4-5in.webp',
    imageAlt: 'Natural leaf bowl filled with food',
    description: 'Deep, leak-proof 4.5-inch natural leaf bowl designed specifically for liquid gravies, sambar, rasam, chutneys, and desserts.',
  },
] as const;

export const TRUST_BADGES = [
  '100% Natural',
  'Biodegradable',
  'Chemical Free',
  'Safe for Environment',
] as const;

export const CONTACT_INFO = {
  business: 'SVM Traders',
  tagline: 'Eco Friendly Leaf Plates',
  owner: 'S. Pradeep Reddy',
  primaryPhone: '9985812721',
  secondaryPhone: '8186801206',
  city: 'Hyderabad',
  state: 'Telangana',
  location: 'Hyderabad, Telangana',
  priceNote: 'Price: On Request',
  moqNote: 'Minimum order: On Request',
} as const;

export function validateEnquiryForm(data: EnquiryData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  const nationalPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12
    ? cleanPhone.slice(2)
    : cleanPhone;
  if (!/^\d{10}$/.test(nationalPhone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (!data.product || data.product.trim().length === 0) {
    errors.product = 'Please select a product from our range';
  }

  if (!data.quantity || data.quantity.trim().length === 0) {
    errors.quantity = 'Please specify required quantity (e.g. 500 plates)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createWhatsAppEnquiryUrl(data: EnquiryData): string {
  const lines = [
    'Hello SVM Traders,',
    '',
    'I would like to request a bulk quote:',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Product: ${data.product.trim()}`,
    `Quantity: ${data.quantity.trim()}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    lines.push(`Additional details: ${data.message.trim()}`);
  }

  lines.push('', 'Please share pricing and availability. Thank you.');

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/91${CONTACT_INFO.primaryPhone}?text=${text}`;
}

export function createDirectWhatsAppChatUrl(customText?: string): string {
  const defaultText = 'Hello SVM Traders, I would like to enquire about your leaf plate products and bulk pricing.';
  return `https://wa.me/91${CONTACT_INFO.primaryPhone}?text=${encodeURIComponent(customText || defaultText)}`;
}

export function createMapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CONTACT_INFO.business}, ${CONTACT_INFO.location}`)}`;
}
