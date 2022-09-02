import React from 'react';
import { format } from 'date-fns';
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
// Customised prism.js downloaded from
// https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+jsx+tsx+typescript
import Prism from '../../components/PrismScript/prism';
import Link from 'next/link';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { PageLayout } from '../../components/Layout/PageLayout';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { CustomRenderer } from '../../components/DocumentRenderer/DocumentRenderer';
import { fetchGraphQL, gql } from '../../graphql';

export type DocumentProp = DocumentRendererProps['document'];

type Post = {
  id: string;
  title: string;
  slug: string;
  publishDate: string | null;
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

type ResponseData = {
  post: Post | null;
};

export default function BlogPage({ post }: { post: Post | null }) {
  const formattedDate = post?.publishDate
    ? format(new Date(post?.publishDate), 'MMM dd, yyyy')
    : null;

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
              <a className="no-underline hover:text-link before:content-['←'] before:pr-1 hover:before:-translate-x-1 before:inline-block before:transition-all before:duration-150 before:ease-in-out">
                back home
              </a>
            </Link>
          </div>
          <article className="prose lg:prose-lg prose:slate dark:prose-invert max-w-none">
            <h1 className="!mb-0 pb-4">{post.title}</h1>
            <div className="text-sm text-typography-secondary">{formattedDate}</div>
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
