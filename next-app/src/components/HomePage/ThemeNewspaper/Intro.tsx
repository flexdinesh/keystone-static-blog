import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
