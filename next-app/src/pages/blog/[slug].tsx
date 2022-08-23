import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { gql } from '@apollo/client';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { createApolloClient } from '../../apollo';
import { PageLayout } from '../../components/Layout';
import { Footer } from '../../components/Footer';
import { A } from '../../components/A';
import { CustomRenderer } from '../../components/DocumentRenderer';

export type DocumentProp = DocumentRendererProps['document'];

type Post = {
  id: string;
  title: string;
  slug: string;
  content: {
    document: DocumentProp;
  };
};

export default function BlogPage({ post }: { post: Post | undefined }) {
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <PageLayout className="prose grid grid-rows-[1fr_auto]">
      <main>
        <div className="pb-2">
          <Link href="/">
            <A className="border-b-0">&larr; back home</A>
          </Link>
        </div>
        <article className="">
          <h1 className="text-slate-800 font-bold">{post.title}</h1>
          <CustomRenderer document={post.content.document} />
        </article>
      </main>
      <Footer />
    </PageLayout>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const client = createApolloClient();
  const res = await client.query({
    query: gql`
      query posts {
        posts {
          slug
        }
      }
    `,
  });

  const posts: Array<{ slug: string }> = res?.data?.posts || [];
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params = {} }: GetStaticPropsContext) {
  const slug = params.slug;
  const client = createApolloClient();
  const res = await client.query({
    query: gql`
      query post($slug: String!) {
        post(where: { slug: $slug }) {
          id
          title
          slug
          status
          publishDate
          author {
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
