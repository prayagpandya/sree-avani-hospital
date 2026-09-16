import React, { useMemo, useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
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
    <section id="gallery" className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          label="GALLERY"
          title="Inside Sree Avani"
          intro="A look at the hospital, the consultation spaces and the team who care for you." />
        

        <div className="mt-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Gallery filters">
          {galleryCategories.map((cat) =>
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-[0.78rem] font-medium transition-colors duration-200 ease-premium ${
            filter === cat ?
            'bg-plum-800 text-ivory' :
            'border border-plum-900/12 text-plum-900/65 hover:border-plum-700 hover:text-plum-800'}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        <div className="mt-10 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[15rem] lg:grid-cols-4">
          {visible.map((image, i) =>
          <Reveal
            key={image.src + i}
            index={i % 4}
            className={image.wide ? 'col-span-2 row-span-1 sm:row-span-2' : ''}>
            
              <button
              type="button"
              onClick={() => setOpen(i)}
              className="group h-full w-full overflow-hidden rounded-2xl shadow-soft"
              aria-label={`View image: ${image.alt}`}>
              
                <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]" />
              
              </button>
            </Reveal>
          )}
        </div>

        {visible.length === 0 &&
        <p className="mt-10 text-[0.9rem] text-plum-900/60">
            Photographs for this category will be added soon.
          </p>
        }
      </div>

      <Lightbox images={visible} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>);

}