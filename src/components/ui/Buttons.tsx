import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost';

const base =
'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-premium active:translate-y-px';

const variants: Record<Variant, string> = {
  primary:
  'bg-plum-700 text-ivory hover:bg-plum-800 hover:-translate-y-0.5 shadow-soft',
  gold: 'bg-gold-600 text-plum-900 hover:bg-gold-400 hover:-translate-y-0.5 shadow-soft',
  outline:
  'border border-plum-700/30 text-plum-800 hover:border-plum-700 hover:bg-plum-100',
  ghost: 'border border-ivory/40 text-ivory hover:bg-ivory/10'
};

export function ButtonLink({
  to,
  variant = 'primary',
  className = '',
  children





}: {to: string;variant?: Variant;className?: string;children: React.ReactNode;}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>);

}

export function ButtonAnchor({
  href,
  variant = 'primary',
  className = '',
  children,
  external = true






}: {href: string;variant?: Variant;className?: string;children: React.ReactNode;external?: boolean;}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}>
      
      {children}
    </a>);

}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: Variant;}) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>);

}