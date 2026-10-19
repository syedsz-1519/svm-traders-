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
  } else if (data.name.trim().length > 100) {
    errors.name = 'Please keep your name under 100 characters';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  const nationalPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12
    ? cleanPhone.slice(2)
    : cleanPhone;
  if (!/^\d{10}$/.test(nationalPhone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (!PRODUCTS.some((product) => product.name === data.product)) {
    errors.product = 'Please select a product from our range';
  }

  if (!data.quantity || data.quantity.trim().length === 0) {
    errors.quantity = 'Please specify required quantity (e.g. 500 plates)';
  } else if (data.quantity.trim().length > 100) {
    errors.quantity = 'Please keep the quantity under 100 characters';
  }

  if (data.message && data.message.trim().length > 1000) {
    errors.message = 'Please keep your message under 1,000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createDirectWhatsAppChatUrl(customText?: string): string {
  const defaultText = 'Hello SVM Traders, I am interested in your eco friendly leaf plates in Hyderabad.';
  return `https://wa.me/91${CONTACT_INFO.primaryPhone}?text=${encodeURIComponent(customText || defaultText)}`;
}

export function createEnquiryWhatsAppUrl(data: EnquiryData): string {
  const message = [
    'Hello SVM Traders, I would like to enquire about your products.',
    '',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Product: ${data.product.trim()}`,
    `Quantity: ${data.quantity.trim()}`,
    ...(data.message?.trim() ? [`Message: ${data.message.trim()}`] : []),
  ].join('\n');

  return createDirectWhatsAppChatUrl(message);
}
