import React from 'react';
import type { HomepageData } from '../../data/homepage';
import { ListItem } from './ListItem';

type FlatFeedProps = Pick<HomepageData, 'posts' | 'links'>;

export function FlatFeed({ posts, links }: FlatFeedProps) {
  if (!posts?.length && !links?.length) {
    return <p>Nothing posts yet, coming back later.</p>;
  }

  const postOrLinkItems = [...posts, ...links].sort((a, b) =>
    (b.publishDate || '').localeCompare(a.publishDate || '')
  );

  return (
    <React.Fragment>
      <ul className="list-none mt-8">
        {postOrLinkItems.map(postOrLink => {
          return <ListItem postOrLink={postOrLink} key={postOrLink.id} />;
        })}
      </ul>
    </React.Fragment>
  );
}
