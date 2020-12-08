// COMPONENT-LEVEL STYLES WITH CSS MODULES
// This is a layout component that can be shared across all pages and
// contains styling.

import Head from 'next/head';
import Link from 'next/link';

// Importing a CSS module
import styles from './layout.module.css';

// To use the imported CSS module's container class, simply use
// styles.container as the returned div's className.

// If you inspect the HTML, you'll notice that a unique class name was
// automatically generated for the div. So long as you use CSS Modules or
// some other CSS-in-JS library, you needn't worry about class name
// collisions.

// What's more is that Next.js's code splitting applies to CSS Modules as
// well. It ensures the minimal amount of CSS is loaded for each page,
// resulting in smaller bundle sizes.

const name = 'Juno Tesoro';
export const siteTitle = 'Juno Tesoro';

const Layout = ({
  children,
  home
}: {
  children: React.ReactNode;
  home?: boolean;
}) => (
  <div className={styles.container}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Learn how to build a personal website using Next.js'
      />
      <meta
        property='og:image'
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name='og:title' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <header className={styles.header}>{home ? <></> : <></>}</header>
    <main>{children}</main>
    {!home && <div className={styles.backToHome}></div>}
  </div>
);

export default Layout;
