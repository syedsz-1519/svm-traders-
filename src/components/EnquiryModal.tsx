import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Send } from 'lucide-react';
import { PRODUCTS, validateEnquiryForm, createWhatsAppEnquiryUrl, EnquiryData } from '../utils/enquiry';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    product: initialProduct || PRODUCTS[0].name,
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

  const handleWhatsAppSend = () => {
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
    handleWhatsAppSend();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-[#13271A] rounded-2xl border border-[#D5E6D3] dark:border-[#224e2f] shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-[#F6FAEA] dark:hover:bg-[#183622] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1F7A3A] dark:text-[#a2f0b5] bg-[#DCEFE1] dark:bg-[#1a3d27] px-3 py-1 rounded-full mb-2">
                Fast Quote • Direct Supplier
              </span>
              <h3
                id="enquiry-modal-title"
                className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]"
              >
                Request Product Quote
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                Tell us your required plates and quantity for bulk pricing from SVM Traders, Hyderabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.form && (
                <p className="text-sm font-medium text-red-700 dark:text-red-300" role="alert">
                  {errors.form}
                </p>
              )}
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-xs font-bold text-stone-700 dark:text-stone-200 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full h-11 px-3.5 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-xs font-bold text-stone-700 dark:text-stone-200 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9985812721"
                  className={`w-full h-11 px-3.5 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="modal-product"
                  className="block text-xs font-bold text-stone-700 dark:text-stone-200 mb-1"
                >
                  Product *
                </label>
                <select
                  id="modal-product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#D5E6D3] dark:border-[#265334] bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A] transition-all"
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
                  htmlFor="modal-quantity"
                  className="block text-xs font-bold text-stone-700 dark:text-stone-200 mb-1"
                >
                  Required Quantity *
                </label>
                <input
                  id="modal-quantity"
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500 plates / 1000 plates"
                  className={`w-full h-11 px-3.5 rounded-xl border bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.quantity
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-[#D5E6D3] dark:border-[#265334] focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A]'
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.quantity}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-xs font-bold text-stone-700 dark:text-stone-200 mb-1"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Event date, delivery notes, or special requirements..."
                  className="w-full p-3 rounded-xl border border-[#D5E6D3] dark:border-[#265334] bg-white dark:bg-[#163321] text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A3A]/30 focus:border-[#1F7A3A] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#1F7A3A] hover:bg-[#17632E] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Continue to WhatsApp</span>
                </button>
                <p className="mt-3 text-xs text-center text-stone-600 dark:text-stone-300">
                  WhatsApp opens with your message ready for review. Tap Send there to submit it.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#DCEFE1] dark:bg-[#1b432a] text-[#1F7A3A] dark:text-[#a2f0b5] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-[#0F4D26] dark:text-[#d7f9dc]">
              WhatsApp message is ready
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 max-w-sm mx-auto">
              Review the message opened in WhatsApp and tap Send to share your enquiry for{' '}
              <span className="font-bold">{formData.product}</span>. It has not been sent yet.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full h-11 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp again</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-11 rounded-xl border border-[#D5E6D3] dark:border-[#224e2f] text-stone-700 dark:text-stone-200 font-semibold text-sm hover:bg-[#F6FAEA] dark:hover:bg-[#183622] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
