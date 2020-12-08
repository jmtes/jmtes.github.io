import { AppProps } from 'next/app';

// GLOBAL STYLES
// Next.js has support for when you want some CSS to be loaded by every
// page on your app.

// The key is to create this pages/_app.js file.
// The App component in this file is the top-level component which will be
// common across all the different pages. You can use it to keep state when
// navigating between pages, for example. Here though, we will be using it
// to hold global styles.

// You can add global CSS files by importing them from this file.
// You cannot import global CSS from anywhere else!

// This global CSS file can be anywhere and use any name.
// Notice that it doesn't need/use the .module.css extension.
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
