import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheckIcon, PhoneIcon, XIcon } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { hasPhone, hasWhatsapp, phoneHref, waHref } from '../utils/contact';

/**
 * Mobile: a persistent, highly visible Call / WhatsApp / Appointment action dock.
 * Desktop: a small dismissible assistance prompt, shown only after scrolling.
 */
export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Mobile action bar with 3 clearly visible, distinct button backgrounds */}
      <nav
        aria-label="Quick Actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-plum-900/15 bg-white/95 px-3 py-2 shadow-[0_-8px_30px_rgba(36,27,45,0.18)] backdrop-blur-md lg:hidden"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* 1. Call Button */}
          <a
            href={hasPhone() ? phoneHref() : '/contact'}
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-plum-900/15 bg-plum-100/90 py-2 text-plum-900 shadow-sm transition-all hover:bg-plum-200 active:scale-95"
            aria-label="Call Hospital"
          >
            <PhoneIcon className="h-5 w-5 text-plum-800" aria-hidden="true" />
            <span className="text-[0.72rem] font-bold tracking-tight">Call</span>
          </a>

          {/* 2. WhatsApp Button with official WhatsApp icon */}
          <a
            href={hasWhatsapp() ? waHref() : '/contact'}
            target={hasWhatsapp() ? '_blank' : undefined}
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-emerald-600/30 bg-emerald-50 py-2 text-emerald-900 shadow-sm transition-all hover:bg-emerald-100 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" brandColor />
            <span className="text-[0.72rem] font-bold tracking-tight">WhatsApp</span>
          </a>

          {/* 3. Appointment Button */}
          <Link
            to="/appointment"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-gold-700/20 bg-gold-600 py-2 text-plum-900 shadow-md transition-all hover:bg-gold-400 active:scale-95"
            aria-label="Book Appointment"
          >
            <CalendarCheckIcon className="h-5 w-5 text-plum-900" aria-hidden="true" />
            <span className="text-[0.72rem] font-extrabold tracking-tight">Book Now</span>
          </Link>
        </div>
      </nav>

      {/* Desktop assistance prompt */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.aside
            className="fixed bottom-7 right-7 z-40 hidden w-64 rounded-2xl bg-plum-800 p-5 text-ivory shadow-lift lg:block"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute right-3 top-3 text-ivory/60 transition-colors duration-200 ease-premium hover:text-ivory"
            >
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="font-display text-xl">Need assistance?</p>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-plum-200">
              Speak to the hospital about a consultation or an appointment.
            </p>
            <a
              href={hasPhone() ? phoneHref() : '/contact'}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-600 px-4 py-2.5 text-[0.8rem] font-semibold text-plum-900 transition-[background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Hospital
            </a>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}