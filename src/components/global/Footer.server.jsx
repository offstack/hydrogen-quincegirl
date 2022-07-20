import {useUrl} from '@shopify/hydrogen';

import {Section, Heading, FooterMenu, CountrySelector} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 
        border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-white text-black overflow-hidden`}
    >
      <FooterMenu menu={menu} />
      <section className="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
        {/* <Heading
          size="lead"
          className="cursor-default tracking-[0.2em]"
          as="h3"
        >
          COUNTRY
        </Heading>
        <CountrySelector /> */}
      </section>
      <div
        className={`self-end pt-8 opacity-50 md:col-span-4 text-center lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} QuinceGirl.
      </div>
    </Section>
  );
}
