import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';

const renderers: DocumentRendererProps['renderers'] = {
  block: {
    heading({ level, children, textAlign }) {
      const HeadingTag = `h${level}` as const;
      return <HeadingTag style={{ textAlign }}>{children}</HeadingTag>;
    },
    paragraph({ children, textAlign }) {
      return <p style={{ textAlign }}>{children}</p>;
    },
    code({ children }) {
      return <pre>{children}</pre>;
    },
  },
  // inline: {
  //   code({children}) {
  //     return <code>{children}</code>
  //   }
  // },
};

export function CustomRenderer({ document }: DocumentRendererProps) {
  return <DocumentRenderer document={document} renderers={renderers} />;
}
