import Head from 'next/head';
import React from 'react';

const title = 'Dinesh Pandiyan | Keystone Static Blog';
const description =
  'Starter template to build your own static blogs with Keystone. Created by Dinesh Pandiyan.';

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
        {/* 
          add other relevant meta tags for your website
          
          <meta property="og:url" content="" key="og:url" />
          <meta property="twitter:card" content="" key="twitter:card" />
          <meta property="twitter:site" content="" key="twitter:site" />
          <meta property="twitter:title" content="" key="twitter:title" />
          <meta property="twitter:creator" content="" key="twitter:creator" />
          */}
      </Head>
    </React.Fragment>
  );
}
