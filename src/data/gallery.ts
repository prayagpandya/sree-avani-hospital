import { hospital } from './hospital';
import type { GalleryImage } from '../types/content';

export const galleryCategories = [
'All',
'Hospital',
'Doctor',
'Consultation',
'Maternity',
'Facilities',
'Patient Care'] as
const;

/**
 * Replace these with the hospital's own photographs as they become available.
 */
export const galleryImages: GalleryImage[] = [
{
  src: hospital.assets.buildingUrl,
  alt: "Exterior of Sree Avani Women's Hospital",
  category: 'Hospital',
  wide: true
},
{
  src: "/b28f9b02-fd97-4dda-ac80-d451ee8e0f57.jpg",
  alt: 'Portrait of Dr. Duddupudi Bindu Kousalya',
  category: 'Doctor'
},
{
  src: "/3a49f9f7-c91e-46d8-beca-06741871c835.jpg",
  alt: 'Gynaecology consultation in progress',
  category: 'Consultation'
},
{
  src: "/f28e6b0c-0127-4284-a2cc-a6b3250aeb0c.jpg",
  alt: 'New mother holding her newborn in a maternity room',
  category: 'Maternity'
},
{
  src: "/7e72aa7a-2cf8-42c8-8ba3-3368124988b4.jpg",
  alt: 'Hospital reception and front desk',
  category: 'Facilities'
},
{
  src: "/c9e578d5-8f10-46aa-9f3e-f255797c2688.jpg",
  alt: 'Antenatal consultation with a pregnant patient',
  category: 'Consultation',
  wide: true
},
{
  src: "/e68cdc53-768f-4ab2-8829-6aa5f646896a.jpg",
  alt: 'Newborn care area with bassinets',
  category: 'Maternity'
},
{
  src: "/89c989ce-f458-4653-bf42-dc7f7159d1e1.jpg",
  alt: 'Consultation room interior',
  category: 'Facilities'
},
{
  src: "/9f3098d5-93db-4258-8edf-d25db7bd39ee.jpg",
  alt: 'Nursing team at the nursing station',
  category: 'Patient Care'
},
{
  src: "/27d19b92-d91f-4da5-933f-dd426296c9bb.jpg",
  alt: 'Postnatal support for a new mother',
  category: 'Patient Care'
},
{
  src: "/09c70844-e5aa-4d42-a20b-37b85b3e86cc.jpg",
  alt: 'Private patient room',
  category: 'Facilities'
},
{
  src: "/26b29c75-4b04-4cb8-a4e3-92d6b302e510.jpg",
  alt: 'Operation theatre with surgical team',
  category: 'Facilities'
},
{
  src: "/39a27f8b-a5fa-4e8c-a18f-d564a6a19b20.jpg",
  alt: 'Couple in a fertility consultation',
  category: 'Consultation'
},
{
  src: "/7f927d8c-5073-4145-94e6-9816bda4c840.jpg",
  alt: 'Waiting lounge',
  category: 'Facilities'
}];