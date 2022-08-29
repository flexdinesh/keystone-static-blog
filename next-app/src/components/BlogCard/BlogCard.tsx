import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { A } from '../A';

export type Post = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  publishDate: string;
};

export function BlogCard({ post }: { post: Post }) {
  const formattedDate = post.publishDate ? format(new Date(post.publishDate), 'MMM yy') : null;
  return (
    <div className="grid grid-cols-2 gap-y-2.5 text-xl mb-6" key={post.id}>
      <Link href={`/blog/${post.slug}`}>
        <A className="border-b-0 text-current relative hover:after:bg-primary after:content-[''] after:absolute after:h-1 after:bg-transparent after:left-0 after:right-0 after:bottom-0">
          {post.title}
        </A>
      </Link>
      <div className="tracking-wider text-typography-tertiary text-sm m-0 justify-self-end">{formattedDate || 'Jan, 2022'}</div>
      <div className="tracking-wider text-typography-secondary text-sm m-0">{post.tag || '#javascript'}</div>
    </div>
  );
}
