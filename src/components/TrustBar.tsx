import React from 'react';
import { HandHeartIcon, ShieldCheckIcon, SparklesIcon, UserRoundCheckIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const pillars = [
{
  icon: ShieldCheckIcon,
  title: "Experienced women's healthcare",
  text: 'Obstetric, gynaecological and surgical care under one roof.'
},
{
  icon: UserRoundCheckIcon,
  title: 'Personalised patient care',
  text: 'Every plan is built around your health and your circumstances.'
},
{
  icon: SparklesIcon,
  title: 'Advanced medical support',
  text: 'Minimal-access surgery and diagnostic support when needed.'
},
{
  icon: HandHeartIcon,
  title: 'Compassionate environment',
  text: 'Private, unhurried consultations in a calm setting.'
}];


export function TrustBar() {
  return (
    <section aria-label="Why women choose Sree Avani" className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-8 lg:py-16">
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) =>
          <Reveal as="li" key={title} index={i} className="flex flex-col">
              <Icon className="h-6 w-6 text-gold-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-[1.28rem] leading-tight text-plum-800">
                {title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-[1.7] text-plum-900/60">{text}</p>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}