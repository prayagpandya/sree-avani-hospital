import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheckIcon, ChevronRightIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Logo } from './ui/Logo';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { navLinks } from '../data/hospital';
import { hasPhone, hasWhatsapp, phoneHref, waHref } from '../utils/contact';

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
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !overHero;
  const linkTone = solid ? 'text-plum-900/80 hover:text-plum-700' : 'text-ivory/90 hover:text-ivory';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-premium ${
          solid
            ? 'border-b border-plum-900/10 bg-ivory/95 shadow-soft backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[5.25rem] lg:px-8">
          <Link to="/" aria-label="Go to homepage" className="shrink-0">
            <Logo tone={solid ? 'dark' : 'light'} size="md" />
          </Link>

          {/* Desktop primary links */}
          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[0.85rem] font-medium tracking-wide transition-colors duration-200 ease-premium ${
                    isActive ? (solid ? 'font-semibold text-plum-900' : 'text-gold-400') : linkTone
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop action buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={hasPhone() ? phoneHref() : '/contact'}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8rem] font-medium transition-colors duration-200 ease-premium ${
                solid
                  ? 'border-plum-900/15 text-plum-800 hover:border-plum-700 hover:bg-plum-100'
                  : 'border-ivory/40 text-ivory hover:bg-ivory/10'
              }`}
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
            <Link
              to="/appointment"
              className="inline-flex items-center rounded-full bg-gold-600 px-5 py-2.5 text-[0.8rem] font-semibold text-plum-900 shadow-soft transition-[background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 ease-premium xl:hidden ${
              solid
                ? 'border-plum-900/15 bg-white/70 text-plum-900 hover:bg-plum-100'
                : 'border-ivory/40 bg-black/15 text-ivory backdrop-blur-sm hover:bg-ivory/20'
            }`}
          >
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] xl:hidden">
            {/* Dark Backdrop */}
            <motion.div
              className="fixed inset-0 bg-plum-900/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer with 100% OPAQUE background */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className="fixed inset-y-0 right-0 flex w-full max-w-[340px] flex-col border-l border-plum-900/10 p-5 shadow-2xl sm:p-6"
              style={{ backgroundColor: '#FCF9F4' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-plum-900/10 pb-4">
                <Link to="/" onClick={() => setOpen(false)} aria-label="Go to homepage">
                  <Logo size="sm" />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-plum-900/15 bg-white text-plum-900 shadow-sm transition-colors hover:bg-plum-100"
                >
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Mobile Navigation" className="mt-4 flex flex-1 flex-col overflow-y-auto py-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-plum-900/5 px-3 py-3.5 font-display text-lg tracking-wide transition-colors ${
                        isActive
                          ? 'font-semibold text-plum-900 bg-plum-100/60 rounded-lg'
                          : 'text-plum-900/80 hover:bg-plum-100/40 hover:text-plum-900'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronRightIcon className="h-4 w-4 text-plum-900/30" aria-hidden="true" />
                  </NavLink>
                ))}
              </nav>

              {/* Action Buttons at bottom of Drawer */}
              <div className="mt-auto border-t border-plum-900/10 pt-5">
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 px-5 py-3.5 text-sm font-semibold text-plum-900 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  <CalendarCheckIcon className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </Link>

                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <a
                    href={hasPhone() ? phoneHref() : '/contact'}
                    className="flex items-center justify-center gap-2 rounded-full border border-plum-900/15 bg-white px-3 py-3 text-xs font-semibold text-plum-800 shadow-sm transition-colors hover:bg-plum-100"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-gold-700" aria-hidden="true" />
                    Call Us
                  </a>
                  {hasWhatsapp() && (
                    <a
                      href={waHref()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-3 text-xs font-semibold text-emerald-800 shadow-sm transition-colors hover:bg-emerald-100"
                    >
                      <WhatsAppIcon className="h-4 w-4" brandColor />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}