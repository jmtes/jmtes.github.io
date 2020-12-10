import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';

import Navbar from './navbar';

export const siteTitle = 'Juno Tesoro';

const Layout = ({
  children,
  home
}: {
  children: React.ReactNode;
  home?: boolean;
}) => (
  <div
    className={`${styles.container} ${
      home ? styles['container--index'] : styles['container--page']
    }`}
  >
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content='This is my portfolio site!' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap'
        rel='stylesheet'
      />
    </Head>
    {!home && (
      <>
        <Navbar />
        <div className={styles.sidebar}>
          <div className={styles['sidebar__content']}>
            <img
              src='images/profile.jpg'
              alt='A picture of me'
              className={styles['sidebar__img']}
            />
            <h1 className={styles['sidebar__title']}>
              <Link href='/'>
                <a>Juno Tesoro</a>
              </Link>
            </h1>
            <nav className={styles['sidebar__nav']}>
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
        </div>
      </>
    )}
    <main>{children}</main>
  </div>
);

export default Layout;
