import React from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from './useTheme';

/*
  since we don't know the user's saved theme during server rendering 
  we're doing this not-great-but-good-enough trick —
  hide the toggle slider during server rendering and hydration and render it only on client
*/
export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  const toggleBackgroundClassname =
    mode === null ? 'bg-transparent' : mode === 'dark' ? 'bg-slate-700' : 'bg-gray-200';
  return (
    <Switch
      checked={mode === 'dark'}
      onChange={toggleTheme}
      className={`${toggleBackgroundClassname} ml-4 inline-flex h-6 w-11  items-center rounded-full`}
    >
      <span className="sr-only">Toggle dark mode</span>
      {mode === null ? null : (
        <span
          className={`${
            mode === 'dark'
              ? ' translate-x-6 from-secondary-200 to-secondary-800'
              : 'translate-x-1 from-primary-200 to-primary-800'
          } inline-block h-4 w-4 transition-all duration-300 rounded-full bg-gradient-to-tr `}
        />
      )}
    </Switch>
  );
}
