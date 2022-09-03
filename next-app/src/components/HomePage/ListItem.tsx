import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faTwitter, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import type { Post, ExternalLink } from './types';

const externalLinkTypeToIconMap = {
  dev: faDev,
  twitter: faTwitter,
  medium: faMedium,
  youtube: faYoutube,
  podcast: faPodcast,
} as const;

const externalLinkTypeToTitleMessageMap = {
  dev: 'External link to a Dev.to blog post',
  twitter: 'External link to a tweet',
  medium: 'External link to a Medium blog post',
  youtube: 'External link to a YouTube video',
  podcast: 'External link to a podcast',
} as const;

export function ListItem({ item }: { item: Post | ExternalLink }) {
  const formattedDate = item.publishDate
    ? format(new Date(item.publishDate), 'MMM dd, yyyy')
    : null;

  return (
    <li
      className="mb-4 before:-ml-5 before:content-['_»_'] before:text-typography-secondary ml-4 before:pr-2"
      key={item.id}
    >
      {item.__typename === 'Post' ? (
        <Link href={`/blog/${item.slug}`}>
          <a className="hover:text-link">
            <span className="animate-link hover:after:bg-link">{item.title}</span>
          </a>
        </Link>
      ) : (
        <Link href={item.url} passHref>
          <a className="hover:text-link" target={'_blank'}>
            <span className="animate-link hover:after:bg-link">{item.title}</span>
            <span className="pl-2" title={externalLinkTypeToTitleMessageMap[item.type]}>
              <FontAwesomeIcon icon={externalLinkTypeToIconMap[item.type]} />
            </span>
          </a>
        </Link>
      )}

      {formattedDate ? (
        <React.Fragment>
          {/* Wrap to next line when for longer titles */}
          <span className="block lg:inline-block">
            {/* <span className="hidden after:content-['\2219'] lg:inline-block visible text-typography-secondary pl-4 pr-4"></span> */}
            <span className="hidden after:content-['—'] lg:inline-block text-typography-secondary pl-4 pr-4"></span>
            <span className="text-typography-secondary text-sm justify-self-end">
              {formattedDate}
            </span>
          </span>
        </React.Fragment>
      ) : null}
    </li>
  );
}
