import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ButtonLink } from './ui/Buttons';
import { TreatmentCard } from './TreatmentCard';
import { activeTreatments } from '../data/treatments';

export function Treatments({ limit }: {limit?: number;}) {
  const list = limit ? activeTreatments().slice(0, limit) : activeTreatments();

  return (
    <section id="treatments" className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="OUR TREATMENTS"
            title="Care across obstetrics, gynaecology and fertility"
            intro="Consultation-led services covering pregnancy, gynaecological health, fertility evaluation and minimal-access surgery." />
          
          {limit &&
          <Reveal index={2}>
              <ButtonLink to="/treatments" variant="outline" className="shrink-0">
                View all treatments
              </ButtonLink>
            </Reveal>
          }
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) =>
          <TreatmentCard key={t.slug} treatment={t} index={i % 3} />
          )}
        </div>
      </div>
    </section>);

}