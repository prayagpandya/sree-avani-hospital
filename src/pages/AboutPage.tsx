import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PatientJourney } from '../components/PatientJourney';
import { Facilities } from '../components/Facilities';
import { Doctor } from '../components/Doctor';
import { Location } from '../components/Location';
import { hospital } from '../data/hospital';
import { useSeo } from '../utils/seo';

export function AboutPage() {
  useSeo({
    title: 'About Us',
    description:
    "Sree Avani Women's Hospital provides comprehensive women's healthcare in a safe, respectful and compassionate environment."
  });

  return (
    <>
      <PageHero
        label="ABOUT US"
        title="A hospital built around women's health"
        intro="Comprehensive care for women — pregnancy and maternity, gynaecology, fertility evaluation and minimal-access surgery — delivered in a calm and private setting."
        crumbs={[{ label: 'About Us' }]}
        image={hospital.assets.buildingUrl} />
      
      <About withCta={false} />
      <WhyChooseUs />
      <Doctor />
      <PatientJourney />
      <Facilities />
      <Location />
    </>);

}