import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { About } from '../components/About';
import { Doctor } from '../components/Doctor';
import { Treatments } from '../components/Treatments';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PatientJourney } from '../components/PatientJourney';
import { Facilities } from '../components/Facilities';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Appointment } from '../components/Appointment';
import { Location } from '../components/Location';
import { useSeo } from '../utils/seo';

export function Home({ showPatientStories = true }: {showPatientStories?: boolean;}) {
  useSeo({});

  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Doctor />
      <Treatments limit={6} />
      <WhyChooseUs />
      <PatientJourney />
      <Facilities />
      <Gallery limit={8} />
      {showPatientStories && <Testimonials />}
      <FAQ />
      <Appointment />
      <Location />
    </>);

}