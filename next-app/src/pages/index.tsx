import { format } from 'date-fns';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { createApolloClient } from '../apollo';
import { PageLayout } from '../components/Layout';
import { Footer } from '../components/Footer';

type Post = {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <PageLayout className="prose lg:prose-lg prose-blue grid grid-rows-[1fr_auto]">
      <main className="">
        <h1>Blogs</h1>
        <div className="space-y-4">
          {posts.map(post => {
            const formattedDate = post.publishDate
              ? format(new Date(post.publishDate), 'MMM yy')
              : null;

            return (
              <div className="flex items-center space-x-8 text-xl" key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <a className="no-underline text-current">{post.title}</a>
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
