import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Gallery } from '../components/Gallery';
import { Facilities } from '../components/Facilities';
import { hospital } from '../data/hospital';
import { useSeo } from '../utils/seo';

export function GalleryPage() {
  useSeo({
    title: 'Gallery',
    description:
    "Photographs of Sree Avani Women's Hospital — the building, consultation rooms, maternity area, facilities and care team."
  });

  return (
    <>
      <PageHero
        label="GALLERY"
        title="A look inside the hospital"
        intro="The spaces where care happens — reception, consultation rooms, patient rooms, the maternity area and the operation theatre."
        crumbs={[{ label: 'Gallery' }]}
        image={hospital.assets.buildingUrl} />
      
      <Gallery />
      <Facilities />
    </>);

}