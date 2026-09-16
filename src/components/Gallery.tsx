import React, { useMemo, useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { galleryCategories, galleryImages } from '../data/gallery';

export function Gallery({ limit }: {limit?: number;}) {
  const [filter, setFilter] = useState<string>('All');
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(() => {
    const filtered =
    filter === 'All' ? galleryImages : galleryImages.filter((i) => i.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <section id="gallery" className="bg-[#fbf9f4]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#b89045]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#b89045]">GALLERY</span>
            </div>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-4 font-display text-[2.35rem] font-normal leading-[1.06] text-[#17372d] sm:text-[3rem]">
              Inside Sree Avani
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-[1.65] text-[#292b28]/70 sm:text-base">
              A look at the hospital, the consultation spaces and the team who care for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-7 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Gallery filters">
          {galleryCategories.map((cat) =>
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={'shrink-0 rounded-full px-4 py-2 text-[0.72rem] font-medium transition-colors duration-200 ease-premium ' + (
            filter === cat ?
            'bg-[#17372d] text-white' :
            'border border-[#d9d1c0] bg-transparent text-[#34584b] hover:border-[#34584b] hover:text-[#17372d]')}
            >
            
              {cat}
            </button>
          )}
        </div>

        {visible.length > 0 && (() => {
          const featured = visible[0];
          const patientCare = visible.find((image, index) => image.category === 'Patient Care' && index > 0);
          const supporting = visible.filter((image) => image !== patientCare).slice(1, 5);
          const used = new Set([featured, ...supporting, patientCare].filter(Boolean));
          const additional = visible.filter((image) => !used.has(image));
          const imageButton = (image: typeof visible[number], index: number, className: string, labelClass = '') => (
          <button
            type="button"
            onClick={() => setOpen(index)}
            className={'group relative block w-full overflow-hidden rounded-[9px] text-left ' + className}
            aria-label={'View image: ' + image.alt}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]" />
            {labelClass &&
            <span className={labelClass}>{image.category}</span>}
          </button>);

          return (
            <>
              <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
                <Reveal className="md:col-span-2 lg:col-span-7">
                  {imageButton(
                    featured,
                    0,
                    'h-[350px] sm:h-[420px] lg:h-[500px]',
                    'absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17372d]/95 via-[#17372d]/30 to-transparent px-5 pb-5 pt-14 font-display text-[1.2rem] text-white sm:px-6 sm:pb-6 sm:text-[1.4rem]'
                  )}
                  <span className="pointer-events-none absolute bottom-2.5 left-5 text-[0.72rem] text-white/75 sm:left-6">Tap to view images <span aria-hidden="true">&#8594;</span></span>
                </Reveal>

                <div className="grid gap-3 sm:grid-cols-2 md:col-span-2 lg:col-span-5 lg:gap-4">
                  {supporting.map((image, i) => {
                    const index = visible.indexOf(image);
                    return (
                      <Reveal key={image.src + index} index={i}>
                        {imageButton(
                          image,
                          index,
                          'h-[210px] bg-white sm:h-[230px] lg:h-[238px]',
                          'absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent px-3 pb-3 pt-8 font-sans text-[0.75rem] text-[#17372d] sm:px-4 sm:text-[0.8rem]'
                        )}
                      </Reveal>
                    );
                  })}
                </div>

                {patientCare &&
                <Reveal className="md:col-span-2 lg:col-span-5 lg:col-start-8">
                    {imageButton(
                      patientCare,
                      visible.indexOf(patientCare),
                      'h-[150px] sm:h-[170px]',
                      'absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17372d]/90 to-transparent px-4 pb-3 pt-10 text-[0.78rem] text-white'
                    )}
                  </Reveal>
                }
              </div>

              {additional.length > 0 &&
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {additional.map((image) => {
                    const index = visible.indexOf(image);
                    return (
                      <Reveal key={image.src + index} index={index % 4}>
                        {imageButton(
                          image,
                          index,
                          'h-[180px] sm:h-[210px]',
                          'absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17372d]/90 to-transparent px-3 pb-3 pt-8 text-[0.72rem] text-white'
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              }
            </>
          );
        })()}

        {visible.length === 0 &&
        <p className="mt-8 text-[0.9rem] text-plum-900/60">
            Photographs for this category will be added soon.
          </p>
        }
      </div>

      <Lightbox images={visible} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>);

}