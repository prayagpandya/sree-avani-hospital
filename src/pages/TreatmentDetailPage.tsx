import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckIcon, CircleAlertIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Buttons';
import { TreatmentCard } from '../components/TreatmentCard';
import { FAQ } from '../components/FAQ';
import { Appointment } from '../components/Appointment';
import { activeTreatments, treatmentBySlug } from '../data/treatments';
import { hospital } from '../data/hospital';
import { useSeo } from '../utils/seo';

export function TreatmentDetailPage() {
  const { slug = '' } = useParams();
  const treatment = treatmentBySlug(slug);

  useSeo({
    title: treatment ? treatment.title : 'Treatment not found',
    description: treatment?.summary,
    image: treatment?.image
  });

  if (!treatment) {
    return (
      <>
        <PageHero
          label="TREATMENTS"
          title="This treatment page is not available"
          intro="The service you were looking for is not currently listed. You can browse all treatments offered at the hospital instead."
          crumbs={[{ label: 'Treatments', to: '/treatments' }, { label: 'Not found' }]} />
        
        <div className="bg-ivory py-20 text-center">
          <ButtonLink to="/treatments">View all treatments</ButtonLink>
        </div>
      </>);

  }

  const related = activeTreatments().
  filter((t) => t.slug !== treatment.slug && t.group === treatment.group).
  slice(0, 3);
  const fallbackRelated = activeTreatments().
  filter((t) => t.slug !== treatment.slug).
  slice(0, 3);
  const relatedList = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <PageHero
        label={treatment.group.toUpperCase()}
        title={treatment.title}
        intro={treatment.summary}
        crumbs={[{ label: 'Treatments', to: '/treatments' }, { label: treatment.title }]}
        image={treatment.image} />
      

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
              <img
                src={treatment.image}
                alt={treatment.imageAlt}
                className="aspect-[16/9] w-full object-cover" />
              
            </div>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading label="OVERVIEW" title={`About ${treatment.title.toLowerCase()}`} />
              <Reveal index={3}>
                <div className="mt-6 space-y-5">
                  {treatment.overview.map((para) =>
                  <p key={para} className="text-[0.97rem] leading-[1.85] text-plum-900/70">
                      {para}
                    </p>
                  )}
                </div>
              </Reveal>

              <div className="mt-14">
                <h2 className="font-display text-[1.9rem] leading-tight text-plum-800">
                  What we provide
                </h2>
                <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                  {treatment.whatWeProvide.map((item, i) =>
                  <Reveal as="li" key={item} index={i % 4} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-gold-700" aria-hidden="true" />
                      <span className="text-[0.88rem] leading-[1.65] text-plum-900/70">{item}</span>
                    </Reveal>
                  )}
                </ul>
              </div>

              <div className="mt-14">
                <h2 className="font-display text-[1.9rem] leading-tight text-plum-800">
                  The consultation process
                </h2>
                <ol className="mt-7 space-y-6 border-l border-gold-600/35 pl-7">
                  {treatment.consultationProcess.map((step, i) =>
                  <Reveal as="li" key={step.step} index={i} className="relative">
                      <span
                      className="absolute -left-[2.15rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-gold-600 bg-white"
                      aria-hidden="true">
                      
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-600" />
                      </span>
                      <h3 className="font-display text-[1.3rem] text-plum-800">{step.step}</h3>
                      <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-plum-900/65">
                        {step.text}
                      </p>
                    </Reveal>
                  )}
                </ol>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <Reveal index={1}>
                <div className="rounded-2xl bg-plum-100 p-7">
                  <h2 className="font-display text-[1.6rem] leading-tight text-plum-800">
                    Who this is for
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {treatment.whoItIsFor.map((item) =>
                    <li key={item} className="flex gap-3 text-[0.88rem] leading-[1.65] text-plum-900/70">
                        <span
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-gold-600"
                        aria-hidden="true" />
                      
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>

              <Reveal index={2}>
                <div className="mt-6 rounded-2xl border border-gold-600/35 p-7">
                  <div className="flex items-center gap-3">
                    <CircleAlertIcon className="h-5 w-5 text-gold-700" aria-hidden="true" />
                    <h2 className="font-display text-[1.6rem] leading-tight text-plum-800">
                      When to consult
                    </h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {treatment.whenToConsult.map((item) =>
                    <li key={item} className="flex gap-3 text-[0.88rem] leading-[1.65] text-plum-900/70">
                        <span
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-plum-600"
                        aria-hidden="true" />
                      
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>

              <Reveal index={3}>
                <div className="mt-6 rounded-2xl bg-plum-800 p-7 text-ivory">
                  <h2 className="font-display text-[1.6rem] leading-tight">
                    Consult about {treatment.title.toLowerCase()}
                  </h2>
                  <p className="mt-3 text-[0.86rem] leading-[1.7] text-ivory/65">
                    Request an appointment and the hospital will call you back to confirm a
                    consultation slot.
                  </p>
                  <ButtonLink to="/contact#appointment" variant="gold" className="mt-6">
                    Book Appointment
                  </ButtonLink>
                  <p className="mt-6 border-t border-ivory/15 pt-5 text-[0.74rem] leading-[1.65] text-ivory/45">
                    {hospital.disclaimer}
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <FAQ
        items={treatment.faqs}
        label="TREATMENT FAQ"
        title={`${treatment.title} — common questions`} />
      

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="RELATED CARE" title="You may also want to read about" />
            <Reveal index={2}>
              <Link
                to="/treatments"
                className="border-b border-gold-600 pb-1.5 text-[0.85rem] font-medium text-plum-800">
                
                All treatments
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedList.map((t, i) =>
            <TreatmentCard key={t.slug} treatment={t} index={i} />
            )}
          </div>
        </div>
      </section>

      <Appointment />
    </>);

}