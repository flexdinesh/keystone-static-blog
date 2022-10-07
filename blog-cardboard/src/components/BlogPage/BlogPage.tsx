import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
// Customised prism.js downloaded from
// https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+jsx+tsx+typescript
import Prism from '../PrismScript/prism';
import { BlogPageSeo } from './BlogPageSeo';
import { PageLayout } from '../Layout/PageLayout';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import { PostRenderer } from './DocumentRenderer/DocumentRenderer';
import type { BlogpageData } from '../../data/blogpage';

export function BlogPage(blogpageData: BlogpageData) {
  const { post, meta, config } = blogpageData;
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
      <BlogPageSeo post={post} meta={meta} config={config} />
      <PageLayout className="grid grid-rows-[1fr_auto]">
        <main>
          <header className="text-center grid auto-rows-auto pb-2">
            <Nav />
          </header>
          <div className="mx-auto max-w-4xl">
            <div className="pb-4">
              <Link href="/">
                <a
                  className="
                    no-underline hover:text-link 
                    before:content-['←'] before:pr-1 hover:before:-translate-x-1 before:inline-block before:transition-all before:duration-150 before:ease-in-out
                  "
                >
                  back home
                </a>
              </Link>
            </div>
            <article className="prose lg:prose-lg prose:zinc dark:prose-invert max-w-none pb-8 !leading-[1.9]">
              <h1 className="!mb-0 pb-4 !leading-[1.2em]">
                <span
                  className="
                    relative block pl-10 leading-[150%]
                    after:absolute after:content-[''] after:w-4 after:h-full after:top-0 after:left-0 after:bg-secondary-400
                    "
                >
                  {post.title}
                </span>
              </h1>
              <div className="text-sm text-text-muted dark:text-text-muted">{formattedDate}</div>
              <PostRenderer document={post.content?.document} />
            </article>
          </div>
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
