import { MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ButtonAnchor, ButtonLink } from './ui/Buttons';
import { hospital } from '../data/hospital';
import { hasMaps, hasPhone, hasQr, hasWhatsapp, mapsHref, phoneHref, waHref } from '../utils/contact';

export function Location() {
  return (
    <section id="location" className="bg-plum-800">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              label="FIND US"
              title="Find Sree Avani Women's Hospital"
              tone="light" />
            

            <dl className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-gold-400">
                    ADDRESS
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-[1.7] text-ivory/80">
                    {hospital.address.lines.map((line) =>
                    <span key={line} className="block">
                        {line}
                      </span>
                    )}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-gold-400">
                    PHONE
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-ivory/80">
                    {hasPhone() ?
                    <a href={phoneHref()} className="hover:text-gold-400">
                        {hospital.contact.phoneDisplay}
                      </a> :

                    hospital.contact.phoneDisplay
                    }
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <WhatsAppIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-400" brandColor={false} />
                <div>
                  <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-gold-400">
                    WHATSAPP
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-ivory/80">
                    {hasWhatsapp() ?
                    <a href={waHref()} target="_blank" rel="noreferrer" className="hover:text-gold-400">
                      {hospital.contact.phoneDisplay}
                      </a> :

                    null
                    }
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <MailIcon className="mt-1 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-gold-400">
                    EMAIL
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-ivory/80">{hospital.contact.email}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:mt-10">
              {hasPhone() ?
              <ButtonAnchor href={phoneHref()} external={false} variant="gold" className="w-full sm:w-auto text-center justify-center">
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonAnchor> :

              <ButtonLink to="/contact" variant="gold" className="w-full sm:w-auto text-center justify-center">
                  Contact the hospital
                </ButtonLink>
              }
              {hasWhatsapp() &&
              <ButtonAnchor href={waHref()} variant="ghost" className="w-full sm:w-auto text-center justify-center">
                  <WhatsAppIcon className="h-4 w-4" brandColor />
                  {hospital.contact.phoneDisplay}
                </ButtonAnchor>
              }
              {hasMaps() &&
              <ButtonAnchor href={mapsHref()} variant="ghost" className="w-full sm:w-auto text-center justify-center">
                  <NavigationIcon className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </ButtonAnchor>
              }
            </div>
          </div>

          <Reveal index={1} className="lg:col-span-6">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] bg-ivory p-6 text-center sm:p-12">
              <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl border border-plum-900/10 bg-white p-3 sm:h-64 sm:w-64">
                {hasQr() ?
                <img
                  src={hospital.assets.locationQrUrl}
                  alt={`QR code that opens the location of ${hospital.name}`}
                  className="h-full w-full object-contain" /> :


                <span className="px-6 text-[0.78rem] leading-relaxed text-plum-900/45">
                    Location QR code — add the supplied QR image to the hospital
                    configuration and it appears here.
                  </span>
                }
              </div>
              <p className="mt-7 font-display text-[1.6rem] leading-tight text-plum-800">
                Scan to open location
              </p>
              <p className="mt-2 max-w-xs text-[0.85rem] leading-[1.7] text-plum-900/55">
                Open your phone camera and scan the code to navigate directly to the
                hospital.
              </p>
              <span className="mt-7 h-px w-12 bg-gold-600" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}