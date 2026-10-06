import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/Buttons';
import { useSeo } from '../utils/seo';

export function NotFound() {
  useSeo({ title: 'Page not found', noindex: true });

  return (
    <>
      <PageHero
        label="404"
        title="We could not find that page"
        intro="The page you were looking for may have moved. You can return to the homepage or browse the treatments offered at the hospital."
        crumbs={[{ label: 'Not found' }]} />
      
      <div className="bg-ivory">
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-3 px-5 py-20 lg:px-8">
          <ButtonLink to="/">Back to homepage</ButtonLink>
          <ButtonLink to="/treatments" variant="outline">
            View treatments
          </ButtonLink>
        </div>
      </div>
    </>);

}