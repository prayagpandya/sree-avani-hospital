import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  image,
  noindex = false
}: {title?: string;description?: string;image?: string;noindex?: boolean;}) {
  const { pathname } = useLocation();

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
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://sreeavanihospital.com${canonicalPath}`;
    }

    if (image) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    }
  }, [title, description, image, noindex, pathname]);
}