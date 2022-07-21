import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {FeaturedCollections, Hero} from '~/components';
import {Layout, ProductSwimlane} from '~/components/index.server';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });

  const {heroBanners, featuredCollections, featuredProducts} = data;

  // fill in the hero banners with placeholders if they're missing
  const [primaryHero, secondaryHero, tertiaryHero] = getHeroPlaceholder(
    heroBanners.nodes,
  );

  return (
    <>
      {primaryHero && (
        <Hero {...primaryHero} height="full" top loading="eager" />
      )}
      <Intro />
      <ProductSwimlane
        data={featuredProducts.nodes}
        title="Featured Products"
        divider="bottom"
      />
      {secondaryHero && <Hero {...secondaryHero} />}
      <FeaturedCollections
        data={featuredCollections.nodes}
        title="Collections"
      />
      <Promotion />
      {tertiaryHero && <Hero {...tertiaryHero} />}
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
        titleTemplate: '',
        // titleTemplate: '%s · Powered by Hydrogen',
      }}
    />
  );
}

const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      # query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredCollections: collections(
      first: 3
      reverse: true
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      title: name
      description
    }
  }
`;

function Intro() {
  return (
    <div className="mt-[40px] flex">
      <div className="m-auto max-w-[90%] lg:max-w-[920px]">
        <h2 className="font-tenor text-[26px] lg:text-[31px] text-center mb-[30px]">
          QUINCEAÑERA
        </h2>
        <p className="text-[1.3em] text-center justify-center content-center">
          Quinceanera is an important day for a young lady who is reaching the
          age of 15. Traditionally, the quinceanera is a day when a young lady
          celebrates her fifteenth birthday by having a special party with her
          friends and family. There are many things that can happen on the
          quinceanera, from a small gathering with close friends to a formal
          banquet with relatives from all over the world.
        </p>
      </div>
    </div>
  );
}

function Promotion() {
  return (
    <div className="mb-[40px] mt-[40px] flex">
      <div className="m-auto max-w-[90%] lg:max-w-[920px]">
        <h2 className="font-tenor text-[26px] lg:text-[31px] text-center mb-[30px]">
          A QUINCEAÑERA DRESS FOR YOUR SWEET 15 BIRTHDAY
        </h2>
        <p className="text-[1.3em] text-center justify-center content-center">
          Discover the perfect quinceañera dress at QuinceGirl. From traditional
          quinceañera dresses to cute and trendy quinceañera gowns, you’re sure
          to find a style that feels like it was made just for you. Shop this
          selection of quinceañera dresses online to discover gorgeous designs
          by the top designers, like Ariana Vara’s Princesa collection. In so
          many hermosa colors, styles, and fabrics, these quince dresses are
          sure to impress. Stand out in a power color when you wear a red
          quinceañera dress, or go for a classic look with a traditional white
          or pink quinceañera dress. There are royal blue quinceañera dresses
          for a regal look and rose gold quince dresses for a softly sparkling
          princess vibe. Want a quince dress with dramatic flair? Check out the
          quinceañera dresses with removable capes or matching color lights.
          From petite quince dresses to plus-size quinceañera dresses,
          QuinceGirl features styles that flatter all figures and sizes.
          Celebrate your sweet 15 by wearing a stunning quinceañera gown from
          QuinceGirl.
        </p>
        <h2 className="font-tenor text-[26px] lg:text-[31px] text-center my-[30px]">
          DAMAS DRESSES FOR EVERY QUINCEAÑERA COURT
        </h2>
        <p className="text-[1.3em] text-center justify-center content-center">
          Use this text to share information about your brand with your
          customers. Describe a product, share announcements, or welcome
          customers to your store.
        </p>
      </div>
    </div>
  );
}
