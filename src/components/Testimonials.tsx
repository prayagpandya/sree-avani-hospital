import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  const hasApproved = testimonials.some((t) => t.approved);

  return (
    <section id="patient-stories" className="bg-plum-100">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          label="PATIENT STORIES"
          title="In the words of the women we care for"
          intro={
          hasApproved ?
          undefined :
          'Patient stories are published only with written consent. Approved testimonials will appear here.'
          }
          align="center" />
        

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) =>
          <Reveal as="li" key={t.id} index={i} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft">
                <QuoteIcon className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
                <blockquote
                className={`mt-5 text-[0.95rem] leading-[1.8] ${
                t.approved ? 'text-plum-900/75' : 'italic text-plum-900/40'}`
                }>
                
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto pt-7">
                  <span className="block h-px w-10 bg-gold-600/50" aria-hidden="true" />
                  <span className="mt-4 block font-display text-[1.15rem] text-plum-800">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-[0.78rem] text-plum-900/55">
                    {t.treatment}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}