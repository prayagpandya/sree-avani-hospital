import { useEffect } from 'react';
import { hospital } from '../data/hospital';

const setMeta = (selector: string, attr: string, value: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Sets the document title, meta description and Open Graph tags per page.
 */
export function useSeo({
  title,
  description,
  image




}: {title?: string;description?: string;image?: string;}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${hospital.name}` : hospital.seo.title;
    const pageDesc = description ?? hospital.seo.description;

    document.title = pageTitle;
    setMeta('meta[name="description"]', 'name', 'description', pageDesc);
    setMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', pageDesc);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', hospital.name);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    if (image) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    }
  }, [title, description, image]);
}