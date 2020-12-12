import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

import styles from '../styles/index.module.css';

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <img
      src='images/profile.jpg'
      alt='A picture of me'
      className={styles.image}
    />
    <h1 className={styles.intro}>Hi, I'm Juno! I'm a software developer. </h1>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/about'>
            <a>Read about me</a>
          </Link>
        </li>
        <li>
          <Link href='/portfolio'>
            <a>See my portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact me</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Layout>
);

export default Home;
