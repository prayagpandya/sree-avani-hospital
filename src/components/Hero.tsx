import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, BabyIcon, HeartPulseIcon, MicroscopeIcon, StethoscopeIcon } from 'lucide-react';
import { ButtonLink } from './ui/Buttons';

const highlights = [
{ icon: HeartPulseIcon, label: 'Round-the-clock care' },
{ icon: StethoscopeIcon, label: 'Expert gynaecology' },
{ icon: BabyIcon, label: 'Maternity care' },
{ icon: MicroscopeIcon, label: 'Infertility & laparoscopy' }];


const HERO_IMAGE = "/f28e6b0c-0127-4284-a2cc-a6b3250aeb0c.jpg";


export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.23, 1, 0.32, 1] as const;

  const rise = (delay: number) =>
  reduce ?
  {} :
  {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease }
  };

  return (
    <section className="relative isolate overflow-hidden bg-plum-800 pb-16 pt-28 lg:pb-24 lg:pt-32">
      {/* Decorative gold arcs drawn from the logo's circular mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full border border-gold-600/25" />
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full border border-gold-600/15" />
      

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-6">
          <motion.p
            {...rise(0.05)}
            className="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] text-gold-400">
            
            <span className="h-px w-8 bg-gold-600" aria-hidden="true" />
            SREE AVANI WOMEN&apos;S HOSPITAL
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="mt-6 font-display text-[2.6rem] leading-[1.06] text-ivory sm:text-[3.4rem] lg:text-[4.1rem]">
            
            Compassionate care for every stage of{' '}
            <span className="italic text-gold-400">womanhood</span>
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="mt-7 max-w-xl text-[1rem] leading-[1.8] text-ivory/70">
            
            At Sree Avani Women&apos;s Hospital we combine experienced medical
            expertise with compassionate, personalised care for women through
            every stage of life.
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/appointment" variant="gold" className="px-7 py-3.5">
              Book an Appointment
            </ButtonLink>
            <ButtonLink to="/treatments" variant="ghost" className="px-7 py-3.5">
              Explore Treatments
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...rise(0.36)}
            className="mt-12 grid gap-x-6 gap-y-4 border-t border-ivory/10 pt-8 sm:grid-cols-2">
            
            {highlights.map(({ icon: Icon, label }) =>
            <li key={label} className="flex items-center gap-3">
                <Icon className="h-[1.1rem] w-[1.1rem] shrink-0 text-gold-400" aria-hidden="true" />
                <span className="text-[0.85rem] text-ivory/75">{label}</span>
              </li>
            )}
          </motion.ul>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative mx-auto max-w-[32rem] lg:ml-auto lg:mr-0">
            
            <div className="overflow-hidden rounded-[1.75rem] rounded-tr-[7rem] shadow-lift">
              <img
                src={HERO_IMAGE}
                alt="A mother holding her newborn baby in a bright maternity room"
                className="aspect-[4/5] w-full object-cover"
                loading="eager" />
              
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full border border-gold-600/40 sm:block" />
            
          </motion.div>
        </div>
      </div>
    </section>);

}