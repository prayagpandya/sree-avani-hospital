import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Doctor } from '../components/Doctor';
import { Treatments } from '../components/Treatments';
import { Appointment } from '../components/Appointment';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { doctor } from '../data/doctor';
import { hospital } from '../data/hospital';
import { useSeo } from '../utils/seo';

const credentials = [
{ label: 'Qualifications', value: doctor.qualifications },
{ label: 'Speciality', value: 'Obstetrics & Gynaecology' },
{ label: 'Sub-speciality', value: 'Infertility & Laparoscopic Surgery' }];


export function DoctorPage() {
  useSeo({
    title: doctor.name,
    description: `${doctor.name}, ${doctor.qualifications} — ${doctor.roles.join(', ')} at ${hospital.name}.`,
    image: doctor.portrait
  });

  return (
    <>
      <PageHero
        label="YOUR DOCTOR"
        title={doctor.name}
        intro={`${doctor.qualifications} · ${doctor.roles.join(' · ')}`}
        crumbs={[{ label: 'Doctor' }]}
        image={doctor.portrait} />
      

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            label="CREDENTIALS"
            title="Qualifications as supplied by the hospital"
            intro="Only verified credentials are listed. No additional qualifications, awards or figures are claimed." />
          
          <dl className="mt-12 grid gap-x-10 gap-y-9 border-t border-plum-900/8 pt-10 sm:grid-cols-3">
            {credentials.map((c, i) =>
            <Reveal key={c.label} index={i}>
                <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-gold-700">
                  {c.label.toUpperCase()}
                </dt>
                <dd className="mt-3 font-display text-[1.5rem] leading-tight text-plum-800">
                  {c.value}
                </dd>
              </Reveal>
            )}
          </dl>
        </div>
      </section>

      <Doctor />
      <Treatments limit={6} />
      <Appointment />
    </>);

}