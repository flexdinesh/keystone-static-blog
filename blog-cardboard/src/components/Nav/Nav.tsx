import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { DarkModeToggle } from './DarkModeToggle';

export function Nav() {
  return (
    <div className="grid grid-cols-[1fr_5rem] items-center py-2 gap-2">
      <div className="flex items-center justify-end gap-4">
        <a
          href="https://github.com/flexdinesh"
          aria-label="Dinesh on GitHub"
          rel="noopener noreferrer"
          target="_blank"
          className="
            rounded-sm
            transition-[background-size] duration-150 ease-in-out
            bg-left-bottom bg-[length:0%_55%] hover:bg-[length:100%_55%]
            bg-no-repeat bg-gradient-to-r from-[#FFDE69] to-[#FFDE69]
            dark:bg-none dark:hover:text-[#FFDE69]
          "
        >
          <FontAwesomeIcon className="mr-1" icon={faGithub} />
          <span>Github</span>
        </a>
        <a
          href="https://twitter.com/flexdinesh"
          aria-label="Dinesh on Twitter"
          rel="noopener noreferrer"
          target="_blank"
          className="
            rounded-sm
            transition-[background-size] duration-150
            bg-left-bottom bg-[length:0%_55%] hover:bg-[length:100%_55%]
            bg-no-repeat bg-gradient-to-r from-[#8AE6FB] to-[#8AE6FB] dark:from-[#8AE6FB] dark:to-[#8AE6FB] 
            dark:bg-none dark:hover:text-[#8AE6FB]
          "
        >
          <FontAwesomeIcon className="mr-1" icon={faTwitter} />
          <span>Twitter</span>
        </a>
      </div>
      <DarkModeToggle />
    </div>
  );
}
