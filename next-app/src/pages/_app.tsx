import '../styles/globals.css';
import '../styles/theme-sleek.css';
import '../styles/theme-newspaper.css';
import '../styles/theme-cardboard.css';
import '../styles/prism-customised.css';
/* 
  We import the styles here to prevent 
  svg flash while loading the server rendered page 
*/
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
