import Head from 'next/head';

import styles from '../styles/layout.module.css';

import Navbar from './navbar';
import Sidebar from './sidebar';

export const siteTitle = 'Juno Tesoro';

const Layout = ({
  children,
  home
}: {
  children: React.ReactNode;
  home?: boolean;
}) => (
  <div className={`${styles.container} ${home ? styles.index : styles.page}`}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content='This is my portfolio site!' />
      <meta charSet='UTF-8' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap'
        rel='stylesheet'
      />
    </Head>
    {!home && (
      <>
        <Navbar />
        <Sidebar />
      </>
    )}
    <main>{children}</main>
  </div>
);

export default Layout;
