import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

interface Crumb {
  label: string;
  to?: string;
}

export function PageHero({
  label,
  title,
  intro,
  crumbs = [],
  image,
  imageAlt







}: {label?: string;title: string;intro?: string;crumbs?: Crumb[];image?: string;imageAlt?: string;}) {
  return (
    <section className="relative isolate overflow-hidden bg-plum-800 pb-14 pt-28 lg:pb-20 lg:pt-36">
      {image &&
      <>
          <img
          src={image}
          alt={imageAlt ?? ''}
          aria-hidden={imageAlt ? undefined : true}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        
          <div className="absolute inset-0 -z-10 bg-plum-800/70" aria-hidden="true" />
        </>
      }
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-[26rem] w-[26rem] rounded-full border border-gold-600/20" />
      

      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {crumbs.length > 0 &&
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.75rem] text-ivory/55">
              <li>
                <Link to="/" className="hover:text-gold-400">
                  Home
                </Link>
              </li>
              {crumbs.map((c) =>
            <li key={c.label} className="flex items-center gap-2">
                  <ChevronRightIcon className="h-3.5 w-3.5 text-ivory/30" aria-hidden="true" />
                  {c.to ?
              <Link to={c.to} className="hover:text-gold-400">
                      {c.label}
                    </Link> :

              <span className="text-gold-400">{c.label}</span>
              }
                </li>
            )}
            </ol>
          </nav>
        }

        <div className="mt-7 max-w-3xl">
          {label &&
          <Reveal>
              <p className="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] text-gold-400">
                <span className="h-px w-8 bg-gold-600" aria-hidden="true" />
                {label}
              </p>
            </Reveal>
          }
          <Reveal index={1}>
            <h1 className="mt-5 font-display text-[2.4rem] leading-[1.08] text-ivory sm:text-[3rem] lg:text-[3.6rem]">
              {title}
            </h1>
          </Reveal>
          {intro &&
          <Reveal index={2}>
              <p className="mt-6 max-w-2xl text-[0.98rem] leading-[1.8] text-ivory/70">{intro}</p>
            </Reveal>
          }
        </div>
      </div>
    </section>);

}