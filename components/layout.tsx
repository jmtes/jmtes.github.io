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
      <meta name='description' content='This is my portfolio site!' />
    </Head>
    {!home && (
      <div className='sidebar'>
        <img
          src='images/profile.jpg'
          alt='A picture of me'
          className='sidebar__img'
        />
        <h1 className='sidebar__title'>Juno Tesoro</h1>
        <nav className='sidebar__nav'>
          <ul>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )}
    <main>{children}</main>
  </div>
);

export default Layout;
