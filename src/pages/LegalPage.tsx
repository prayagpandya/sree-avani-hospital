import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { hospital } from '../data/hospital';
import { useSeo } from '../utils/seo';

const privacy = [
{
  heading: 'Information we collect',
  body: 'When you submit an appointment request through this website we collect the name, phone number, email address and details you choose to provide. This information is used only to contact you about your enquiry or appointment.'
},
{
  heading: 'How your information is used',
  body: 'Your details are used to schedule and confirm consultations and to respond to your enquiry. They are not sold or shared for marketing purposes.'
},
{
  heading: 'Medical records',
  body: 'Clinical records created during your care at the hospital are maintained confidentially in accordance with applicable regulations, and are separate from this website.'
},
{
  heading: 'Contact',
  body: `For any question about your information, please contact the hospital using the details on the Contact page of this website.`
}];


const terms = [
{
  heading: 'Informational purpose',
  body: hospital.disclaimer
},
{
  heading: 'Appointment requests',
  body: 'Submitting the appointment form on this website is a request for a consultation. An appointment is confirmed only when the hospital contacts you to confirm it.'
},
{
  heading: 'No guaranteed outcomes',
  body: 'No treatment outcome is promised or guaranteed on this website. Treatment decisions are made individually at consultation.'
},
{
  heading: 'Content accuracy',
  body: 'Hospital details, services and contact information are kept up to date to the best of our ability. Please call the hospital to confirm current details before you travel.'
}];


export function LegalPage({ kind }: {kind: 'privacy' | 'terms';}) {
  const isPrivacy = kind === 'privacy';
  const sections = isPrivacy ? privacy : terms;
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use';

  useSeo({ title });

  return (
    <>
      <PageHero label="LEGAL" title={title} crumbs={[{ label: title }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">
          {sections.map((s) =>
          <article key={s.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-[1.7rem] leading-tight text-plum-800">
                {s.heading}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-[1.85] text-plum-900/70">{s.body}</p>
            </article>
          )}
        </div>
      </section>
    </>);

}