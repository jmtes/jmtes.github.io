import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

const About = () => (
  <Layout>
    <Head>
      <title>{`${siteTitle} - About`}</title>
    </Head>
    <main>
      <h2>About me</h2>
      <p>
        Hi, I’m Juno! I’m a developer based in southern California. You can find
        me <a href='https://github.com/jmtes'>here</a> on Github!
      </p>

      <p>
        Right now, I’m seeking internships, apprenticeships, or entry-level
        roles. Preferrably they’d be for the frontend, but I’d be comfortable
        with the full stack as well!
      </p>

      <p>
        I started coding when I was 12 because I wanted to better personalize
        the look of my anime blog on Tumblr. I started out by just copying and
        pasting themes other people had written (honestly though, who didn’t
        start coding like this?) but eventually I wanted to know what all the
        strange words were actually doing, so I started diving into HTML, CSS,
        and Javascript from there! I had a lot of fun with it and decided I
        wanted a job in web development in the future.
      </p>

      <p>
        After graduating high school in 2018, I opted to attend a coding
        bootcamp in San Francisco where I trained in the full stack. So now I
        can whip up UIs and APIs/databases to populate them! Because of my start
        with HTML, CSS, and JS though, I’m still much more drawn to the
        frontend. Can’t forget about my roots, after all!
      </p>

      <p>
        When I’m not coding, I like making 3D art, playing video games, petting
        my cats, and reading the works of Haruki Murakami. I’d love to{' '}
        <Link href='/contact'>
          <a>chat</a>
        </Link>{' '}
        about any of those things in addition to tech! Thanks for reading!
      </p>
    </main>
  </Layout>
);

export default About;
