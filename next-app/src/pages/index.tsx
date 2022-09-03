import React from 'react';
import { HomePage } from '../components/HomePage/HomePage';
import type { HomePageProps } from '../components/HomePage/HomePage';
import type { Post, ExternalLink } from '../components/HomePage/types';
import { fetchGraphQL, gql } from '../graphql';

export default function Home({ posts, externalLinks }: HomePageProps) {
  return <HomePage posts={posts} externalLinks={externalLinks} />;
}

type ResponseData = {
  posts: Post[];
  externalLinks: ExternalLink[];
};

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
