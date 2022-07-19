import {Image, Link} from '@shopify/hydrogen';

import {Heading} from '~/components';

const noImage = {
  id: 'gid://shopify/CollectionImage/1679650062563',
  url: 'https://cdn.shopify.com/s/files/1/0637/6947/7347/articles/qg-blog01_2808x.jpg?v=1651515168',
  width: 1080,
  height: 1080,
  altText: null,
};

export function CollectionCard({collection, loading}) {
  const image = !collection.image ? noImage : collection.image;
  return (
    <Link to={`/collections/${collection.handle}`} className="grid gap-4">
      <div className="card-image bg-primary/5 aspect-[3/2]">
        <Image
          alt={`Image of ${collection.title}`}
          data={image}
          height={400}
          sizes="(max-width: 32em) 100vw, 33vw"
          width={600}
          widths={[400, 500, 600, 700, 800, 900]}
          loaderOptions={{
            scale: 2,
            crop: 'top',
          }}
        />
      </div>
      <Heading as="h3" size="copy">
        {collection.title}
      </Heading>
    </Link>
  );
}
