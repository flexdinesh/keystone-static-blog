import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';

export function Nav() {
  return (
    <div className="justify-self-end py-2 flex items-center content-center">
      <DarkModeToggle />
    </div>
  );
}
