import React, { ReactNode } from 'react';

type QuoteProps = {
  attribution: ReactNode;
  content: ReactNode;
};

export function Quote({ attribution, content }: QuoteProps) {
  return (
    <div className="not-prose my-8">
      <blockquote className="relative bg-neutral-100 dark:bg-slate-900/50 rounded-md pt-4 pr-3 pb-4 pl-12 after:content-['\201C'] after:absolute after:top-0 after:left-4 after:text-7xl">
        <div className="italic text-gray-600 dark:text-neutral-200">{content}</div>
        {attribution && <div className="font-bold dark:text-neutral-100">— {attribution}</div>}
      </blockquote>
    </div>
  );
}
