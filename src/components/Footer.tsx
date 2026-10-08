import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Logo } from './ui/Logo';
import { hospital } from '../data/hospital';
import { activeTreatments } from '../data/treatments';
import { hasQr, hasWhatsapp, waHref } from '../utils/contact';

const siteLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Doctor', to: '/doctor' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book Appointment', to: '/appointment' }
];


export function Footer() {
  return (
    <footer className="bg-plum-900 text-ivory">
      <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-16 lg:px-8 lg:pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Go to homepage" className="inline-block">
              <Logo tone="light" size="lg" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.9rem] leading-[1.8] text-ivory/65">
              {hospital.name} — {hospital.tagline}
            </p>
            {hospital.social.length > 0 &&
            <div className="mt-6 flex gap-3">
                {hospital.social.map((s) =>
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ivory/20 px-4 py-2 text-xs transition-colors duration-200 ease-premium hover:border-gold-400 hover:text-gold-400">
                
                    {s.label}
                  </a>
              )}
              </div>
            }
          </div>

          <nav aria-label="Site" className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400">
              EXPLORE
            </h2>
            <ul className="mt-5 space-y-3">
              {siteLinks.map((l) =>
              <li key={l.label}>
                  <Link
                  to={l.to}
                  className="text-[0.88rem] text-ivory/70 transition-colors duration-200 ease-premium hover:text-gold-400">
                  
                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Treatments" className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400">
              TREATMENTS
            </h2>
            <ul className="mt-5 space-y-3">
              {activeTreatments().
              slice(0, 7).
              map((t) =>
              <li key={t.slug}>
                    <Link
                  to={`/treatments/${t.slug}`}
                  className="text-[0.88rem] text-ivory/70 transition-colors duration-200 ease-premium hover:text-gold-400">
                  
                      {t.title}
                    </Link>
                  </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400">
              REACH US
            </h2>
            <ul className="mt-5 space-y-4 text-[0.88rem] text-ivory/70">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>
                  {hospital.address.lines.map((line) =>
                  <span key={line} className="block">
                      {line}
                    </span>
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>{hospital.contact.phoneDisplay}</span>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" brandColor={false} />
                {hasWhatsapp() ?
                <a href={waHref()} target="_blank" rel="noreferrer" className="hover:text-gold-400">
                    {hospital.contact.phoneDisplay}
                  </a> :

                null
                }
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a href={`mailto:${hospital.contact.email}`} className="hover:text-gold-400">
                  {hospital.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ivory">
                {hasQr() ?
                <img
                  src={hospital.assets.locationQrUrl}
                  alt={`QR code opening the location of ${hospital.name}`}
                  className="h-full w-full object-contain p-1.5" /> :


                <span className="px-2 text-center text-[0.55rem] font-medium leading-tight text-plum-900/50">
                    LOCATION QR
                  </span>
                }
              </div>
              <p className="text-[0.75rem] leading-relaxed text-ivory/55">
                Scan to open the hospital location on your phone.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-ivory/10" aria-hidden="true" />

        <p className="mt-8 max-w-3xl text-[0.75rem] leading-relaxed text-ivory/45">
          {hospital.disclaimer}
        </p>

        <div className="mt-6 flex flex-col gap-3 text-[0.75rem] text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {hospital.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}