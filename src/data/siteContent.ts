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
    categoryLabel: 'Areca leaf',
    images: [
      { src: '/images/areca-plates-stack.webp', alt: 'A stack of natural Areca leaf plates', width: 1024, height: 765 },
      { src: '/images/areca-leaf-plates.webp', alt: 'A natural Areca leaf plate viewed from above', width: 768, height: 1024 },
    ],
  },
  {
    id: '14-inch-sitting-plate',
    name: '14-Inch Sitting Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/sitting-plate-14in.webp', alt: '14-inch Sal leaf sitting plate arranged for serving', width: 1200, height: 896 },
      { src: '/images/sal-sitting-plates-stack.webp', alt: 'A stack of Sal leaf sitting plates', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plate-single.webp', alt: 'A single Sal leaf sitting plate', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plates-served.webp', alt: 'A Sal leaf sitting plate served with a meal', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plate-with-food.webp', alt: 'A Sal leaf sitting plate with food', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plate-meal.webp', alt: 'A Sal leaf plate holding a full meal', width: 1200, height: 896 },
    ],
  },
  {
    id: '12-inch-buffet-plate',
    name: '12-Inch Buffet Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/buffet-plate-12in.webp', alt: '12-inch Sal leaf buffet plates stacked for service', width: 1200, height: 896 },
      { src: '/images/sal-leaf-plates-stack.webp', alt: 'A stack of green Sal leaf plates', width: 1024, height: 765 },
      { src: '/images/sal-buffet-plate-served.webp', alt: 'A Sal leaf buffet plate served with food', width: 1024, height: 765 },
      { src: '/images/sal-buffet-plate-with-food.webp', alt: 'A Sal leaf plate set with a meal', width: 1024, height: 765 },
      { src: '/images/sal-buffet-plate-single.webp', alt: 'A single green Sal leaf plate', width: 1024, height: 765 },
    ],
  },
  {
    id: '8-inch-tiffin-plate',
    name: '8-Inch Tiffin Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/tiffin-plate-8in.webp', alt: '8-inch Sal leaf tiffin plate prepared for serving', width: 1200, height: 896 },
      { src: '/images/sal-tiffin-plates-stack.webp', alt: 'A stack of Sal leaf tiffin plates', width: 1024, height: 765 },
      { src: '/images/sal-tiffin-plate-single.webp', alt: 'A single Sal leaf tiffin plate with food', width: 1024, height: 765 },
    ],
  },
  {
    id: '4-5-inch-bowl',
    name: '4.5-Inch Bowl',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/leaf-bowl-4-5in.webp', alt: '4.5-inch Sal leaf bowl for serving food', width: 1200, height: 896 },
      { src: '/images/sal-bowls-stack.webp', alt: 'A group of Sal leaf bowls', width: 1024, height: 764 },
      { src: '/images/sal-bowl-single.webp', alt: 'A single Sal leaf bowl with food', width: 1024, height: 764 },
    ],
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
    image: PRODUCTS[0].images[0],
  },
  campaign: {
    eyebrow: 'SVM Traders Campaign',
    title: 'Choose natural plates for your next gathering',
    text: 'Watch our short video, explore our Areca and Sal leaf tableware, and request a quote for your event or business.',
    quoteCta: 'Request a Quote',
    videoSrc: '/videos/svm-traders-ad.mp4',
    videoLabel: 'SVM Traders campaign video for natural leaf tableware',
  },
  products: {
    title: 'Our Range',
    subtitle: 'Areca leaf plates and Sal leaf plates and bowls for caterers, event planners, temples and retailers.',
    pricingNote: 'Pricing and minimum order quantities are shared on request.',
    cardCta: 'Enquire Now',
    quoteCta: 'Request a Quote',
    bulkHeading: 'Need a custom size or bulk rate?',
  },
  reasons: [
    {
      title: 'Natural',
      text: 'Our Areca leaf plates are made from fallen areca palm leaves. No trees are cut, and no dyes or chemicals are used.',
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
      answer: 'Areca leaf products are plates. Our green plates and bowls are Sal leaf products.',
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
    { src: '/images/buffet-plate-12in.webp', alt: 'Green Sal leaf plate arranged for food service', categoryLabel: 'Sal leaf', width: 1200, height: 896 },
    { src: '/images/tiffin-plate-8in.webp', alt: 'Green Sal leaf plate with snacks', categoryLabel: 'Sal leaf', width: 1200, height: 896 },
    { src: '/images/leaf-bowl-4-5in.webp', alt: 'Green Sal leaf bowl prepared for serving food', categoryLabel: 'Sal leaf', width: 1200, height: 896 },
    { src: '/images/leaf-plate-detail.webp', alt: 'Close-up detail of a green Sal leaf plate', categoryLabel: 'Sal leaf', width: 1024, height: 1024 },
  ],
  testimonials: TESTIMONIALS,
  imageRequirements: [
    { file: 'areca-plates-stack.webp', width: 1024, height: 765, subject: 'A stack of natural Areca leaf plates used as the homepage hero' },
    { file: 'areca-leaf-plates.webp', width: 768, height: 1024, subject: 'An Areca leaf plate viewed from above' },
    { file: 'sal-sitting-plates-stack.webp', width: 1024, height: 765, subject: 'A stack of Sal leaf sitting plates' },
    { file: 'sal-sitting-plates-served.webp', width: 1024, height: 765, subject: 'A Sal leaf sitting plate served with food' },
    { file: 'sal-buffet-plate-served.webp', width: 1024, height: 765, subject: 'A Sal leaf buffet plate served with food' },
    { file: 'sal-tiffin-plates-stack.webp', width: 1024, height: 765, subject: 'A stack of Sal leaf tiffin plates' },
    { file: 'sal-bowls-stack.webp', width: 1024, height: 764, subject: 'A group of Sal leaf bowls' },
  ],
} as const;
