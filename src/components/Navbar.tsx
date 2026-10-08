import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Logo } from './ui/Logo';
import { navLinks } from '../data/hospital';
import { hasPhone, phoneHref } from '../utils/contact';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !overHero;
  const linkTone = solid ? 'text-plum-900/75 hover:text-plum-700' : 'text-ivory/85 hover:text-ivory';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-premium ${
      solid ?
      'border-b border-plum-900/5 bg-ivory/95 shadow-soft backdrop-blur-sm' :
      'border-b border-transparent bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between px-5 lg:h-[5.25rem] lg:px-8">
        <Link to="/" aria-label="Go to homepage" className="shrink-0">
          <Logo tone={solid ? 'dark' : 'light'} size="md" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) =>
            <NavLink
            key={link.label}
            to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap text-[0.82rem] font-medium tracking-wide transition-colors duration-200 ease-premium ${
                isActive ? (solid ? 'text-plum-800' : 'text-gold-400') : linkTone}`
              }>
            
                {link.label}
            </NavLink>
            )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={hasPhone() ? phoneHref() : '/contact'}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8rem] font-medium transition-colors duration-200 ease-premium ${
            solid ?
            'border-plum-900/15 text-plum-800 hover:border-plum-700 hover:bg-plum-100' :
            'border-ivory/40 text-ivory hover:bg-ivory/10'}`
            }>
            
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <Link
            to="/appointment"
            className="inline-flex items-center rounded-full bg-gold-600 px-5 py-2.5 text-[0.8rem] font-semibold text-plum-900 shadow-soft transition-[background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-gold-400">
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 ease-premium xl:hidden ${
          solid ? 'border-plum-900/15 text-plum-800' : 'border-ivory/40 text-ivory'}`
          }>
          
          <MenuIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            className="fixed inset-0 z-40 bg-plum-900/50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setOpen(false)} />
          
            <motion.div
            role="dialog"
            aria-label="Menu"
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-ivory px-6 py-6 xl:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
            
              <div className="flex items-center justify-between">
                <Link to="/" aria-label="Go to homepage" className="shrink-0">
                  <Logo size="sm" />
                </Link>
                <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-plum-900/15 text-plum-800">
                
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 h-px w-full bg-gold-600/40" aria-hidden="true" />

              <nav aria-label="Mobile" className="mt-6 flex flex-col">
                {navLinks.map((link) =>
                <NavLink
                key={link.label}
                to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-plum-900/5 py-3.5 font-display text-xl ${
                    isActive ? 'text-plum-900' : 'text-plum-800'}`
                  }>
                
                      {link.label}
                    </NavLink>
                )}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-gold-600 px-5 py-3.5 text-sm font-semibold text-plum-900">
                  Book Appointment
                </Link>
                <a
                href={hasPhone() ? phoneHref() : '/contact'}
                className="flex items-center justify-center gap-2 rounded-full border border-plum-900/15 px-5 py-3.5 text-sm font-medium text-plum-800">
                
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call the hospital
                </a>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}