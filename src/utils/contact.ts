import { hospital, telLink, whatsappLink } from '../data/hospital';

/** True once the hospital's real phone number has been added to the config. */
export const hasPhone = () => Boolean(hospital.contact.phoneHref);
export const hasWhatsapp = () => Boolean(hospital.contact.whatsappNumber);
export const hasMaps = () => Boolean(hospital.address.mapsUrl);
export const hasQr = () => Boolean(hospital.assets.locationQrUrl);

/**
 * Returns a usable href, or an empty string when the detail has not been
 * verified yet. Callers fall back to the contact page so a visitor is never
 * sent to a dead link or a made-up number.
 */
export const phoneHref = () => telLink();
export const waHref = () => whatsappLink();
export const mapsHref = () => hospital.address.mapsUrl;

export const addressText = () => hospital.address.lines.join(', ');