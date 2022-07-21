import {Image, Link, Video} from '@shopify/hydrogen';

import {Heading, Text} from '~/components';

export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top,
}) {
  return (
    <Link
      to={`${
        spreadSecondary?.reference || height
          ? '/products'
          : '/collections/' + handle
      }`}
      className="flex"
    >
      <section
        className={`relative justify-end flex flex-col w-full ${
          spreadSecondary?.reference && 'max-w-[1440px]'
        } m-auto ${top && '-mt-nav'} ${
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1] max-h-[600px]'
        }`}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {spread?.reference && (
            <div className="">
              <SpreadMedia
                scale={2}
                sizes={
                  spreadSecondary?.reference
                    ? '(min-width: 80em) 700px, (min-width: 48em) 450px, 500px'
                    : '(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'
                }
                widths={
                  spreadSecondary?.reference
                    ? [500, 450, 700]
                    : [500, 900, 1400]
                }
                width={spreadSecondary?.reference ? 375 : 750}
                data={spread.reference}
                loading={loading}
                havesecondary={!!spreadSecondary?.reference}
              />
            </div>
          )}
          {spreadSecondary?.reference && (
            <div className="hidden md:block">
              <SpreadMedia
                sizes="(min-width: 80em) 700, (min-width: 48em) 450, 500"
                widths={[450, 700]}
                width={375}
                data={spreadSecondary.reference}
                havesecondary={true}
              />
            </div>
          )}
        </div>
        {!spreadSecondary?.reference && !height && (
          <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t from-primary/60 text-contrast">
            {heading?.value && (
              <Heading format as="h2" size="display" className="max-w-md">
                <div className="font-tenor">{heading.value}</div>
              </Heading>
            )}
            {byline?.value && (
              <Text format width="narrow" as="p" size="lead">
                {byline.value}
              </Text>
            )}
            {cta?.value && <Text size="lead">{cta.value}</Text>}
          </div>
        )}

        {spreadSecondary?.reference && (
          <div className="absolute top-0 w-full h-full flex">
            <Link to="/" className="p-3 w-full h-full bg-black/20">
              <div className="border-2 border-white h-full flex">
                <SpreadCopy color="white" />
              </div>
            </Link>
            <Link to="/" className="p-3 hidden md:block w-full h-full">
              <div className="h-full relative">
                <div className="bg-white absolute bottom-0 w-full p-[2em]">
                  <SpreadCopy color="black" />
                </div>
              </div>
            </Link>
          </div>
        )}
        {height && (
          <div className="absolute top-0 w-full h-full flex bg-black/10">
            <div className="m-auto text-white text-center uppercase tracking-[.3em]">
              <h3 className="text-[1.1em] mb-[5px]">Introducing</h3>
              <h1 className="text-[32px] lg:text-[64px] leading-[1] font-tenor">QUINCEGIRL</h1>
              <p className="normal-case tracking-normal text-[1.3em]">
                Magical Dresses for Your Dream Quinceañera
              </p>
              <div
                className={`m-auto mt-[15px] w-40 h-12 border-2 border-black bg-black text-white flex`}
              >
                <p className="m-auto">Shop All</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Link>
  );
}

function SpreadMedia({
  data,
  loading,
  scale,
  sizes,
  width,
  widths,
  havesecondary,
}) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        previewImageOptions={{scale, src: data.previewImage.url}}
        width={scale * width}
        className="block object-cover w-full h-full"
        data={data}
        controls={false}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        widths={widths}
        sizes={sizes}
        alt={data.alt || 'Marketing Banner Image'}
        className={`block object-cover w-full h-full ${
          havesecondary && 'xl:-mt-36'
        }`}
        // @ts-ignore
        data={data.image}
        loading={loading}
        width={width}
        loaderOptions={{scale, crop: 'center'}}
      />
    );
  }

  return null;
}

function SpreadCopy({color}) {
  return (
    <div
      className={`m-auto text-${color} tracking-[.3em] text-center uppercase`}
    >
      <h3 className="text-[1em] mb-3">LIMITED TIME</h3>
      <h2 className="text-[1.6em] lg:text-[2.1em] mb-3 leading-[1.1] font-tenor">
        Announce your
        <br />
        promotion
      </h2>
      <p className="text-[1em] tracking-normal normal-case mb-3">
        Include the smaller details of your promotion in text below the title.
      </p>
      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 ">
        <div
          className={`w-40 h-12 border-2 border-${color} ${
            color === 'black' && 'bg-black text-white'
          } flex`}
        >
          <p className="m-auto">Shop This</p>
        </div>
        <div
          className={`w-40 h-12 border-2 border-${color} ${
            color === 'black' && 'bg-black text-white'
          } flex`}
        >
          <p className="m-auto">Shop All</p>
        </div>
      </div>
    </div>
  );
}
