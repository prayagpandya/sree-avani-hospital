import { hospital } from './hospital';
import type { GalleryImage } from '../types/content';

/**
 * Facilities shown on the site. Remove any entry that the hospital does not
 * actually have — nothing here should claim a facility that is not available.
 */
export const facilities: GalleryImage[] = [
{
  src: hospital.assets.buildingUrl,
  alt: "Exterior of Sree Avani Women's Hospital",
  category: 'The Hospital',
  wide: true
},
{
  src: "/7e72aa7a-2cf8-42c8-8ba3-3368124988b4.jpg",
  alt: 'Hospital reception and front desk',
  category: 'Reception'
},
{
  src: "/89c989ce-f458-4653-bf42-dc7f7159d1e1.jpg",
  alt: 'Doctor consultation room with examination area',
  category: 'Consultation Room'
},
{
  src: "/09c70844-e5aa-4d42-a20b-37b85b3e86cc.jpg",
  alt: 'Private patient room with a bed and seating for family',
  category: 'Patient Room'
},
{
  src: "/e68cdc53-768f-4ab2-8829-6aa5f646896a.jpg",
  alt: 'Maternity and newborn care area',
  category: 'Maternity Area'
},
{
  src: "/26b29c75-4b04-4cb8-a4e3-92d6b302e510.jpg",
  alt: 'Operation theatre prepared with laparoscopic equipment',
  category: 'Operation Theatre'
},
{
  src: "/7f927d8c-5073-4145-94e6-9816bda4c840.jpg",
  alt: 'Waiting lounge with comfortable seating',
  category: 'Waiting Area'
},
{
  src: "/9f3098d5-93db-4258-8edf-d25db7bd39ee.jpg",
  alt: 'Nursing team at the nursing station',
  category: 'Nursing Care'
}];


export const facilityNotes = [
'Reception & front desk',
'Consultation rooms',
'Private patient rooms',
'Maternity & newborn area',
'Operation theatre',
'Diagnostic support',
'Waiting lounge',
'Round-the-clock nursing care'];