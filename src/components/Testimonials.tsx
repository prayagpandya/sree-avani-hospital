import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
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
            hasApproved
              ? 'Real experiences shared by mothers and families who placed their trust in Dr. Bindu Kousalya and our care team.'
              : 'Patient stories are published only with written consent. Approved testimonials will appear here.'
          }
          align="center"
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.id} index={i} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 sm:p-7">
                <div className="flex items-center justify-between">
                  <QuoteIcon className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
                  <div className="flex gap-0.5 text-gold-500" aria-label={`${t.rating || 5} out of 5 stars`}>
                    {[...Array(t.rating || 5)].map((_, sIdx) => (
                      <StarIcon key={sIdx} className="h-3.5 w-3.5 fill-current text-gold-500" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <blockquote
                  className={`mt-5 text-[0.92rem] leading-[1.75] ${
                    t.approved ? 'text-plum-900/80' : 'italic text-plum-900/40'
                  }`}
                >
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-auto pt-6">
                  <span className="block h-px w-10 bg-gold-600/50" aria-hidden="true" />
                  <span className="mt-4 block font-display text-[1.12rem] text-plum-800">
                    {t.name}
                  </span>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[0.78rem] text-plum-900/60">
                    <span className="font-medium text-plum-900/75">{t.treatment}</span>
                    {t.location && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{t.location}</span>
                      </>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}