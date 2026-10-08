/**
 * SINGLE SOURCE OF TRUTH for all hospital information.
 */

export const hospital = {
  name: "Sree Avani Women's Hospital",
  shortName: 'Sree Avani',
  tagline: 'Compassionate, personalized healthcare for women.',
  seo: {
    title: "Sree Avani Women's Hospital | Women's Healthcare & Gynaecology",
    description:
      "Sree Avani Women's Hospital provides compassionate women's healthcare including maternity, gynaecology, infertility and laparoscopic care."
  },

  /**
   * BRAND ASSETS
   */
  assets: {
    logoUrl: '/avani_logo.jpeg',
    locationQrUrl: '/qr-code.png',
    buildingUrl: '/hospital.jpeg'
  },

  /** Verified hospital contact number. */
  contact: {
    phoneDisplay: '888 694 22 88',
    phoneHref: '8886942288',
    whatsappNumber: '918886942288',
    whatsappMessage:
      "Hello Sree Avani Women's Hospital, I would like to enquire about an appointment.",
    email: 'dsumathidevi11@gmail.com'
  },

  /** Verified hospital address. */
  address: {
    lines: [
      'D.No. 102-7-268/1',
      'Balajipeta Road',
      'Near Nayara Petrol Bunk',
      'Bommuru',
      'Rajamahendravaram - 533124'
    ],
    mapsUrl: 'https://maps.app.goo.gl/fe7xQgFMk3M1J1e59'
  },

  /** Hospital consultation and emergency care timings. */
  timings: {
    note: 'Consultation Hours: Monday – Saturday: 10:00 AM – 2:00 PM & 5:30 PM – 8:30 PM. 24/7 Maternity & Emergency Care available.'
  },

  /** Official profiles. */
  social: [] as { label: string; href: string }[],

  disclaimer:
    'Information provided on this website is for general awareness and does not replace consultation with a qualified medical professional.'
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Doctor', to: '/doctor' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
];

export const whatsappLink = () => {
  const { whatsappNumber, whatsappMessage } = hospital.contact;
  if (!whatsappNumber) return '';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};

export const telLink = () => {
  const { phoneHref } = hospital.contact;
  return phoneHref ? `tel:${phoneHref}` : '';
};