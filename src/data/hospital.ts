/**
 * SINGLE SOURCE OF TRUTH for all hospital information.
 * Replace the PLACEHOLDER values below with the hospital's verified details.
 * NOTE: the address must never contain the phrase "Opp Medplus".
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
   * BRAND ASSETS — drop the supplied files in here.
   * logoUrl: the official Sree Avani logo (used as-supplied, never recoloured or cropped).
   * locationQrUrl: the supplied location QR code image.
   * buildingUrl: the supplied hospital building photograph.
   * While a value is an empty string, the site renders a clearly marked placeholder.
   */
  assets: {
    logoUrl: '',
    locationQrUrl: '',
    buildingUrl: "/b66e4e8a-bb33-45f3-ad21-844465b3eb09.jpg"

  },

  /** Contact — PLACEHOLDERS. Replace with verified numbers before launch. */
  contact: {
    phoneDisplay: '[HOSPITAL PHONE NUMBER]',
    phoneHref: '', // e.g. '+919000000000'
    whatsappNumber: '', // digits with country code only, e.g. '919000000000'
    whatsappMessage:
    "Hello Sree Avani Women's Hospital, I would like to enquire about an appointment.",
    email: '[HOSPITAL EMAIL ADDRESS]'
  },

  /** Address — PLACEHOLDER. Use only the final verified address. */
  address: {
    lines: ['[FINAL VERIFIED HOSPITAL ADDRESS]', '[CITY, STATE — PIN CODE]'],
    mapsUrl: '' // configurable Google Maps link
  },

  /** Timings are intentionally not stated. Replace with verified timings if approved. */
  timings: {
    note: 'Consultation timings are confirmed at the time of booking. Please call the hospital to confirm.'
  },

  /** Only add official, verified profiles. Empty by design. */
  social: [] as {label: string;href: string;}[],

  disclaimer:
  'Information provided on this website is for general awareness and does not replace consultation with a qualified medical professional.'
};

export const navLinks = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Treatments', to: '/treatments' },
{ label: 'Doctor', to: '/doctor' },
{ label: 'Facilities', to: '/about#facilities' },
{ label: 'Gallery', to: '/gallery' },
{ label: 'Patient Stories', to: '/#patient-stories' },
{ label: 'Contact', to: '/contact' }];


export const whatsappLink = () => {
  const { whatsappNumber, whatsappMessage } = hospital.contact;
  if (!whatsappNumber) return '';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};

export const telLink = () => {
  const { phoneHref } = hospital.contact;
  return phoneHref ? `tel:${phoneHref}` : '';
};