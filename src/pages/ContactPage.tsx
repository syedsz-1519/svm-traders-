import React, { useState } from 'react';
import { Phone, MapPin, User, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO, createWhatsAppEnquiryUrl, createDirectWhatsAppChatUrl, createMapsSearchUrl, validateEnquiryForm, EnquiryData } from '../utils/enquiry';
import { TrustBadgesRow } from '../components/TrustBadgesRow';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    product: PRODUCTS[0].name,
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const sendToWhatsApp = () => {
    const result = validateEnquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    const whatsappWindow = window.open(createWhatsAppEnquiryUrl(formData), '_blank', 'noopener,noreferrer');
    if (!whatsappWindow) {
      setErrors({ form: 'WhatsApp could not be opened. Allow pop-ups for this site and try again.' });
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  const handleSendViaWhatsApp = () => {
    sendToWhatsApp();
  };

  return (
    <div className="w-full relative">
      <div className="leaf-watermark-tr" />
      <div className="leaf-watermark-bl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEFE1] dark:bg-[#183a24] text-[#0F4D26] dark:text-[#a2f0b5] text-xs font-bold uppercase tracking-wider border border-[#BDE0C6] dark:border-[#225032]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F7A3A] dark:text-[#52d274]" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] tracking-tight">
            Contact SVM Traders
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F7A3A] dark:text-[#88d982]">
            Bulk Orders &amp; Enquiries
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Left Column: Contact Cards + WhatsApp CTA + Map */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              Contact Information
            </h3>

            {/* 2x2 Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1: Owner */}
              <div className="flex items-center gap-3 bg-[#EBF5EC] dark:bg-[#152e1e] border border-[#D5E6D3] dark:border-[#224e2f] rounded-xl px-4 py-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#1F7A3A] text-white flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                    Proprietor
                  </span>
                  <span className="text-sm font-bold text-[#0F4D26] dark:text-white">
                    Owner: {CONTACT_INFO.owner}
                  </span>
                </div>
              </div>

              {/* Card 2: Phone Numbers */}
              <div className="flex items-center gap-3 bg-[#EBF5EC] dark:bg-[#152e1e] border border-[#D5E6D3] dark:border-[#224e2f] rounded-xl px-4 py-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#1F7A3A] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                    Tap to Call
                  </span>
                  <div className="flex flex-col text-sm font-bold text-[#0F4D26] dark:text-white">
                    <a href={`tel:${CONTACT_INFO.primaryPhone}`} className="hover:underline">
                      {CONTACT_INFO.primaryPhone}
                    </a>
                    <a href={`tel:${CONTACT_INFO.secondaryPhone}`} className="hover:underline">
                      {CONTACT_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="flex items-center gap-3 bg-[#EBF5EC] dark:bg-[#152e1e] border border-[#D5E6D3] dark:border-[#224e2f] rounded-xl px-4 py-3.5 shadow-xs sm:col-span-2">
                <div className="w-8 h-8 rounded-full bg-[#1F7A3A] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                    Supplier Location
                  </span>
                  <span className="text-sm font-bold text-[#0F4D26] dark:text-white">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Large Green WhatsApp Button */}
            <a
              href={createDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-13 px-8 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base inline-flex items-center justify-center gap-3 shadow-md transition-all hover:scale-[1.01] active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp (9985812721)</span>
            </a>

            {/* Use a broad place search until the verified street address is supplied. */}
            <div className="pt-2">
              <h4 className="font-serif-brand text-lg font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-3">
                Find us in Hyderabad
              </h4>
              <a
                href={createMapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-40 w-full bg-[#E1EDE0] dark:bg-[#132c1c] border border-[#BDD7B7] dark:border-[#204a2d] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 shadow-inner hover:border-[#1F7A3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A]"
              >
                <span className="w-11 h-11 rounded-full bg-[#1F7A3A] text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6" />
                </span>
                <span className="font-bold text-[#0F4D26] dark:text-white">SVM Traders · Hyderabad, Telangana</span>
                <span className="text-sm text-stone-600 dark:text-stone-300">Open a Google Maps search</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bulk Enquiry Form Card */}
          <div className="lg:col-span-6 bg-white dark:bg-[#13271A] rounded-2xl p-6 sm:p-8 border border-[#D5E6D3] dark:border-[#224e2f] shadow-sm">
            <h3 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc] mb-2">
              Bulk Enquiry Form
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-6">
              Enter details below for catering, events, temples and wholesale orders.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && (
                  <p className="text-sm font-medium text-red-700 dark:text-red-300" role="alert">
                    {errors.form}
                  </p>
                )}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-200 mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className={`w-full min-h-[44px] px-4 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-200 mb-1.5"
                  >
                    Phone *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number (e.g. 9985812721)"
                    className={`w-full min-h-[44px] px-4 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-product"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-200 mb-1.5"
                  >
                    Product *
                  </label>
                  <select
                    id="contact-product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-4 rounded-xl border border-[#D5E6D3] dark:border-[#265334] bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A] transition-all"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name} className="dark:bg-[#13271A]">
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-quantity"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-200 mb-1.5"
                  >
                    Quantity *
                  </label>
                  <input
                    id="contact-quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 500 plates / 1000 plates"
                    className={`w-full min-h-[44px] px-4 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.quantity
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                    }`}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-xs mt-1 font-semibold">{errors.quantity}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-200 mb-1.5"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Delivery date, specific requirements, catering details..."
                    className="w-full p-3.5 rounded-xl border border-[#D5E6D3] dark:border-[#265334] bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A] transition-all"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full h-[52px] rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Continue to WhatsApp</span>
                  </button>

                  <p className="text-xs text-center text-stone-600 dark:text-stone-300 font-medium">
                    WhatsApp will open with your message ready for you to review and send.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#DCEFE1] dark:bg-[#1b432a] text-[#1F7A3A] dark:text-[#a2f0b5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
                  WhatsApp message is ready
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 max-w-sm mx-auto">
                  Review the message opened in WhatsApp and tap Send to share your enquiry for{' '}
                  <span className="font-bold">{formData.product}</span>. It has not been sent yet.
                </p>

                <div className="pt-4 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Open WhatsApp again</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        product: PRODUCTS[0].name,
                        quantity: '',
                        message: '',
                      });
                    }}
                    className="w-full h-11 rounded-xl border border-[#D5E6D3] dark:border-[#224e2f] text-stone-700 dark:text-stone-300 font-semibold text-sm hover:bg-[#F6FAEA] dark:hover:bg-[#183622] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-[#D5E6D3] dark:border-[#224e2f]">
          <TrustBadgesRow />
        </div>
      </div>
    </div>
  );
};
