import { format } from 'date-fns';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { createApolloClient } from '../apollo';
import { PageLayout } from '../components/Layout/PageLayout';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { A } from '../components/A';

type Post = {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <PageLayout className="prose grid grid-rows-[auto_1fr_auto]">
      <Header forPage="home" />
      <main>
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Blogs</h1>
        <div className="space-y-4">
          {posts.map(post => {
            const formattedDate = post.publishDate
              ? format(new Date(post.publishDate), 'MMM yy')
              : null;

            return (
              <div className="flex items-center space-x-8 text-xl" key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <A className="border-b-0 text-current">{post.title}</A>
                </Link>
                <div className="">{formattedDate}</div>
              </div>
            );
          })}
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
