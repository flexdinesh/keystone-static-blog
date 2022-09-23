import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
// Customised prism.js downloaded from
// https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+jsx+tsx+typescript
import Prism from '../../../components/PrismScript/prism';
import { BlogPageSeo } from '../BlogPageSeo';
import { PageLayout } from '../../Layout/PageLayout';
import { Footer } from '../../Footer';
import { Nav } from '../../Nav';
import { PostRenderer } from './DocumentRenderer/DocumentRenderer';
import type { BlogpageData } from '../../../data/blogpage';

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
      <PageLayout className="max-w-3xl grid grid-rows-[1fr_auto]">
        <main>
          <header className="text-center grid auto-rows-auto pb-2">
            <Nav theme={config?.theme} />
          </header>
          <div className="pb-4">
            <Link href="/">
              <a className="no-underline hover:text-link before:content-['←'] before:pr-1 hover:before:-translate-x-1 before:inline-block before:transition-all before:duration-150 before:ease-in-out">
                back home
              </a>
            </Link>
          </div>
          <article className="prose lg:prose-lg prose:slate dark:prose-invert max-w-none pb-8">
            <h1 className="!mb-0 pb-4 !leading-[1.1em]">{post.title}</h1>
            <div className="text-sm text-text-muted dark:text-text-muted">{formattedDate}</div>
            <PostRenderer document={post.content?.document} />
          </article>
        </main>
        <Footer theme={config?.theme} />
      </PageLayout>
    </React.Fragment>
  );
}
