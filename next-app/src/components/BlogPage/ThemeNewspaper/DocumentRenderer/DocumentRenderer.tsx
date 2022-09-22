import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { Hero } from './Hero';
import { Callout } from './Callout';
import { Quote } from './Quote';
import { Tweet } from './Tweet';
import { YouTubeVideo } from './YouTubeVideo';

const defaultElementRenderers: DocumentRendererProps['renderers'] = {
  block: {
    // all custom components are block components
    // so they will be wrapped with a <div /> by default
    // we can override that to whatever wrapper we want
    // for eg. using React.Fragment wraps the component with nothing
    block: React.Fragment,
    heading({ level, children, textAlign }) {
      const HeadingTag = `h${level}` as const;
      return (
        <HeadingTag style={{ textAlign }}>
          <span className="after:mt-6 after:content-[''] after:block after:h-[1px] after:w-[100%] after:border-b-[1px] after:border-current">
            {children}
          </span>
        </HeadingTag>
      );
    },
    paragraph({ children, textAlign }) {
      return <p style={{ textAlign }}>{children}</p>;
    },
    // code blocks ``` ```
    code({ children }) {
      return (
        <pre style={{ width: '99%' }}>
          <code style={{ whiteSpace: 'pre-wrap' }}>{children}</code>
        </pre>
      );
    },
  },
  inline: {
    // inline code ` `
    code({ children }) {
      return <code>{children}</code>;
    },
  },
};

type PostRendererProps = React.ComponentProps<typeof DocumentRenderer>;

const customComponentRenderers: PostRendererProps['componentBlocks'] = {
  hero: props => {
    return <Hero {...props} />;
  },
  callout: props => {
    return <Callout {...props} />;
  },
  quote: props => {
    return <Quote {...props} />;
  },
  tweet: props => {
    return <Tweet {...props} />;
  },
  youtubeVideo: props => {
    return <YouTubeVideo {...props} />;
  },
  code: function Code({ content, language }: any) {
    return (
      <section
        className={`not-prose text-sm mb-8 rounded-md language-${language} flex items-center justify-center bg-slate-900 dark:bg-slate-900`}
      >
        {content}
      </section>
    );
  },
};

export function PostRenderer({ document }: DocumentRendererProps) {
  return (
    <DocumentRenderer
      document={document}
      renderers={defaultElementRenderers}
      componentBlocks={customComponentRenderers}
    />
  );
}
