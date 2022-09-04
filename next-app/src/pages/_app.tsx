import '../styles/globals.css';
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
