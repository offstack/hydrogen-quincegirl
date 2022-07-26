import {
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  gql,
  Link,
} from '@shopify/hydrogen';

import {PageHeader, Section} from '~/components';
import {Layout, NotFound} from '~/components/index.server';

export default function Policies() {
  const {
    language: {isoCode: languageCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: POLICIES_QUERY,
    variables: {
      languageCode,
    },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
    },
  });

  const {
    privacyPolicy,
    shippingPolicy,
    termsOfService,
    refundPolicy,
    subscriptionPolicy,
  } = data.shop;

  const policies = [
    privacyPolicy,
    shippingPolicy,
    termsOfService,
    refundPolicy,
    subscriptionPolicy,
  ];

  if (policies.every((element) => element === null)) {
    return <NotFound type="page" />;
  }

  return (
    <Layout>
      <PageHeader heading="Policies" />
      <Section padding="x" className="mb-24 text-center">
        {policies.map((policy) => {
          if (!policy) {
            return;
          }
          return (
            <Link
              className="text-lg"
              key={policy.id}
              to={`/policies/${policy.handle}`}
            >
              {policy.title}
            </Link>
          );
        })}
      </Section>
    </Layout>
  );
}

const POLICIES_QUERY = gql`
  fragment Policy on ShopPolicy {
    id
    title
    handle
  }

  query PoliciesQuery {
    shop {
      privacyPolicy {
        ...Policy
      }
      shippingPolicy {
        ...Policy
      }
      termsOfService {
        ...Policy
      }
      refundPolicy {
        ...Policy
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;
