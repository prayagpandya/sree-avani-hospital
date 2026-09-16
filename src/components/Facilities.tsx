import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { facilities, facilityNotes } from '../data/facilities';

export function Facilities() {
  const [open, setOpen] = useState<number | null>(null);
  const [featured, ...rest] = facilities;

  return (
    <section id="facilities" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="OUR FACILITIES"
            title="A hospital built for comfort and privacy"
            intro="From the reception to the patient rooms, the hospital is arranged so that a visit feels calm and private at every step." />
          
          <Reveal index={2}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 lg:max-w-sm">
              {facilityNotes.map((note) =>
              <li key={note} className="text-[0.8rem] text-plum-900/60">
                  {note}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setOpen(0)}
              className="group block w-full overflow-hidden rounded-2xl text-left shadow-soft">
              
              <span className="relative block overflow-hidden">
                <img
                  src={featured.src}
                  alt={featured.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04] lg:aspect-[16/12]" />
                
              </span>
              <span className="block bg-plum-800 px-6 py-4">
                <span className="block font-display text-[1.35rem] text-ivory">
                  {featured.category}
                </span>
                <span className="mt-1 block text-[0.78rem] text-ivory/60">
                  Tap to view larger
                </span>
              </span>
            </button>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:content-start">
            {rest.slice(0, 4).map((image, i) =>
            <Reveal key={image.src} index={i}>
                <button
                type="button"
                onClick={() => setOpen(i + 1)}
                className="group block w-full overflow-hidden rounded-2xl text-left shadow-soft">
                
                  <span className="relative block overflow-hidden">
                    <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.06]" />
                  
                  </span>
                  <span className="block bg-ivory px-4 py-3 text-[0.82rem] font-medium text-plum-800">
                    {image.category}
                  </span>
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      <Lightbox images={facilities} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>);

}