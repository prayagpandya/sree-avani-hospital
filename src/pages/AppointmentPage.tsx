import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Appointment } from '../components/Appointment';
import { Location } from '../components/Location';
import { FAQ } from '../components/FAQ';
import { useSeo } from '../utils/seo';

export function AppointmentPage() {
  useSeo({
    title: 'Book an Appointment',
    description:
      "Schedule a consultation with Dr. Duddupudi Bindu Kousalya at Sree Avani Women's Hospital in Bommuru, Rajamahendravaram. Obstetrics, gynaecology, fertility & laparoscopy."
  });

  return (
    <>
      <PageHero
        label="CONSULTATION BOOKING"
        title="Schedule Your Appointment"
        intro="Fill out the form below to connect directly with Sree Avani Women's Hospital. Your request will open in WhatsApp with all details formatted for instant sending."
        crumbs={[{ label: 'Book Appointment' }]}
      />

      <Appointment
        showHeading={true}
        title="Patient Details & Booking"
        intro="Please provide your contact details, preferred date, and department. All submissions directly prepare your WhatsApp consultation request."
      />

      <Location />
      <FAQ />
    </>
  );
}
