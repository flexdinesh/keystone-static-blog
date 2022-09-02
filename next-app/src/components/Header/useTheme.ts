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
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}

export function useTheme() {
  const [mode, setMode] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    const currentTheme = getCurrentTheme();
    if (currentTheme === 'dark') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

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
