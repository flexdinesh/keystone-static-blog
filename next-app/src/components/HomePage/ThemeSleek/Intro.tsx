import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import type { HomepageData } from '../../../data/homepage';

function AboutRenderer({ document }: DocumentRendererProps) {
  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          block: React.Fragment,
          paragraph({ children }) {
            return <p>{children}</p>;
          },
        },
        inline: {
          code({ children }) {
            return <code>{children}</code>;
          },
          link({ children, href }) {
            return (
              <a href={href} target="_blank" className="hover:text-link dark:hover:text-link">
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
}

export function Intro({ meta }: HomepageData) {
  return (
    <React.Fragment>
      <h1 className="text-center dark:text-text-heading text-5xl px-4 pt-4 pb-8">
        <span
          className="
            font-extrabold 
            bg-gradient-to-bl bg-no-repeat bg-left-bottom bg-[length:90%_35%]
            from-primary-400 to-primary-700 dark:from-primary-400 dark:to-primary-700
          "
        >
          {meta?.title}
        </span>
      </h1>
      <div className="text-md mt-4 px-4 leading-[1.8]">
        <AboutRenderer document={meta?.about?.document} />
      </div>
    </React.Fragment>
  );
}
