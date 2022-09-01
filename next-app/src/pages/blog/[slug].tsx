import React from 'react';
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
// Customised prism.js downloaded from
// https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+jsx+tsx+typescript
import Prism from '../../components/PrismScript/prism';
import Link from 'next/link';
import { gql } from '@apollo/client';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { createApolloClient } from '../../apollo';
import { PageLayout } from '../../components/Layout/PageLayout';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { CustomRenderer } from '../../components/DocumentRenderer/DocumentRenderer';

export type DocumentProp = DocumentRendererProps['document'];

type Post = {
  id: string;
  title: string;
  slug: string;
  author: {
    email: string;
    name: string;
    github: string;
    twitter: string;
  };
  content: {
    document: DocumentProp;
  };
};

export default function BlogPage({ post }: { post: Post | null }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <React.Fragment>
      <PageLayout className="max-w-3xl grid grid-rows-[1fr_auto]">
        <main>
          <Header forPage="blog" />
          <div className="pb-4">
            <Link href="/">
              <a className="before:content-['←'] before:pr-1 no-underline">back home</a>
            </Link>
          </div>
          <article className="prose lg:prose-lg prose:slate dark:prose-invert max-w-none">
            <h1>{post.title}</h1>
            <CustomRenderer document={post.content.document} />
          </article>
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}

export async function getStaticProps({ params = {} }: GetStaticPropsContext) {
  const slug = params.slug;
  const client = createApolloClient();
  const res = await client.query<{ post: Post | null }>({
    query: gql`
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
    variables: {
      slug,
    },
  });

  const post = res?.data?.post;
  return { props: { post } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const client = createApolloClient();
  const res = await client.query<{ posts: { slug: string }[] }>({
    query: gql`
      query posts {
        posts {
          slug
        }
      }
    `,
  });

  const posts = res?.data?.posts || [];
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
