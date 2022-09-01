import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link href="/prism-themes/dracula.css" rel="stylesheet"></link>
      </Head>
      <body className="text-slate-900 dark:text-slate-200 bg-bg-light  dark:bg-bg-dark dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
