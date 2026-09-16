import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheckIcon, MessageCircleIcon, PhoneIcon, XIcon } from 'lucide-react';
import { hasPhone, hasWhatsapp, phoneHref, waHref } from '../utils/contact';

/**
 * Mobile: a persistent Call / WhatsApp / Appointment action bar.
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
      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-plum-900/10 bg-ivory/97 backdrop-blur-sm lg:hidden">
        <div className="grid grid-cols-3">
          <a
            href={hasPhone() ? phoneHref() : '/contact'}
            className="flex flex-col items-center gap-1 py-2.5 text-[0.68rem] font-medium tracking-wide text-plum-800">
            
            <PhoneIcon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            Call
          </a>
          <a
            href={hasWhatsapp() ? waHref() : '/contact'}
            target={hasWhatsapp() ? '_blank' : undefined}
            rel="noreferrer"
            className="flex flex-col items-center gap-1 border-x border-plum-900/10 py-2.5 text-[0.68rem] font-medium tracking-wide text-plum-800">
            
            <MessageCircleIcon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            WhatsApp
          </a>
          <Link
            to="/contact#appointment"
            className="flex flex-col items-center gap-1 bg-gold-600 py-2.5 text-[0.68rem] font-semibold tracking-wide text-plum-900">
            
            <CalendarCheckIcon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            Appointment
          </Link>
        </div>
      </div>

      {/* Desktop assistance prompt */}
      <AnimatePresence>
        {visible && !dismissed &&
        <motion.aside
          className="fixed bottom-7 right-7 z-40 hidden w-64 rounded-2xl bg-plum-800 p-5 text-ivory shadow-lift lg:block"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
          
            <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute right-3 top-3 text-ivory/60 transition-colors duration-200 ease-premium hover:text-ivory">
            
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="font-display text-xl">Need assistance?</p>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-plum-200">
              Speak to the hospital about a consultation or an appointment.
            </p>
            <a
            href={hasPhone() ? phoneHref() : '/contact'}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-600 px-4 py-2.5 text-[0.8rem] font-semibold text-plum-900 transition-[background-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-gold-400">
            
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Hospital
            </a>
          </motion.aside>
        }
      </AnimatePresence>
    </>);

}