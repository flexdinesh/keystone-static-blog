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
        <link href="/prism-themes/dracula.css" rel="stylesheet"></link>
        <Script id="show-banner" strategy="beforeInteractive">
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
