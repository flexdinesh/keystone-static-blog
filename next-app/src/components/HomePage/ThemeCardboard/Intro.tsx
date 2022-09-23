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
      <h1 className="text-center dark:text-text-heading text-5xl px-4 pt-4 pb-8">
        <span
          className="font-extrabold
            bg-gradient-underline bg-gradient-to-bl bg-no-repeat bg-[bottom_left] from-primary-300 to-primary-300 dark:from-primary-600 dark:to-primary-600
          "
        >
          {meta?.title}
        </span>
      </h1>
      <div className="mx-auto max-w-4xl text-md mt-4 px-4 flex items-center justify-center leading-[1.9]">
        <AboutRenderer document={meta?.about?.document} />
      </div>
    </React.Fragment>
  );
}
