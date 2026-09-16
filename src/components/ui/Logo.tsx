import React from 'react';
import { hospital } from '../../data/hospital';

interface LogoProps {
  tone?: 'dark' | 'light';
  /** Compact lockup for the mobile drawer and footer bottom bar. */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Renders the supplied Sree Avani logo exactly as provided (no recolouring,
 * no cropping) as soon as `hospital.assets.logoUrl` is set. Until then a
 * neutral typographic lockup stands in so layout and spacing are correct.
 */
export function Logo({ tone = 'dark', size = 'md' }: LogoProps) {
  const heights = { sm: 'h-9', md: 'h-11', lg: 'h-14' };

  if (hospital.assets.logoUrl) {
    return (
      <img
        src={hospital.assets.logoUrl}
        alt={`${hospital.name} logo`}
        className={`${heights[size]} w-auto object-contain`} />);


  }

  const markSize = { sm: 'h-9 w-9', md: 'h-11 w-11', lg: 'h-14 w-14' };
  const titleSize = {
    sm: 'text-[0.95rem]',
    md: 'text-[1.1rem]',
    lg: 'text-[1.35rem]'
  };

  return (
    <span className="flex items-center gap-3">
      <span
        className={`${markSize[size]} flex shrink-0 items-center justify-center rounded-full border border-gold-600 font-display text-base ${
        tone === 'light' ? 'text-gold-400' : 'text-plum-700'}`
        }
        aria-hidden="true">
        
        SA
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display ${titleSize[size]} tracking-wide ${
          tone === 'light' ? 'text-ivory' : 'text-plum-800'}`
          }>
          
          Sree Avani
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-medium tracking-[0.22em] ${
          tone === 'light' ? 'text-gold-400' : 'text-gold-700'}`
          }>
          
          WOMEN&apos;S HOSPITAL
        </span>
      </span>
    </span>);

}