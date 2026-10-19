export const CONTACT_INFO = {
  business: 'SVM Traders',
  tagline: 'Natural leaf plates, supplied from Hyderabad.',
  owner: 'S. Pradeep Reddy',
  primaryPhone: '9985812721',
  secondaryPhone: '8186801206',
  city: 'Hyderabad',
  state: 'Telangana',
  location: 'Hyderabad, Telangana',
} as const;

export const PRODUCTS = [
  {
    id: 'areca-leaf-plates',
    name: 'Areca Leaf Plates',
    image: '/images/areca-leaf-plates.webp',
    imageAlt: 'Natural Areca leaf plates stacked on a wooden table',
    width: 768,
    height: 1024,
  },
  {
    id: '14-inch-sitting-plate',
    name: '14-Inch Sitting Plate',
    image: '/images/sitting-plate-14in.webp',
    imageAlt: 'Natural 14-inch leaf plate displayed upright',
    width: 1200,
    height: 896,
  },
  {
    id: '12-inch-buffet-plate',
    name: '12-Inch Buffet Plate',
    image: '/images/buffet-plate-12in.webp',
    imageAlt: 'Natural leaf plate arranged for buffet service',
    width: 1200,
    height: 896,
  },
  {
    id: '8-inch-tiffin-plate',
    name: '8-Inch Tiffin Plate',
    image: '/images/tiffin-plate-8in.webp',
    imageAlt: 'Natural leaf plate prepared for serving snacks',
    width: 1200,
    height: 896,
  },
  {
    id: '4-5-inch-bowl',
    name: '4.5-Inch Bowl',
    image: '/images/leaf-bowl-4-5in.webp',
    imageAlt: 'Natural leaf bowl for serving food',
    width: 1200,
    height: 896,
  },
] as const;

export const TRUST_BADGES = [
  '100% Natural',
  'Chemical Free',
  'Biodegradable',
  'Plastic-Free',
] as const;

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [];

