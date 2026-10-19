import React, { useState } from 'react';
import { CheckCircle2, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS, SITE_CONTENT } from '../data/siteContent';
import { createDirectWhatsAppChatUrl, EnquiryData, submitEnquiry, validateEnquiryForm } from '../utils/enquiry';
import { TrustBadgesRow } from '../components/TrustBadgesRow';

const initialFormData: EnquiryData = {
  name: '',
  phone: '',
  product: PRODUCTS[0].name,
  quantity: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionState, setSubmissionState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
    setSubmissionState('idle');
    setSubmissionMessage('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionState('idle');
    setSubmissionMessage('');
    try {
      await submitEnquiry(formData);
      setSubmissionState('success');
      setSubmissionMessage('Thank you. Your enquiry has been sent successfully.');
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      setSubmissionState('error');
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please call or WhatsApp us instead.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'min-h-12 w-full rounded-xl border border-[#D5E6D3] bg-white px-4 text-sm text-[#1F2A22] shadow-sm transition-colors focus:border-[#1F7A3A] focus:outline-none focus:ring-2 focus:ring-[#1F7A3A]/25 dark:border-[#265334] dark:bg-[#163321] dark:text-white';

  return (
    <div className="relative w-full">
      <div className="leaf-watermark-tr" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-[#BDE0C6] bg-[#DCEFE1] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4D26] dark:border-[#225032] dark:bg-[#183a24] dark:text-[#a2f0b5]">
            SVM Traders · {CONTACT_INFO.location}
          </span>
          <h1 className="font-serif-brand text-4xl font-bold tracking-tight text-[#0F4D26] dark:text-[#d7f9dc] sm:text-5xl">
            {SITE_CONTENT.contact.title}
          </h1>
          <p className="text-base text-[#1F2A22]/80 dark:text-[#c4d6c8] sm:text-lg">
            {SITE_CONTENT.contact.subtitle}
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <section className="space-y-6" aria-labelledby="contact-details-title">
            <h2 id="contact-details-title" className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              Contact details
            </h2>

            <div className="rounded-2xl border border-[#D5E6D3] bg-white p-6 shadow-sm dark:border-[#224e2f] dark:bg-[#13271A]">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF5EC] text-[#1F7A3A] dark:bg-[#1a3824] dark:text-[#52d274]">
                  <User aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-[#0F4D26] dark:text-white">{CONTACT_INFO.owner}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-300">Proprietor · {CONTACT_INFO.business}</p>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[CONTACT_INFO.primaryPhone, CONTACT_INFO.secondaryPhone].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-[#D5E6D3] bg-white px-4 font-semibold text-[#0F4D26] shadow-sm transition-colors hover:border-[#1F7A3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:border-[#224e2f] dark:bg-[#13271A] dark:text-white"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 text-[#1F7A3A] dark:text-[#52d274]" />
                  <span>+91 {phone.slice(0, 5)} {phone.slice(5)}</span>
                </a>
              ))}
            </div>

            <a
              href={createDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-bold text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4D26] sm:w-auto"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              WhatsApp
            </a>

            <div className="rounded-2xl border border-[#D5E6D3] bg-[#EBF5EC] p-5 dark:border-[#224e2f] dark:bg-[#13291b]">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#1F7A3A] dark:text-[#52d274]" />
                <div>
                  <h3 className="font-semibold text-[#0F4D26] dark:text-[#d7f9dc]">Location</h3>
                  <p className="text-sm text-[#1F2A22]/80 dark:text-[#c4d6c8]">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#D5E6D3] bg-white p-6 shadow-sm dark:border-[#224e2f] dark:bg-[#13271A] sm:p-8" aria-labelledby="enquiry-form-title">
            <h2 id="enquiry-form-title" className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              Send an enquiry
            </h2>
            <p className="mb-6 mt-2 text-sm text-stone-600 dark:text-stone-300">
              {SITE_CONTENT.contact.replyNote}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField label="Name" name="name" error={errors.name}>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
              </FormField>

              <FormField label="Phone" name="phone" error={errors.phone}>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                />
              </FormField>

              <FormField label="Product" name="product" error={errors.product}>
                <select
                  id="contact-product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.product)}
                  aria-describedby={errors.product ? 'contact-product-error' : undefined}
                >
                  {PRODUCTS.map((product) => (
                    <option key={product.id} value={product.name}>{product.name}</option>
                  ))}
                </select>
              </FormField>

              <FormField label="Quantity" name="quantity" error={errors.quantity}>
                <input
                  id="contact-quantity"
                  name="quantity"
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.quantity)}
                  aria-describedby={errors.quantity ? 'contact-quantity-error' : undefined}
                />
              </FormField>

              <FormField label="Message (optional)" name="message">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass} py-3`}
                />
              </FormField>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1F7A3A] px-6 font-bold text-white shadow-sm transition-colors hover:bg-[#17632E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] disabled:cursor-wait disabled:opacity-70"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>

            {submissionMessage && (
              <p
                className={`mt-4 rounded-xl p-3 text-sm ${
                  submissionState === 'success'
                    ? 'bg-[#DCEFE1] text-[#0F4D26] dark:bg-[#183a24] dark:text-[#a2f0b5]'
                    : 'bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200'
                }`}
                role={submissionState === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {submissionState === 'success' && <CheckCircle2 aria-hidden="true" className="mr-1 inline h-4 w-4" />}
                {submissionMessage}
              </p>
            )}
          </section>
        </div>

        <div className="mt-12 border-t border-[#D5E6D3] pt-8 dark:border-[#224e2f]">
          <TrustBadgesRow />
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, error, children }) => (
  <div>
    <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-semibold text-[#1F2A22] dark:text-stone-200">
      {label}{name !== 'message' && ' *'}
    </label>
    {children}
    {error && <p id={`contact-${name}-error`} className="mt-1 text-xs font-medium text-red-700 dark:text-red-300">{error}</p>}
  </div>
);
