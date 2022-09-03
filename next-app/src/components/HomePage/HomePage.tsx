import React from 'react';
import { HomePageSeo } from './HomePageSeo';
import { PageLayout } from '../Layout/PageLayout';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ListItem } from './ListItem';
import type { Post, ExternalLink } from './types';

export type HomePageProps = {
  posts: Post[];
  externalLinks: ExternalLink[];
};

export function HomePage({ posts, externalLinks }: HomePageProps) {
  const items = [...posts, ...externalLinks].sort((a, b) =>
    (b.publishDate || '').localeCompare(a.publishDate || '')
  );
  return (
    <React.Fragment>
      <HomePageSeo />
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-3xl">
        <main className="lg:text-lg">
          <Header forPage="home" />
          <ul className="list-none">
            {items.map(item => {
              return <ListItem item={item} key={item.id} />;
            })}
          </ul>
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
