import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const steps = [
{
  no: '01',
  title: 'Book an appointment',
  text: 'Call, message on WhatsApp or request a slot through this website.'
},
{
  no: '02',
  title: 'Meet your doctor',
  text: 'An unhurried consultation — history, examination and your questions.'
},
{
  no: '03',
  title: 'Personalised treatment plan',
  text: 'Findings explained, options discussed, and a written plan to follow.'
},
{
  no: '04',
  title: 'Continued care & follow-up',
  text: 'Scheduled reviews, with the plan adjusted as your health changes.'
}];


export function PatientJourney() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          label="PATIENT JOURNEY"
          title="What to expect, from first call to follow-up"
          align="center" />
        

        <div className="relative mt-16">
          {/* Animated connecting line — horizontal on desktop, vertical on mobile */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[1.15rem] top-2 hidden w-px origin-top bg-gold-600/45 sm:block lg:left-0 lg:right-0 lg:top-[1.15rem] lg:h-px lg:w-full lg:origin-left"
            style={{ bottom: '0.5rem' }}
            initial={reduce ? undefined : { scaleY: 0, scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleY: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} />
          

          <ol className="relative grid gap-11 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) =>
            <Reveal
              as="li"
              key={step.no}
              index={i}
              className="flex gap-5 sm:pl-0 lg:block">
              
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum-800 font-display text-[0.9rem] text-gold-400">
                  {step.no}
                </span>
                <div className="lg:mt-6">
                  <h3 className="font-display text-[1.4rem] leading-tight text-plum-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[0.86rem] leading-[1.75] text-plum-900/60">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}