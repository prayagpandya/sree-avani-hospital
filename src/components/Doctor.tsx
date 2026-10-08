import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ButtonLink } from './ui/Buttons';
import { doctor } from '../data/doctor';

export function Doctor() {
  const reduce = useReducedMotion();

  return (
    <section id="doctor" className="bg-plum-100">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 top-10 rounded-[1.5rem] border border-gold-600/40" />
              
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-lift">
                <img
                  src={doctor.portrait}
                  alt={`Portrait of ${doctor.name}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover" />
                
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading label="MEET YOUR DOCTOR" title={doctor.name} />

            <Reveal index={2}>
              <p className="mt-4 text-[0.95rem] font-medium text-gold-700">
                {doctor.qualifications}
              </p>
              <p className="mt-2 text-[0.9rem] text-plum-900/70">
                {doctor.roles.join(' · ')}
              </p>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.8] text-plum-900/70">
                {doctor.intro}
              </p>
            </Reveal>

            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {doctor.focusAreas.map((area, i) =>
              <Reveal key={area.title} index={i}>
                  <dt className="font-display text-[1.25rem] text-plum-800">{area.title}</dt>
                  <dd className="mt-1.5 text-[0.85rem] leading-[1.7] text-plum-900/60">
                    {area.text}
                  </dd>
                </Reveal>
              )}
            </dl>

            <Reveal index={4}>
              <div className="mt-11 flex flex-wrap gap-3">
                <ButtonLink to="/appointment" variant="primary">
                  Book Consultation
                </ButtonLink>
                <ButtonLink to="/doctor" variant="outline">
                  Full profile
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}