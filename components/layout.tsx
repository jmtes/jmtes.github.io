import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';

const name = 'Juno Tesoro';
export const siteTitle = 'Juno Tesoro';

const Layout = ({
  children,
  home
}: {
  children: React.ReactNode;
  home?: boolean;
}) => (
  <div className={`${styles.container}`}>
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
      <div className='sidebar'>
        <img
          src='images/profile.jpg'
          alt='A picture of me'
          className='sidebar__img'
        />
        <h1 className='sidebar__title'>
          <Link href='/'>
            <a>Juno Tesoro</a>
          </Link>
        </h1>
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
    <main className={home && 'index'}>{children}</main>
  </div>
);

export default Layout;
