import Head from 'next/head';
import React from 'react';

type BlogPageSeo = {
  title: string;
  // if the post is a repost, then pass in the canonical URL to prevent SEO pollution
  // should be full url with hostname and path - Eg. https://dineshpandiyan.com/keystone-is-awesome
  url?: string;
};

export function BlogPageSeo({ title, url }: BlogPageSeo) {
  const derivedTitle = `${title} | Dinesh Pandiyan's Blog`;
  return (
    <React.Fragment>
      <Head>
        <title>{derivedTitle}</title>
        <meta property="og:title" content={derivedTitle} key="og:title" />
        {url && <meta property="og:url" content={url} key="og:url" />}
        {/* 
          add other relevant meta tags for your blog post
          <meta property="description" content="" key="description" />
          <meta property="og:description" content="" key="og:description" />
          <meta property="twitter:description" content="" key="twitter:description" />
          <meta property="twitter:card" content="" key="twitter:card" />
          <meta property="twitter:site" content="" key="twitter:site" />
          <meta property="twitter:title" content="" key="twitter:title" />
          <meta property="twitter:creator" content="" key="twitter:creator" />
          */}
      </Head>
    </React.Fragment>
  );
}
