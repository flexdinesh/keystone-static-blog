import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* TODO: we need this only in blog pages */}
        {/* theme for code block syntax highlighting */}
        <link href="/prism-themes/dracula.css" rel="stylesheet"></link>
        {/* 
          The page is server rendered during build-time and hydrated on the browser client.
          While server rendering we do not know what the user's preferred/saved theme is and default to light theme.
          So we run this script in the browser before the page is rendered (not the react render but the browser render)
          and set the theme class in html element so our styles would know which theme to paint on first paint.
          All this to avoid a flash of default light theme when user either prefers dark theme or has previously
          save dark theme to their local storage. ¯\_(ツ)_/¯ React is hard sometimes.
         */}
        <Script id="set-default-theme-script" strategy="beforeInteractive">
          {`
            // check localstorage and system preference to set default theme
            if (typeof window !== 'undefined') {
              const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const localStorageTheme = localStorage.theme;
              if (!localStorageTheme && isSystemThemeDark) {
                document.documentElement.classList.add('dark');
              } else if (localStorageTheme) {
                document.documentElement.classList.add(localStorageTheme);
              }
            }
          `}
        </Script>
      </Head>
      <body className="text-slate-900 dark:text-slate-200 bg-bg-light  dark:bg-bg-dark dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
