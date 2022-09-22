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
        },
      }}
    />
  );
}

export function Intro({ meta }: HomepageData) {
  return (
    <React.Fragment>
      <h1 className="text-ellipsis whitespace-nowrap overflow-hidden text-center dark:text-text-heading text-5xl px-4 pt-4 pb-2">
        <span className="fancy-name after:w-11/12 after:bg-gradient-to-bl after:from-primary-500 after:to-primary-700 dark:after:from-primary-500 dark:after:to-primary-700">
          {meta?.title}
        </span>
      </h1>
      <div className="text-md mt-4 px-4 leading-[1.8]">
        <AboutRenderer document={meta?.about?.document} />
      </div>
    </React.Fragment>
  );
}
