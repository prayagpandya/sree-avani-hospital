import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Appointment } from '../components/Appointment';
import { Location } from '../components/Location';
import { FAQ } from '../components/FAQ';
import { useSeo } from '../utils/seo';

export function ContactPage() {
  useSeo({
    title: 'Contact & Appointments',
    description:
    "Contact Sree Avani Women's Hospital — phone, WhatsApp, email, address and appointment requests."
  });

  return (
    <>
      <PageHero
        label="CONTACT"
        title="Talk to us about your care"
        intro="Call the hospital, message on WhatsApp, or request an appointment below. Requests are confirmed by a call back from the hospital."
        crumbs={[{ label: 'Contact' }]} />
      
      <Appointment />
      <Location />
      <FAQ />
    </>);

}