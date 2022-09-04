import Head from 'next/head';
import React from 'react';
import { title as pageTitle, websiteURL, twitterHandle } from '../HomePage/HomePageSeo';

type BlogPageSeo = {
  title: string;
  slug: string;
  publishTimeISO?: string | null;
  authorName?: string | undefined;
  metaDescription?: string | null;
  metaImageUrl?: string | null;
  metaImageAltText?: string | null;
};

export function BlogPageSeo({
  title,
  slug,
  publishTimeISO,
  authorName = 'Dinesh Pandiyan',
  metaDescription,
  metaImageUrl,
  metaImageAltText,
}: BlogPageSeo) {
  const derivedTitle = `${title} | ${pageTitle}`;
  const derivedURL = slug ? `${websiteURL}/${slug}` : '';
  return (
    <React.Fragment>
      <Head>
        <title>{derivedTitle}</title>
        {metaDescription && (
          <meta property="description" content={metaDescription} key="description" />
        )}
        {/* <meta property="author" content={authorName} key="author" /> */}

        {/* og meta tags */}
        <meta property="og:title" content={derivedTitle} key="og:title" />
        {metaDescription && (
          <meta property="og:description" content={metaDescription} key="og:description" />
        )}
        {derivedURL && <meta property="og:url" content={derivedURL} key="og:url" />}
        <meta property="og:site_name" content={title} key="og:site_name" />
        <meta property="og:type" content="article" key="og:type" />
        {publishTimeISO && (
          <meta
            property="article:published_time"
            content={publishTimeISO}
            key="og:published_time"
          />
        )}
        {metaImageUrl && <meta property="og:image" content={metaImageUrl} key="og:image" />}
        {metaImageAltText && (
          <meta property="og:image:alt" content={metaImageAltText} key="og:image:alt" />
        )}
        {/* TODO: Check if dimensions are okay for the image */}
        {/* <meta property="og:image:width" content="1280" key="og:image:width" /> */}
        {/* <meta property="og:image:height" content="675" key="og:image:height" /> */}
        {authorName && <meta property="article:author" content={authorName} key="og:author" />}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} key="twitter:title" />
        {metaDescription && (
          <meta
            property="twitter:description"
            content={metaDescription}
            key="twitter:description"
          />
        )}
        {/* <meta property="twitter:site" content={twitterHandle} key="twitter:site" /> */}
        {/* <meta property="twitter:creator" content={twitterHandle} key="twitter:creator" /> */}
        {metaImageUrl && (
          <meta property="twitter:image" content={metaImageUrl} key="twitter:image" />
        )}
        {metaImageAltText && (
          <meta property="twitter:image:alt" content={metaImageAltText} key="twitter:image:alt" />
        )}
      </Head>
    </React.Fragment>
  );
}
