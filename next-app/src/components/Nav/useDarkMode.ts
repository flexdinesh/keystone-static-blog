import React from 'react';

type Mode = 'light' | 'dark';

export function getCurrentMode() {
  if (typeof window !== 'undefined') {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  return null;
}

export function setModeAsBodyAttribute(mode: Mode) {
  if (typeof window !== 'undefined') {
    if (mode === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('mode', 'light');
    }
  }
}

export function useDarkMode() {
  const [mode, setMode] = React.useState<Mode | null>(null);

  React.useEffect(() => {
    const currentMode = getCurrentMode();
    if (currentMode === 'dark') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  function toggleMode(isEnabled: boolean) {
    if (isEnabled) {
      setMode('dark');
      setModeAsBodyAttribute('dark');
    } else {
      setMode('light');
      setModeAsBodyAttribute('light');
    }
  }

  return { mode, toggleMode };
}
