import React from 'react';
import { format } from 'date-fns';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faGithub,
  faDev,
  faTwitter,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import type { CategoryNameType } from '../../.generated/types';
import type { HomepageData } from '../../data/homepage';

const categoryIcon: Record<CategoryNameType, IconDefinition | null> = {
  blog: null,
  notes: null,
  github: faGithub,
  twitter: faTwitter,
  dev: faDev,
  medium: faMedium,
  youtube: faYoutube,
  podcast: faPodcast,
} as const;

const categoryIconTooltip: Record<CategoryNameType, string | null> = {
  blog: null,
  notes: null,
  dev: 'External link to a Dev.to blog post',
  github: 'External link to a GitHub repo',
  medium: 'External link to a Medium blog post',
  podcast: 'External link to a podcast',
  twitter: 'External link to a tweet',
  youtube: 'External link to a YouTube video',
} as const;

function BlogItem({ post }: { post: HomepageData['posts'][number] }) {
  return (
    <NextLink href={`/blog/${post.slug}`}>
      <a className="hover:text-primary-800 dark:hover:text-secondary-500">
        <span className="">{post.title}</span>
      </a>
    </NextLink>
  );
}

function LinkItem({ link }: { link: HomepageData['links'][number] }) {
  const title = (link.category?.name && categoryIconTooltip[link.category.name]) || '';
  const icon = link.category?.name ? categoryIcon[link.category?.name] : null;
  const renderedIcon = icon ? <FontAwesomeIcon icon={icon} /> : null;

  return (
    <NextLink href={link?.url || ''} passHref>
      <a className="hover:text-primary-800 dark:hover:text-secondary-500" target={'_blank'}>
        <span>{link.title}</span>
        {link.category?.name && (
          <span className="pl-2" title={title}>
            {renderedIcon}
          </span>
        )}
      </a>
    </NextLink>
  );
}

export function ListItem({
  postOrLink,
}: {
  postOrLink: HomepageData['posts'][number] | HomepageData['links'][number];
}) {
  const formattedDate = postOrLink.publishDate
    ? format(new Date(postOrLink.publishDate), 'MMM dd, yyyy')
    : null;

  return (
    <li
      className="relative pl-4 my-[0.66em] grid grid-cols-[1fr_auto] before:left-0 before:absolute before:content-['_»_'] before:text-slate-500 dark:before:text-slate-400"
      key={postOrLink.id}
    >
      <div className="pr-8">
        {postOrLink.__typename === 'Post' ? (
          <BlogItem post={postOrLink} />
        ) : (
          <LinkItem link={postOrLink} />
        )}
      </div>
      {formattedDate ? (
        <div>
          <span className="text-slate-500 dark:text-slate-400 text-sm justify-self-end">
            {formattedDate}
          </span>
        </div>
      ) : null}
    </li>
  );
}
