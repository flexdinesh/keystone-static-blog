import { format } from 'date-fns';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { createApolloClient } from '../apollo';
import { PageLayout } from '../components/Layout/PageLayout';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import type { Post } from '../components/BlogCard/BlogCard';
import { BlogCard } from '../components/BlogCard/BlogCard';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <PageLayout className="prose grid grid-rows-[auto_1fr_auto] font-Roboto">
      <Header forPage="home" />
      <main className="mt-10">
        <div className="space-y-4">
          {posts.map(post => (
            <BlogCard post={post}/>
          ))}
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const client = createApolloClient();

  const res = await client.query({
    query: gql`
      query posts {
        posts {
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
  });

  const posts = res?.data?.posts || [];

  return {
    props: {
      posts,
    },
  };
}
