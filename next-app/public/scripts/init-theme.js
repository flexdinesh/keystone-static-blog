// check localstorage and system preference to set default theme
if (typeof window !== 'undefined') {
  const isSystemColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localStorageMode = localStorage.mode;
  if (!localStorageMode && isSystemColorSchemeDark) {
    document.documentElement.classList.add('dark');
  } else if (localStorageMode) {
    document.documentElement.classList.add(localStorageMode);
  }
}
