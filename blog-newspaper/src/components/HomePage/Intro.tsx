import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
              <a
                href={href}
                target="_blank"
                className="
                    hover:text-link hover:dark:text-link
                    bg-gradient-to-r bg-left-bottom bg-no-repeat
                    bg-[length:100%_2px] hover:bg-[length:100%_2px] dark:bg-[length:100%_2px] hover:dark:bg-[length:100%_2px]
                    from-link to-link 
                    dark:from-link dark:to-link
                  "
              >
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
      <h1 className="uppercase tracking-widest text-center dark:text-text-heading text-5xl px-4 pt-4 pb-8">
        <span className="font-extrabold">{meta?.title}</span>
      </h1>
      <div className="border-t-[1px] border-b-[1px] border-current py-2 flex items-center justify-center gap-4">
        <a
          href="https://github.com/flexdinesh"
          aria-label="Dinesh on GitHub"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-link dark:hover:text-link"
        >
          <FontAwesomeIcon className="mr-1" icon={faGithub} />
          <span>Github</span>
        </a>
        <a
          href="https://twitter.com/flexdinesh"
          aria-label="Dinesh on Twitter"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-link dark:hover:text-link"
        >
          <FontAwesomeIcon className="mr-1" icon={faTwitter} />
          <span>Twitter</span>
        </a>
      </div>
      <div className="mx-auto max-w-4xl text-md mt-4 px-4 flex items-center justify-center leading-[1.9]">
        <AboutRenderer document={meta?.about?.document} />
      </div>
    </React.Fragment>
  );
}
