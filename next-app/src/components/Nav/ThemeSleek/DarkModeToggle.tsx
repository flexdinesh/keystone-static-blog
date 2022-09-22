import React from 'react';
import { Switch } from '@headlessui/react';
import { useDarkMode } from '../useDarkMode';

function SunMoon({ mode }: { mode: 'dark' | 'light' }) {
  return (
    <span
      className={`
        inline-block h-4 w-4 transition-all duration-300 rounded-full bg-gradient-to-tr 
        ${
          mode === 'dark'
            ? 'translate-x-6 from-primary-200 to-primary-800'
            : 'translate-x-1 from-primary-200 to-primary-800'
        }
        `}
    >
      <span
        className={`absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-gray-700
          ${mode === 'dark' ? 'scale-[1]' : 'scale-[0]'}
          `}
      ></span>
    </span>
  );
}

/*
  since we don't know the user's saved dark/light during server rendering 
  we're doing this not-great-but-good-enough trick —
  hide the toggle slider during server rendering and hydration and render it only on client
*/
export function DarkModeToggle() {
  const { mode, toggleMode } = useDarkMode();

  const bgColor =
    mode === null ? 'bg-transparent' : mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
  return (
    <Switch
      checked={mode === 'dark'}
      onChange={toggleMode}
      className={`${bgColor} ml-4 inline-flex h-6 w-11  items-center rounded-full`}
    >
      <span className="sr-only">Toggle dark mode</span>
      {mode === null ? null : <SunMoon mode={mode} />}
    </Switch>
  );
}
