import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeToggle } from './ThemeToggle';

function TopNav() {
  return (
    <div className="justify-self-end py-2 flex items-center content-center">
      <a
        href="https://github.com/flexdinesh"
        aria-label="Dinesh on GitHub"
        rel="noopener noreferrer"
        target="_blank"
        className="text-2xl ml-4 hover:text-primary-800 dark:hover:text-secondary-800"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/flexdinesh"
        aria-label="Dinesh on Twitter"
        rel="noopener noreferrer"
        target="_blank"
        className="text-2xl ml-4 hover:text-primary-800 dark:hover:text-secondary-800"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <ThemeToggle />
    </div>
  );
}

function Intro() {
  return (
    <React.Fragment>
      <h1 className="text-ellipsis whitespace-nowrap overflow-hidden text-center dark:text-white text-5xl px-4 pt-4 pb-2">
        <span className="fancy-name after:w-11/12 after:bg-gradient-to-bl after:from-primary-500 after:to-primary-700 dark:after:from-secondary-500 dark:after:to-secondary-700">
          Blogger Templater
        </span>
      </h1>
      <p className="text-md mt-4 px-4">
        Hello! Welcome to my blog. This is a template to build your own static blogs with Keystone.
      </p>
    </React.Fragment>
  );
}

export function HomepageHeader() {
  return (
    <header className="grid auto-rows-auto pb-2">
      <TopNav />
      <Intro />
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
