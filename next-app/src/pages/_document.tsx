import { Fragment } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ConfigThemeType } from '../.generated/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Document(props: any) {
  const config = props?.__NEXT_DATA__?.props?.pageProps?.config;
  const theme: ConfigThemeType = config?.theme || ConfigThemeType.Sleek;

  const font: Record<ConfigThemeType, JSX.Element | null> = {
    sleek: (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=block"
          rel="stylesheet"
        />
      </Fragment>
    ),
    newspaper: (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;0,800;1,400;1,700&display=block"
          rel="stylesheet"
        />
      </Fragment>
    ),
    cardboard: (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:ital,wght@0,400;0,700;0,800;1,400;1,700&display=block"
          rel="stylesheet"
        />
      </Fragment>
    ),
  };

  return (
    <Html className={`theme-${theme}`} lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
        {font[theme]}
        {/* 
          The page is server rendered during build-time and hydrated on the browser client.
          While server rendering we do not know what the user's preferred/saved theme is and default to light theme.
          So we run this script in the browser before the page is rendered (not the react render but the browser render)
          and set the theme class in html element so our styles would know which theme to paint on first paint.
          All this to avoid a flash of default light theme when user either prefers dark theme or has previously
          save dark theme to their local storage. ¯\_(ツ)_/¯ React is hard sometimes.
         */}
        <Script
          id="set-default-mode-script"
          strategy="beforeInteractive"
          src="/scripts/init-mode.js"
        ></Script>
      </Head>
      <body className="text-text-base dark:text-text-base bg-bg dark:bg-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
