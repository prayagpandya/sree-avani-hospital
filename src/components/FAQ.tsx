import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { faqs as generalFaqs } from '../data/faq';
import { hospital } from '../data/hospital';

interface FaqItem {
  q: string;
  a: string;
}

export function FAQ({
  items = generalFaqs,
  title = 'Questions women ask us',
  label = 'FAQ',
  showDisclaimer = true





}: {items?: FaqItem[];title?: string;label?: string;showDisclaimer?: boolean;}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionHeading label={label} title={title} />
            {showDisclaimer &&
            <Reveal index={3}>
                <p className="mt-8 border-l-2 border-gold-600 pl-4 text-[0.78rem] leading-[1.7] text-plum-900/55">
                  {hospital.disclaimer}
                </p>
              </Reveal>
            }
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-plum-900/8 border-y border-plum-900/8">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.q}>
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left">
                        
                        <span
                          className={`font-display text-[1.2rem] leading-snug transition-colors duration-200 ease-premium sm:text-[1.3rem] ${
                          isOpen ? 'text-plum-700' : 'text-plum-900/85'}`
                          }>
                          
                          {item.q}
                        </span>
                        <PlusIcon
                          className={`mt-1 h-5 w-5 shrink-0 text-gold-700 transition-transform duration-200 ease-premium ${
                          isOpen ? 'rotate-45' : ''}`
                          }
                          aria-hidden="true" />
                        
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen &&
                      <motion.dd
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden">
                        
                          <p className="max-w-2xl pb-6 pr-10 text-[0.9rem] leading-[1.8] text-plum-900/65">
                            {item.a}
                          </p>
                        </motion.dd>
                      }
                    </AnimatePresence>
                  </div>);

              })}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}