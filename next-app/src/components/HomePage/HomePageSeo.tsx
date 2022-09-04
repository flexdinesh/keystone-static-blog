import Head from 'next/head';
import React from 'react';

export const title = 'Static Blogs with Keystone | Dinesh Pandiyan';
const description =
  'Starter template to build your own static blogs with Keystone. Created by Dinesh Pandiyan.';
export const websiteURL = 'https://staticblogswithkeystone.netlify.app';
export const twitterHandle = '@yourtwitterhandle';

export function HomePageSeo() {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />

        {/* og meta tags */}
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={websiteURL} key="og:url" />
        {/* If you need want your URL previews to include an image */}
        {/* <meta property="og:image" content="https://dineshpandiyan.com/images/link-to-image.png" key="og:image" /> */}
        {/* <meta property="og:image:alt" content="Banner for dineshpandiyan.com" key="og:image:alt" /> */}
        {/* <meta property="og:image:width" content="1280" key="og:image:width" /> */}
        {/* <meta property="og:image:height" content="675" key="og:image:height" /> */}

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        {/* If you use twitter:image, set content to summary_large_image */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta property="twitter:site" content={twitterHandle} key="twitter:site" /> */}
        {/* <meta property="twitter:creator" content={twitterHandle} key="twitter:creator" /> */}
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        {/* If you need want your URL previews to include an image */}
        {/* <meta property="twitter:image" content="https://dineshpandiyan.com/images/link-to-image.png" key="twitter:image" /> */}
      </Head>
    </React.Fragment>
  );
}
