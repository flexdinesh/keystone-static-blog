import React from 'react';
import { HomePageSeo } from './HomePageSeo';
import { PageLayout } from '../Layout/PageLayout';
import { Footer } from '../Footer/Footer';
import type { HomepageData } from '../../data/homepage';
import { HomepageHeader } from '../Header/Header';
import { ListItem } from './ListItem';
import { UncategorisedFeed } from './UncategorisedFeed';

function groupBasedOnCategories({ categories, posts, links }: HomepageData) {
  if (!categories) {
    return null;
  }

  const groupedItems = categories.map(cat => {
    const postsForCategory = posts?.filter(p => p.category?.name === cat.name) || [];
    const linksForCategory = links?.filter(l => l.category?.name === cat.name) || [];
    const groupedAndSortedPostsOrLinks = [...postsForCategory, ...linksForCategory].sort((a, b) =>
      (b?.publishDate || '').localeCompare(a?.publishDate || '')
    );

    if (!groupedAndSortedPostsOrLinks.length) {
      return null;
    }

    return {
      name: cat.name,
      items: groupedAndSortedPostsOrLinks,
    };
  });

  return groupedItems;
}

export function HomePage({ posts, links, categories, meta }: HomepageData) {
  return (
    <React.Fragment>
      <HomePageSeo meta={meta} />
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-3xl">
        <main className="lg:text-lg">
          <HomepageHeader />
          <UncategorisedFeed posts={posts} links={links} />
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
