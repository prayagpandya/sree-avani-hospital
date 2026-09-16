import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import type { Treatment } from '../types/content';

export function TreatmentCard({
  treatment,
  index = 0



}: {treatment: Treatment;index?: number;}) {
  return (
    <Reveal as="article" index={index} className="group h-full">
      <Link
        to={`/treatments/${treatment.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-[transform,box-shadow] duration-300 ease-premium group-hover:-translate-y-1.5 group-hover:shadow-lift">
        
        <div className="relative overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]" />
          
          <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-[0.65rem] font-medium tracking-[0.1em] text-plum-700">
            {treatment.group.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[1.45rem] leading-tight text-plum-800">
            {treatment.title}
          </h3>
          <p className="mt-3 text-[0.87rem] leading-[1.75] text-plum-900/60">
            {treatment.summary}
          </p>
          <span className="mt-auto flex items-center gap-2 pt-6 text-[0.8rem] font-medium text-gold-700">
            Learn more
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
              aria-hidden="true" />
            
          </span>
        </div>
      </Link>
    </Reveal>);

}