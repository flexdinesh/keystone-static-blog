import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import type { HomepageData } from '../../data/homepage';

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
              <a href={href} target="_blank">
                <span
                  className="
                    hover:text-link hover:dark:text-link
                    bg-gradient-to-r bg-left-bottom bg-no-repeat
                    bg-[length:100%_2px] hover:bg-[length:100%_2px] dark:bg-[length:100%_2px] hover:dark:bg-[length:100%_2px]
                    from-link to-link 
                    dark:from-link dark:to-link
                  "
                >
                  {children}
                </span>
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
            bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:90%_40%]
            from-primary-300 to-primary-300 dark:from-primary-600 dark:to-primary-600
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
