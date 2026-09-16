export type TreatmentGroup =
'Pregnancy & Maternity' |
'Gynaecology' |
'Fertility' |
'Laparoscopy' |
"Women's Wellness";

export interface TreatmentFaq {
  q: string;
  a: string;
}

export interface Treatment {
  /** URL slug */
  slug: string;
  title: string;
  group: TreatmentGroup;
  /** Card summary */
  summary: string;
  image: string;
  imageAlt: string;
  /** Set to false to hide a service that the hospital does not currently offer. */
  enabled: boolean;
  overview: string[];
  whoItIsFor: string[];
  whatWeProvide: string[];
  consultationProcess: {step: string;text: string;}[];
  whenToConsult: string[];
  faqs: TreatmentFaq[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  /** Set true for the supplied/actual hospital photographs. */
  wide?: boolean;
}