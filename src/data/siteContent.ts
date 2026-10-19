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
      { src: '/images/areca-leaf-plate-single.jpeg', alt: 'A single Areca leaf plate presented by hand', width: 1600, height: 1062 },
      { src: '/images/areca-leaf-plates.webp', alt: 'A close-up of the natural Areca leaf plate surface', width: 768, height: 1024 },
      { src: '/images/areca-leaf-plates-stack.png', alt: 'A stack of natural Areca leaf plates', width: 1024, height: 765 },
    ],
  },
  {
    id: '14-inch-sitting-plate',
    name: '14-Inch Sitting Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/sal-sitting-plate-single.png', alt: 'A single empty Sal leaf sitting plate', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plate-with-food.png', alt: 'A Sal leaf sitting plate filled with a meal', width: 1024, height: 765 },
      { src: '/images/sal-sitting-plates-stack.png', alt: 'A stack of Sal leaf sitting plates', width: 1024, height: 765 },
    ],
  },
  {
    id: '12-inch-buffet-plate',
    name: '12-Inch Buffet Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/sal-buffet-plates-stack.png', alt: 'A stack of Sal leaf buffet plates', width: 1024, height: 765 },
      { src: '/images/sal-buffet-plate-with-food.png', alt: 'A Sal leaf buffet plate set with food', width: 1024, height: 765 },
      { src: '/images/sal-buffet-plate-served.png', alt: 'A Sal leaf buffet plate holding a full meal', width: 1200, height: 896 },
    ],
  },
  {
    id: '8-inch-tiffin-plate',
    name: '8-Inch Tiffin Plate',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/sal-tiffin-plate-single.jpeg', alt: 'A single empty Sal leaf tiffin plate', width: 1200, height: 896 },
      { src: '/images/sal-tiffin-plate-with-food.jpeg', alt: 'A Sal leaf tiffin plate served with food', width: 1600, height: 1194 },
      { src: '/images/sal-tiffin-plates-stack.png', alt: 'A stack of Sal leaf tiffin plates', width: 1600, height: 1194 },
    ],
  },
  {
    id: '4-5-inch-bowl',
    name: '4.5-Inch Bowl',
    categoryLabel: 'Sal leaf',
    images: [
      { src: '/images/sal-bowl-single.png', alt: 'A single empty Sal leaf bowl', width: 1024, height: 764 },
      { src: '/images/leaf-bowl-4-5in.webp', alt: 'A Sal leaf bowl filled with curry', width: 1200, height: 896 },
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
    { src: '/images/sal-sitting-plates-stack.png', alt: 'A stack of Sal leaf sitting plates', categoryLabel: 'Sal leaf', width: 1024, height: 765 },
    { src: '/images/sal-tiffin-plate-with-food.jpeg', alt: 'A Sal leaf tiffin plate served with food', categoryLabel: 'Sal leaf', width: 1600, height: 1194 },
    { src: '/images/leaf-bowl-4-5in.webp', alt: 'Green Sal leaf bowl prepared for serving food', categoryLabel: 'Sal leaf', width: 1200, height: 896 },
    { src: '/images/leaf-plate-detail.webp', alt: 'Close-up detail of a green Sal leaf plate', categoryLabel: 'Sal leaf', width: 1024, height: 1024 },
  ],
  testimonials: TESTIMONIALS,
  imageRequirements: [
    { file: 'areca-leaf-plate-single.jpeg', width: 1600, height: 1062, subject: 'A single Areca leaf plate' },
    { file: 'areca-leaf-plates-stack.png', width: 1024, height: 765, subject: 'A stack of Areca leaf plates' },
  ],
} as const;
