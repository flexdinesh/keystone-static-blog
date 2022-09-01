import React from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from './useTheme';

type Props = {
  forPage: 'home' | 'blog';
};

function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Switch
      checked={mode === 'dark'}
      onChange={toggleTheme}
      className={`${
        mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      } absolute top-4 right-4 inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Switch theme</span>
      <span
        className={`${
          mode === 'dark'
            ? ' translate-x-6 from-secondary-200 to-secondary-800'
            : 'translate-x-1 from-primary-200 to-primary-800'
        } inline-block h-4 w-4 transition-all duration-300 rounded-full bg-gradient-to-tr `}
      />
    </Switch>
  );
}

export function Header({ forPage = 'home' }: Props) {
  // semantically correct tags for SEO in home vs other pages
  const HeaderTag = forPage === 'home' ? 'h1' : 'h3';

  return (
    <header className="relative pb-8 text-center pt-16">
      <ThemeToggle />
      {/* Add an avatar if needed */}
      <HeaderTag className="mb-4 text-5xl font-black leading-4 inline bg-no-repeat relative after:content-[''] after:absolute after:h-4 after:left-0 after:right-0 after:bottom-1 after:-left-1 after:-z-10 after:bg-primary-500 after:w-11/12 dark:after:bg-primary-600 dark:text-slate-50">
        Dinesh Pandiyan
      </HeaderTag>
      <p className="text-typography-secondary font-medium text-sm tracking-wider mt-2">
        I talk and write about web.
      </p>
    </header>
  );
}
