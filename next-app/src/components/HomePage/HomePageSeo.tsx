import Head from 'next/head';
import React from 'react';
import type { HomepageData } from '../../data/homepage';

type HomePageSeoProps = Pick<HomepageData, 'meta'>;
export function HomePageSeo({ meta }: HomePageSeoProps) {
  const metaTitle = meta?.metaTitle || meta?.title;
  const twitterHandleForMetaTag = '@' + (meta?.twitter || '').replace('@', '');
  return (
    <React.Fragment>
      <Head>
        {metaTitle && <title>{metaTitle}</title>}
        {meta?.metaDescription && (
          <meta name="description" content={meta?.metaDescription} key="description" />
        )}

        {/* og meta tags */}
        {metaTitle && <meta property="og:title" content={metaTitle} key="og:title" />}
        {meta?.metaDescription && (
          <meta property="og:description" content={meta?.metaDescription} key="og:description" />
        )}
        <meta property="og:type" content="website" key="og:type" />
        {meta?.metaUrl && <meta property="og:url" content={meta?.metaUrl} key="og:url" />}
        {/* If you need want your URL previews to include an image */}
        {meta?.metaImageUrl && (
          <meta property="og:image" content={meta?.metaImageUrl} key="og:image" />
        )}
        {meta?.metaImageAltText && (
          <meta property="og:image:alt" content={meta?.metaImageAltText} key="og:image:alt" />
        )}
        {meta?.metaImageWidth && (
          <meta property="og:image:width" content={meta?.metaImageWidth} key="og:image:width" />
        )}
        {meta?.metaImageHeight && (
          <meta property="og:image:height" content={meta?.metaImageHeight} key="og:image:height" />
        )}

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {meta?.twitter && (
          <meta property="twitter:site" content={twitterHandleForMetaTag} key="twitter:site" />
        )}
        {meta?.twitter && (
          <meta
            property="twitter:creator"
            content={twitterHandleForMetaTag}
            key="twitter:creator"
          />
        )}
        {metaTitle && <meta property="twitter:title" content={metaTitle} key="twitter:title" />}
        {meta?.metaDescription && (
          <meta
            property="twitter:description"
            content={meta?.metaDescription}
            key="twitter:description"
          />
        )}
        {meta?.metaImageUrl && (
          <meta property="twitter:image" content={meta?.metaImageUrl} key="twitter:image" />
        )}
        {meta?.metaImageAltText && (
          <meta
            property="twitter:image:alt"
            content={meta?.metaImageAltText}
            key="twitter:image:alt"
          />
        )}
      </Head>
    </React.Fragment>
  );
}
