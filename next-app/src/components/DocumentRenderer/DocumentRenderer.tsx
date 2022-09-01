import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';

const renderers: DocumentRendererProps['renderers'] = {
  block: {
    block: React.Fragment,
    heading({ level, children, textAlign }) {
      const HeadingTag = `h${level}` as const;
      return <HeadingTag style={{ textAlign }}>{children}</HeadingTag>;
    },
    paragraph({ children, textAlign }) {
      return <p style={{ textAlign }}>{children}</p>;
    },
    code({ children }) {
      return (
        <pre>
          <code style={{ whiteSpace: 'pre-wrap' }}>{children}</code>
        </pre>
      );
    },
  },
};

const componentBlocks = {
  code: function Code({ content, language }: any) {
    return <section className={`language-${language}`}>{content}</section>;
  },
};

export function CustomRenderer({ document }: DocumentRendererProps) {
  return (
    <DocumentRenderer document={document} renderers={renderers} componentBlocks={componentBlocks} />
  );
}
