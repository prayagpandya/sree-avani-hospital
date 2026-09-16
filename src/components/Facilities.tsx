import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { facilities, facilityNotes } from '../data/facilities';

export function Facilities() {
  const [open, setOpen] = useState<number | null>(null);
  const [featured, ...rest] = facilities;

  return (
    <section id="facilities" className="bg-[#fbf9f4]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-600" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.18em] text-gold-700">
                  OUR FACILITIES
                </span>
              </div>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 max-w-xl font-display text-[2.4rem] font-normal leading-[1.06] text-[#17372d] sm:text-[3rem] lg:text-[3.8rem]">
                A hospital built for comfort and privacy
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.7] text-[#292b28]/70">
                From the reception to the patient rooms, the hospital is arranged so that a visit feels calm and private at every step.
              </p>
            </Reveal>
          </div>

          <Reveal index={2} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-x-6 border-l border-[#17372d]/15 pl-6 sm:gap-x-10 sm:pl-8">
              <ul className="space-y-2.5 text-[0.8rem] leading-[1.45] text-[#34584b] sm:text-[0.86rem]">
                {facilityNotes.slice(0, 4).map((note) =>
                <li key={note}>{note}</li>
                )}
              </ul>
              <ul className="space-y-2.5 border-l border-[#17372d]/15 pl-6 text-[0.8rem] leading-[1.45] text-[#34584b] sm:pl-10 sm:text-[0.86rem]">
                {facilityNotes.slice(4).map((note) =>
                <li key={note}>{note}</li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <Reveal className="md:col-span-2 lg:col-span-7">
            <button
              type="button"
              onClick={() => setOpen(0)}
              className="group relative block h-[360px] w-full overflow-hidden rounded-[10px] text-left sm:h-[460px] lg:h-[540px]">
              <img
                src={featured.src}
                alt={featured.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-premium group-hover:scale-[1.03]" />
              <span className="absolute inset-x-0 bottom-0 bg-[#17372d]/95 px-5 py-4 text-[#f8f5ed] sm:px-6 sm:py-5">
                <span className="block font-display text-[1.35rem] sm:text-[1.55rem]">
                  {featured.category}
                </span>
                <span className="mt-1 block text-[0.78rem] text-[#f8f5ed]/70">
                  Tap to view larger <span aria-hidden="true">&#8594;</span>
                </span>
              </span>
            </button>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-2 lg:col-span-5 lg:gap-5">
            {rest.slice(0, 4).map((image, i) =>
            <Reveal key={image.src} index={i}>
                <button
                type="button"
                onClick={() => setOpen(i + 1)}
                className="group block h-[220px] w-full overflow-hidden rounded-[10px] bg-white text-left sm:h-[250px] lg:h-[260px]">
                  <span className="block h-[178px] overflow-hidden sm:h-[205px] lg:h-[215px]">
                    <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]" />
                  </span>
                  <span className="flex h-[42px] items-center px-4 font-display text-[1rem] text-[#17372d] sm:h-[45px]">
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