import React, { useMemo, useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { TreatmentCard } from '../components/TreatmentCard';
import { FAQ } from '../components/FAQ';
import { Appointment } from '../components/Appointment';
import { activeTreatments, treatmentGroups } from '../data/treatments';
import { useSeo } from '../utils/seo';

export function TreatmentsPage() {
  const [group, setGroup] = useState<string>('All');
  useSeo({
    title: 'Treatments',
    description:
    "Pregnancy and maternity care, gynaecology, infertility evaluation, laparoscopic surgery and women's wellness at Sree Avani Women's Hospital."
  });

  const groups = ['All', ...treatmentGroups()];
  const list = useMemo(
    () =>
    group === 'All' ?
    activeTreatments() :
    activeTreatments().filter((t) => t.group === group),
    [group]
  );

  return (
    <>
      <PageHero
        label="TREATMENTS"
        title="Our treatments & specialities"
        intro="Every service listed here is offered at the hospital. Select a treatment to understand who it is for, what care involves and when to consult."
        crumbs={[{ label: 'Treatments' }]} />
      

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Treatment groups">
            {groups.map((g) =>
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={group === g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-4 py-2 text-[0.78rem] font-medium transition-colors duration-200 ease-premium ${
              group === g ?
              'bg-plum-800 text-ivory' :
              'border border-plum-900/12 text-plum-900/65 hover:border-plum-700 hover:text-plum-800'}`
              }>
              
                {g}
              </button>
            )}
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t, i) =>
            <TreatmentCard key={t.slug} treatment={t} index={i % 3} />
            )}
          </div>
        </div>
      </section>

      <FAQ />
      <Appointment />
    </>);

}