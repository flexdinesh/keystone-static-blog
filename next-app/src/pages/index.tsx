import { format } from 'date-fns';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { createApolloClient } from '../apollo';
import { PageLayout } from '../components/Layout/PageLayout';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import React from 'react';

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
  author: Author;
};

type Author = {
  email: string;
  name: string;
  github: string;
  twitter: string;
};

type QueryData = {
  posts: Post[];
  externalLinks: ExternalLink[];
};

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
          <a className="fancy-link">{item.title}</a>
        </Link>
      ) : (
        <Link href={item.url} passHref>
          <a className="fancy-link" target={'_blank'}>
            {item.title}
          </a>
        </Link>
      )}

      {formattedDate ? (
        <React.Fragment>
          {/* Wrap to next line when for longer titles */}
          <span className="block lg:inline-block">
            {/* <span className="hidden after:content-['\2219'] lg:inline-block visible text-typography-secondary pl-4 pr-4"></span> */}
            <span className="hidden after:content-['—'] lg:inline-block visible text-typography-secondary pl-4 pr-4"></span>
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
  const client = createApolloClient();

  const res = await client.query<QueryData>({
    query: gql`
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
    `,
  });

  const posts = res?.data?.posts || [];
  const externalLinks = res?.data?.externalLinks || [];

  return {
    props: {
      posts,
      externalLinks,
    },
  };
}
