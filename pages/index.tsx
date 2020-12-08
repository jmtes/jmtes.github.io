import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <img src='images/profile.jpg' alt='A picture of me' />
    <h1>Hi, I'm Juno! I'm a software developer.</h1>
    <nav>
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