export const SITE_CONTENT = {
  hero: {
    headline: 'Natural Leaf Plates, Made in Hyderabad',
    subheading:
      'Hand-crafted, chemical-free and fully biodegradable. A plastic-free choice for weddings, catering, temples and everyday use.',
    quoteCta: 'Request a Quote',
    productsCta: 'View Products',
  },
  campaign: {
    eyebrow: 'SVM Traders Campaign',
    title: 'Choose natural plates for your next gathering',
    text: 'Watch our short video, explore the Areca leaf plate range, and request a quote for your event or business.',
    quoteCta: 'Request a Quote',
    videoSrc: '/videos/svm-traders-ad.mp4',
    videoLabel: 'SVM Traders campaign video for natural Areca leaf plates',
  },
  products: {
    title: 'Our Range',
    subtitle: 'Bulk supply for caterers, event planners, temples and retailers.',
    pricingNote: 'Pricing and minimum order quantities are shared on request.',
    cardCta: 'Enquire Now',
    quoteCta: 'Request a Quote',
    bulkHeading: 'Need a custom size or bulk rate?',
  },
  reasons: [
    {
      title: 'Natural',
      text: 'Made from fallen areca palm leaves. No trees are cut, and no dyes or chemicals are used.',
    },
    {
      title: 'Safe',
      text: 'Cleaned with water and free from chemical coatings, so it is safe for food.',
    },
    {
      title: 'Plastic-Free',
      text: 'Breaks down naturally and returns to the soil.',
    },
  ],
  process: [
    {
      title: 'Collected & Cleaned',
      text: 'Fallen leaves are gathered and washed with water.',
    },
    {
      title: 'Shaped by Hand',
      text: 'Formed without glue or chemicals.',
    },
    {
      title: 'Checked & Packed',
      text: 'Inspected, sorted and packed for dispatch.',
    },
  ],
  about: {
    title: 'About SVM Traders',
    text: 'SVM Traders is a Hyderabad-based supplier of natural leaf plates, run by S. Pradeep Reddy. We offer a simple, eco-friendly alternative to plastic and paper tableware for events, caterers and temples.',
    mission:
      'To provide natural, chemical-free tableware that is safe for people and the planet.',
  },
  bulkOrders: {
    title: 'Bulk Orders Made Easy',
    packs: [
      { name: 'Event Pack', quantity: '100-500 pcs', use: 'for pujas and family functions' },
      { name: 'Banquet Pack', quantity: '1,000-5,000 pcs', use: 'for weddings and buffets' },
      { name: 'Large Orders', quantity: '10,000+ pcs', use: 'for temples and resellers' },
    ],
    note: 'Mixed sizes are welcome. Contact us for rates.',
  },
  delivery: {
    title: 'Delivery Across Hyderabad',
    text: 'We deliver to Madhapur, Gachibowli, Kukatpally, Secunderabad, Banjara Hills, Jubilee Hills, Uppal, Miyapur and more.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Tell us what you need and we'll reply with a quote.",
    replyNote: 'We usually reply within a few hours on business days.',
  },
  sectionTitles: {
    whyChooseUs: 'Why Choose Us',
    gallery: 'Product Gallery',
    gallerySubtitle: 'A preview of the natural leaf tableware range.',
    faq: 'Frequently Asked Questions',
  },
  faq: [
    {
      question: 'What are the plates made from?',
      answer: 'Naturally fallen areca palm leaves, cleaned with water, shaped without chemicals or glue.',
    },
    {
      question: 'Can they hold hot and oily food?',
      answer: 'Yes, they handle hot rice, curries and snacks well. For very watery gravies, we recommend the bowl.',
    },
    {
      question: 'How biodegradable are they?',
      answer: 'They break down naturally in a few weeks to months, unlike plastic.',
    },
    {
      question: 'What is the minimum order?',
      answer: 'Event packs start at 100 pcs. Contact us for exact MOQ per size.',
    },
    {
      question: 'Can I mix sizes in one order?',
      answer: 'Yes, mixed-size orders are welcome.',
    },
    {
      question: 'How do I get a quote?',
      answer: 'Use the enquiry form, call, or WhatsApp us.',
    },
    {
      question: 'Do you deliver outside Hyderabad?',
      answer: 'Contact us with your location and quantity.',
    },
    {
      question: 'How are plates packed?',
      answer: 'Packed clean and sealed to protect from moisture and damage.',
    },
  ],
  galleryImages: [
    { src: '/images/buffet-plate-12in.webp', alt: 'Natural leaf tableware arranged for food service', width: 1200, height: 896 },
    { src: '/images/tiffin-plate-8in.webp', alt: 'Natural leaf plate with snacks', width: 1200, height: 896 },
    { src: '/images/leaf-bowl-4-5in.webp', alt: 'Leaf bowl prepared for serving food', width: 1200, height: 896 },
    { src: '/images/leaf-plate-detail.webp', alt: 'Close-up detail of the natural leaf plate texture', width: 1024, height: 1024 },
  ],
  testimonials: TESTIMONIALS,
  imageRequirements: [
    { file: 'areca-leaf-plates.webp', width: 768, height: 1024, subject: 'Natural Areca leaf plates stacked on a wooden table for the hero image' },
    { file: 'leaf-plate-detail.webp', width: 1200, height: 900, subject: 'A close-up of the natural areca leaf plate texture' },
    { file: 'sitting-plate-14in.webp', width: 1200, height: 900, subject: 'The 14-inch sitting plate' },
    { file: 'buffet-plate-12in.webp', width: 1200, height: 900, subject: 'The 12-inch buffet plate' },
    { file: 'tiffin-plate-8in.webp', width: 1200, height: 900, subject: 'The 8-inch tiffin plate' },
    { file: 'leaf-bowl-4-5in.webp', width: 1200, height: 900, subject: 'The 4.5-inch leaf bowl' },
    { file: 'packed-orders.webp', width: 1200, height: 900, subject: 'Cleanly packed products ready for dispatch' },
    { file: 'local-delivery.webp', width: 1200, height: 900, subject: 'A local order being delivered in Hyderabad' },
  ],
} as const;
