import React from 'react';
import { HomePageSeo } from './HomePageSeo';
import { PageLayout } from '../Layout/PageLayout';
import { Footer } from '../Footer/Footer';
import type { HomepageData } from '../../data/homepage';
import { HomepageHeader } from '../Header/Header';
import { FlatFeed } from './FlatFeed';
import { GroupedFeed } from './GroupedFeed';

export function HomePage(homepageData: HomepageData) {
  const { posts, links, categories, meta, config } = homepageData;
  return (
    <React.Fragment>
      <HomePageSeo meta={meta} />
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-3xl">
        <main className="lg:text-lg">
          <HomepageHeader {...homepageData} />
          {config?.homepageFeedStyle === 'grouped' ? (
            <GroupedFeed posts={posts} links={links} categories={categories} />
          ) : (
            <FlatFeed posts={posts} links={links} />
          )}
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
