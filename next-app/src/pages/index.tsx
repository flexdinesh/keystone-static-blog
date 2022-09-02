import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faTwitter, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { PageLayout } from '../components/Layout/PageLayout';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { fetchGraphQL, gql } from '../graphql';

export type Post = {
  __typename: 'Post';
  id: string;
  title: string;
  slug: string;
  publishDate: string;
};

type ExternalLink = {
  __typename: 'ExternalLink';
  id: string;
  title: string;
  url: string;
  publishDate: string | null;
  type: 'dev' | 'twitter' | 'medium' | 'youtube' | 'podcast';
  author: Author;
};

type Author = {
  email: string;
  name: string;
  github: string;
  twitter: string;
};

type ResponseData = {
  posts: Post[];
  externalLinks: ExternalLink[];
};

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

function Item({ item }: { item: Post | ExternalLink }) {
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

export default function Home({
  posts,
  externalLinks,
}: {
  posts: Post[];
  externalLinks: ExternalLink[];
}) {
  const items = [...posts, ...externalLinks].sort((a, b) =>
    (a.publishDate || '').localeCompare(b.publishDate || '')
  );
  return (
    <PageLayout className="grid grid-rows-[1fr_auto] max-w-3xl">
      <main className="lg:text-lg">
        <Header forPage="home" />
        <ul className="list-none">
          {items.map(item => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </main>
      <Footer />
    </PageLayout>
  );
}

// fetch data from keystone during build-time to generate homepage
export async function getStaticProps() {
  const data: ResponseData = await fetchGraphQL(gql`
    query postsAndExternalLinks {
      posts(where: { status: { equals: published } }, orderBy: { publishDate: desc }) {
        __typename
        id
        title
        slug
        publishDate
        author {
          email
          name
          github
          twitter
        }
        content {
          document
        }
      }
      externalLinks(where: { status: { equals: published } }, orderBy: { publishDate: desc }) {
        __typename
        id
        title
        url
        publishDate
        type
        author {
          email
          name
          github
          twitter
        }
      }
    }
  `);

  const posts = data?.posts || [];
  const externalLinks = data?.externalLinks || [];

  return {
    props: {
      posts,
      externalLinks,
    },
  };
}
