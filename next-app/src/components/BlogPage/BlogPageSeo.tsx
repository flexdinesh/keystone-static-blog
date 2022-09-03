import Head from 'next/head';
import React from 'react';

type BlogPageSeo = {
  title: string;
  // if the post is a repost, then pass in the canonical URL to prevent SEO pollution
  // should be full url with hostname and path - Eg. https://dineshpandiyan.com/keystone-is-awesome
  url?: string;
};

export function BlogPageSeo({ title, url }: BlogPageSeo) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="og:title" />
        {url && <meta property="og:url" content={url} key="og:url" />}
        <meta property="twitter:creator" content="@flexdinesh" key="twitter:creator" />
      </Head>
    </React.Fragment>
  );
}
