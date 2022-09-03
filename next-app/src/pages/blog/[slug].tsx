import React from 'react';
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { BlogPage } from '../../components/BlogPage/BlogPage';
import type { BlogPageProps } from '../../components/BlogPage/BlogPage';
import type { Post } from '../../components/BlogPage/types';
import { fetchGraphQL, gql } from '../../graphql';

export default function Blog({ post }: BlogPageProps) {
  return <BlogPage post={post} />;
}

type ResponseData = {
  post: Post | null;
};

export async function getStaticProps({ params = {} }: GetStaticPropsContext) {
  const slug = params.slug;
  const data: ResponseData = await fetchGraphQL(
    gql`
      query post($slug: String!) {
        post(where: { slug: $slug }) {
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
      }
    `,
    {
      slug,
    }
  );

  const post = data?.post;
  return { props: { post } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const data: { posts: { slug: string }[] } = await fetchGraphQL(
    gql`
      query posts {
        posts {
          slug
        }
      }
    `
  );

  const posts = data?.posts || [];
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
