/**
 * Pure helper logic for SVM Traders bulk inquiries and product catalog.
 */

import { CONTACT_INFO, PRODUCTS, TRUST_BADGES } from '../data/siteContent';

export { CONTACT_INFO, PRODUCTS, TRUST_BADGES } from '../data/siteContent';

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
  const defaultText = 'Hello SVM Traders, I am interested in your eco friendly leaf plates in Hyderabad.';
  return `https://wa.me/91${CONTACT_INFO.primaryPhone}?text=${encodeURIComponent(customText || defaultText)}`;
}

export async function submitEnquiry(data: EnquiryData): Promise<void> {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
  if (!formId || formId === 'your_form_id_here') {
    throw new Error('The enquiry form is not configured yet. Please call or WhatsApp us instead.');
  }

  const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name.trim(),
      phone: data.phone.trim(),
      product: data.product.trim(),
      quantity: data.quantity.trim(),
      message: data.message?.trim() || '',
      _subject: `Website enquiry: ${data.product.trim()}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`We could not send your enquiry (error ${response.status}). Please try again or call us.`);
  }
}
