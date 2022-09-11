import React from 'react';
import type { HomepageData } from '../../data/homepage';
import { ListItem } from './ListItem';

type UncategorisedFeedProps = Pick<HomepageData, 'posts' | 'links'>;

export function UncategorisedFeed({ posts, links }: UncategorisedFeedProps) {
  if (!posts?.length && !links?.length) {
    return <p>Nothing posts yet, coming back later.</p>;
  }

  const postOrLinkItems = [...posts, ...links].sort((a, b) =>
    (b.publishDate || '').localeCompare(a.publishDate || '')
  );

  return (
    <React.Fragment>
      <ul className="list-none">
        {postOrLinkItems.map(postOrLink => {
          return <ListItem postOrLink={postOrLink} key={postOrLink.id} />;
        })}
      </ul>
    </React.Fragment>
  );
}
