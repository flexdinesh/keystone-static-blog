import React from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { DocumentRendererProps } from '@keystone-6/document-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { DarkModeToggle } from './DarkModeToggle';
import type { HomepageData } from '../../data/homepage';

function TopNav() {
  return (
    <div className="justify-self-end py-2 flex items-center content-center">
      <a
        href="https://github.com/flexdinesh"
        aria-label="Dinesh on GitHub"
        rel="noopener noreferrer"
        target="_blank"
        className="text-2xl ml-4 hover:text-link dark:hover:text-link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/flexdinesh"
        aria-label="Dinesh on Twitter"
        rel="noopener noreferrer"
        target="_blank"
        className="text-2xl ml-4 hover:text-link dark:hover:text-link"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <DarkModeToggle />
    </div>
  );
}

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

function Intro({ meta }: HomepageData) {
  return (
    <React.Fragment>
      <h1 className="text-ellipsis whitespace-nowrap overflow-hidden text-center dark:text-text-heading text-5xl px-4 pt-4 pb-2">
        <span className="fancy-name after:w-11/12 after:bg-gradient-to-bl after:from-primary-500 after:to-primary-700 dark:after:from-primary-500 dark:after:to-primary-700">
          {meta?.title}
        </span>
      </h1>
      <div className="text-md mt-4 px-4">
        <AboutRenderer document={meta?.about?.document} />
      </div>
    </React.Fragment>
  );
}

export function HomepageHeader(homepageData: HomepageData) {
  return (
    <header className="grid auto-rows-auto pb-2">
      <TopNav />
      <Intro {...homepageData} />
    </header>
  );
}

export function BlogpageHeader() {
  return (
    <header className="text-center grid auto-rows-auto pb-2">
      <TopNav />
    </header>
  );
}
