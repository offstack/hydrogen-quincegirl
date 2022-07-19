// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

import {Heading} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function FooterMenu() {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      <section key={1} className={styles.section}>
        <Disclosure>
          {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
          <>
            <Disclosure.Button className="text-left md:cursor-default">
              <Heading className="flex justify-between" size="lead" as="h3">
                About Us
              </Heading>
            </Disclosure.Button>

            <div className="overflow-hidden transition-all duration-300">
              <Disclosure.Panel static>
                <nav className={styles.nav}>
                  <Link key={1} to="/pages/about-us">
                    About
                  </Link>
                  <Link key={2} to="/search">
                    Search
                  </Link>
                  <Link key={3} to="/policies/refund-policy">
                    Return Policy
                  </Link>
                  <Link key={4} to="/policies/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link key={5} to="/policies/terms-of-service">
                    Terms of Service
                  </Link>
                  <Link key={6} to="/pages/faqs">
                    FAQs
                  </Link>
                </nav>
              </Disclosure.Panel>
            </div>
          </>
        </Disclosure>
      </section>{' '}
      <section key={2} className={styles.section}>
        <Disclosure>
          {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
          <>
            <Disclosure.Button className="text-left md:cursor-default">
              <Heading className="flex justify-between" size="lead" as="h3">
                Collections
              </Heading>
            </Disclosure.Button>

            <div className="overflow-hidden transition-all duration-300">
              <Disclosure.Panel static>
                <nav className={styles.nav}>
                  <Link key={1} to="/collections/quinceanera-dresses">
                    Quinceañera Dresses
                  </Link>
                  <Link key={2} to="/collections/blue-quinceanera-dresses">
                    Blue Quinceañera Dresses
                  </Link>
                  <Link key={3} to="/collections/pink-quinceanera-dresses">
                    Pink Quinceañera Dresses
                  </Link>
                  <Link key={4} to="/collections/purple-quinceanera-dresses">
                    Purple Quinceañera Dresses
                  </Link>
                  <Link key={4} to="/collections/damas-dresses">
                    Damas Dresses
                  </Link>
                </nav>
              </Disclosure.Panel>
            </div>
          </>
        </Disclosure>
      </section>{' '}
    </>
  );
}
