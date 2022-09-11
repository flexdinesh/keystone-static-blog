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
      <a className="hover:text-primary-700 dark:hover:text-secondary-500">
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
      <a className="hover:text-primary-700 dark:hover:text-secondary-500" target={'_blank'}>
        <span className="">{link.title}</span>
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
      className="mb-2 before:-ml-5 before:content-['_»_'] before:text-slate-500 dark:before:text-slate-400 ml-4 before:pr-2"
      key={postOrLink.id}
    >
      {postOrLink.__typename === 'Post' ? (
        <BlogItem post={postOrLink} />
      ) : (
        <LinkItem link={postOrLink} />
      )}
      {formattedDate ? (
        <React.Fragment>
          {/* Wrap to next line when for longer titles */}
          <span className="block">
            {/* <span className="hidden after:content-['\2219'] text-slate-500 dark:text-slate-400 pl-4 pr-4"></span> */}
            <span className="hidden after:content-['—'] text-slate-500 dark:text-slate-400 pl-4 pr-4"></span>
            <span className="text-slate-500 dark:text-slate-400 text-sm justify-self-end">
              {formattedDate}
            </span>
          </span>
        </React.Fragment>
      ) : null}
    </li>
  );
}
