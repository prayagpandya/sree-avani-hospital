import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** Small brand label above the title. Use sparingly. */
  label?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  as = 'h2'
}: SectionHeadingProps) {
  const Title = as;
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label &&
      <Reveal>
          <div
          className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          
            <span className="h-px w-8 bg-gold-600" aria-hidden="true" />
            <span
            className={`text-xs font-medium tracking-[0.18em] ${
            tone === 'light' ? 'text-gold-400' : 'text-gold-700'}`
            }>
            
              {label}
            </span>
          </div>
        </Reveal>
      }
      <Reveal index={1}>
        <Title
          className={`mt-4 font-display text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3rem] ${
          tone === 'light' ? 'text-ivory' : 'text-plum-800'}`
          }>
          
          {title}
        </Title>
      </Reveal>
      {intro &&
      <Reveal index={2}>
          <p
          className={`mt-5 text-[0.98rem] leading-[1.75] ${
          tone === 'light' ? 'text-plum-200' : 'text-plum-900/70'}`
          }>
          
            {intro}
          </p>
        </Reveal>
      }
    </div>);

}