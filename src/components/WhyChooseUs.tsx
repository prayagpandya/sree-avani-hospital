import React from 'react';
import {
  ClipboardListIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MessagesSquareIcon,
  ScanLineIcon,
  StethoscopeIcon } from
'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const reasons = [
{
  icon: HeartHandshakeIcon,
  title: "Compassionate women's care",
  text: 'A setting where concerns can be raised without hesitation, and are taken seriously.'
},
{
  icon: StethoscopeIcon,
  title: 'Experienced medical expertise',
  text: 'Obstetric, gynaecological and laparoscopic care led by a qualified specialist.'
},
{
  icon: ClipboardListIcon,
  title: 'Personalised attention',
  text: 'Treatment plans written for your history, not a standard protocol.'
},
{
  icon: ScanLineIcon,
  title: 'Modern medical support',
  text: 'Diagnostic and surgical support available when your care needs it.'
},
{
  icon: HomeIcon,
  title: 'Comfortable environment',
  text: 'Private consultation and patient rooms designed to feel calm, not clinical.'
},
{
  icon: MessagesSquareIcon,
  title: 'Patient-centered approach',
  text: 'Options and findings explained fully, so the decision remains yours.'
}];


export function WhyChooseUs() {
  return (
    <section className="bg-plum-800">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          label="WHY SREE AVANI"
          title="Care designed around you"
          tone="light"
          align="center" />
        

        <ul className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) =>
          <Reveal as="li" key={title} index={i % 3} className="group">
              <Icon
              className="h-6 w-6 text-gold-400 transition-transform duration-200 ease-premium group-hover:-translate-y-0.5"
              aria-hidden="true" />
            
              <h3 className="mt-4 font-display text-[1.35rem] leading-tight text-ivory">
                {title}
              </h3>
              <p className="mt-2.5 text-[0.86rem] leading-[1.75] text-ivory/60">{text}</p>
              <span
              className="mt-5 block h-px w-10 bg-gold-600/50 transition-[width] duration-300 ease-premium group-hover:w-20"
              aria-hidden="true" />
            
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}