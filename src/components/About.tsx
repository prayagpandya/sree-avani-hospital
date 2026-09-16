import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { hospital } from '../data/hospital';

const commitments = [
"Pregnancy and maternity care, from the first visit through recovery",
'Gynaecological evaluation and treatment at every age',
'Fertility counselling and structured evaluation for couples',
'Minimal-access laparoscopic gynaecological surgery',
'Patient education, so decisions are made with understanding',
'Emotional support for the woman and her family'];


export function About({ withCta = true }: {withCta?: boolean;}) {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative">
              
              <div className="overflow-hidden rounded-[1.75rem] rounded-bl-[6rem] shadow-lift">
                <img
                  src={hospital.assets.buildingUrl}
                  alt={`The ${hospital.name} building`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover" />
                
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border border-gold-600/40 lg:block" />
              
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <SectionHeading
              label="ABOUT SREE AVANI"
              title="Where expertise meets compassion"
              intro="Sree Avani Women's Hospital is dedicated to comprehensive healthcare for women in a safe, respectful and compassionate environment. Care here is consultation-led — we listen first, explain clearly, and plan treatment around the woman in front of us." />
            

            <Reveal index={3}>
              <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {commitments.map((item) =>
                <li key={item} className="flex gap-3 text-[0.87rem] leading-[1.6] text-plum-900/70">
                    <span
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-gold-600"
                    aria-hidden="true" />
                  
                    {item}
                  </li>
                )}
              </ul>
            </Reveal>

            {withCta &&
            <Reveal index={4}>
                <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-2 border-b border-gold-600 pb-1.5 text-[0.85rem] font-medium text-plum-800 transition-colors duration-200 ease-premium hover:text-plum-600">
                
                  Know more about us
                  <ArrowRightIcon
                  className="h-4 w-4 text-gold-700 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                  aria-hidden="true" />
                
                </Link>
              </Reveal>
            }
          </div>
        </div>
      </div>
    </section>);

}