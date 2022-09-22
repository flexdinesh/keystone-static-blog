import React from 'react';
import { HomePage } from '../components/HomePage';
import { fetchHomepageData } from '../data/homepage';
import type { HomepageData } from '../data/homepage';

export default function Home(homepageData: HomepageData) {
  return <HomePage {...homepageData} />;
}

// fetch data from keystone during build-time to generate homepage
export async function getStaticProps() {
  const { categories, links, posts, meta, config } = await fetchHomepageData();

  return {
    props: {
      categories,
      links,
      posts,
      meta,
      config,
    },
  };
}
