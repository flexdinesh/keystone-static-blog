import Head from 'next/head';
import React from 'react';

const title = 'Dinesh Pandiyan | Keystone Static Blog';
const description = 'Starter template to build your own static blogs with Keystone';

export function HomePageSeo() {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="twitter:creator" content="@flexdinesh" key="twitter:creator" />
        <meta
          property="twitter:description"
          content="I talk and write about the web"
          key="twitter:description"
        />
      </Head>
    </React.Fragment>
  );
}
