import React from 'react';
import { HomePage } from '../components/HomePage/HomePage';
import { fetchHomepageData } from '../data/homepage';
import type { HomepageData } from '../data/homepage';

export default function Home(data: HomepageData) {
  return <HomePage {...data} />;
}

// fetch data from keystone during build-time to generate homepage
export async function getStaticProps() {
  const { categories, links, posts, meta } = await fetchHomepageData();

  return {
    props: {
      categories,
      links,
      posts,
      meta,
    },
  };
}
