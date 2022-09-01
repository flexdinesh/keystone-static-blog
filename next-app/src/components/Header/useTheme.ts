import React from 'react';

type Theme = 'light' | 'dark';

export function getCurrentTheme() {
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

export function setTheme(theme: Theme) {
  if (typeof window !== 'undefined') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

export function useTheme() {
  const [mode, setMode] = React.useState<Theme>(() => {
    const currentTheme = getCurrentTheme();
    if (currentTheme === 'dark') {
      return 'dark';
    }
    return 'light';
  });

  function toggleTheme(isEnabled: boolean) {
    if (isEnabled) {
      setTheme('dark');
      setMode('dark');
    } else {
      setTheme('light');
      setMode('light');
    }
  }

  return { mode, toggleTheme };
}
