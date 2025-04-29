// pages/_app.tsx
import '../styles/globals.css'; // Import the global CSS file
import type { AppProps } from 'next/app'; // Import AppProps from next/app

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
