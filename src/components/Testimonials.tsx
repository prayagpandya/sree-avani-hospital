import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, StarIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { testimonials } from '../data/testimonials';
import { hospital } from '../data/hospital';

function GoogleIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const approxIndex = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(Math.max(approxIndex, 0), testimonials.length - 1));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.85, 420);
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToDot = (idx: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
      });
    }
  };

  const googleMapsUrl = hospital.address.mapsUrl || 'https://maps.app.goo.gl/fe7xQgFMk3M1J1e59';

  return (
    <section id="patient-stories" className="overflow-hidden bg-[#FAF6F0] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Top Header & Google Badge */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading
              label="PATIENT EXPERIENCES"
              title="Verified Google Reviews"
              intro="Real feedback and heartfelt reviews shared by mothers and families on Google Maps."
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Google Rating Pill */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-plum-900/10 bg-white px-4 py-2.5 shadow-soft transition-all duration-200 hover:border-gold-600/40 hover:shadow-card"
            >
              <GoogleIcon className="h-5 w-5 shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[0.95rem] font-bold text-plum-900">5.0</span>
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 fill-current text-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-[0.72rem] text-plum-900/60 group-hover:text-plum-800">
                  Google Maps Reviews
                </p>
              </div>
              <ExternalLinkIcon className="ml-1 h-3.5 w-3.5 text-plum-900/40 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            {/* Desktop Navigation Arrows */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left through reviews"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                  canScrollLeft
                    ? 'border-plum-900/20 bg-white text-plum-900 shadow-soft hover:border-gold-600 hover:bg-gold-50 hover:text-plum-950'
                    : 'cursor-not-allowed border-plum-900/10 bg-white/50 text-plum-900/30'
                }`}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right through reviews"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                  canScrollRight
                    ? 'border-plum-900/20 bg-white text-plum-900 shadow-soft hover:border-gold-600 hover:bg-gold-50 hover:text-plum-950'
                    : 'cursor-not-allowed border-plum-900/10 bg-white/50 text-plum-900/30'
                }`}
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Reviews Carousel */}
        <div className="relative mt-10">
          <ul
            ref={scrollRef}
            onScroll={checkScroll}
            tabIndex={0}
            aria-label="Patient Google reviews carousel"
            className="flex gap-5 overflow-x-auto pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth focus:outline-none"
          >
            {testimonials.map((t, i) => (
              <Reveal
                as="li"
                key={t.id}
                index={i % 3}
                className="w-[85vw] max-w-[340px] shrink-0 snap-start sm:w-[380px] lg:w-[410px]"
              >
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-plum-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:border-gold-600/30 hover:shadow-card sm:p-7">
                  <div>
                    {/* Header: Google Review Badge & Star Rating */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[0.72rem] font-medium text-slate-700 border border-slate-200/60">
                        <GoogleIcon className="h-3.5 w-3.5" />
                        <span>Google Review</span>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${t.rating || 5} out of 5 stars`}>
                        {[...Array(t.rating || 5)].map((_, sIdx) => (
                          <StarIcon key={sIdx} className="h-4 w-4 fill-current text-amber-500" aria-hidden="true" />
                        ))}
                      </div>
                    </div>

                    {/* Review quote */}
                    <blockquote className="mt-5 text-[0.93rem] leading-[1.8] text-plum-900/80">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Review-giver's name and details below testimonial */}
                  <figcaption className="mt-7 pt-5 border-t border-plum-900/8">
                    <span className="block h-px w-8 bg-gold-600/60" aria-hidden="true" />
                    <span className="mt-3 block font-display text-[1.12rem] font-medium text-plum-800">
                      {t.name}
                    </span>
                    <div className="mt-1 flex items-center gap-1.5 text-[0.76rem] text-plum-900/55">
                      {t.location && <span>{t.location}</span>}
                      {t.date && (
                        <>
                          <span aria-hidden="true">•</span>
                          <span>{t.date}</span>
                        </>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Bottom Mobile Controls & Dots */}
        <div className="mt-6 flex items-center justify-between sm:justify-center gap-4">
          <p className="text-[0.78rem] text-plum-900/50 sm:hidden">
            ← Swipe to view more reviews →
          </p>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => scrollToDot(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-6 bg-gold-600'
                    : 'w-2 bg-plum-900/20 hover:bg-plum-900/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                canScrollLeft
                  ? 'border-plum-900/20 bg-white text-plum-900'
                  : 'border-plum-900/10 bg-white/40 text-plum-900/30'
              }`}
            >
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                canScrollRight
                  ? 'border-plum-900/20 bg-white text-plum-900'
                  : 'border-plum-900/10 bg-white/40 text-plum-900/30'
              }`}
            >
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Call-to-action button to Google review */}
        <div className="mt-10 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white px-6 py-2.5 text-[0.84rem] font-medium text-plum-900 shadow-soft transition-all duration-200 hover:border-gold-600 hover:bg-gold-50/50 hover:text-plum-950"
          >
            <GoogleIcon className="h-4 w-4" />
            View or write a review on Google Maps
            <ExternalLinkIcon className="h-3.5 w-3.5 text-plum-900/50" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}