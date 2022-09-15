import React from 'react';
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { BlogPage } from '../../components/BlogPage/BlogPage';
import { fetchGraphQL, gql } from '../../graphql';
import type { BlogpagePathsQuery } from '../../.generated/types';
import { fetchBlogpageData } from '../../data/blogpage';
import type { BlogpageData } from '../../data/blogpage';

export default function Blog(data: BlogpageData) {
  return <BlogPage {...data} />;
}

export async function getStaticProps({ params = {} }: GetStaticPropsContext) {
  const slug = params.slug;
  const data = await fetchBlogpageData(slug as string);
  const post = data?.post;

  return { props: { post } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const data: BlogpagePathsQuery = await fetchGraphQL(
    gql`
      query blogpagePaths {
        posts {
          slug
        }
      }
    `
  );

  const posts = data?.posts || [];
  const paths = posts
    .filter((p): p is { slug: string } => Boolean(p?.slug))
    .map(({ slug }) => ({
      params: { slug },
    }));

  return {
    paths,
    fallback: false,
  };
}
