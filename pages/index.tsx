import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

// LINKS
// In the h1, a Link component is used to wrap an a tag to allow for
// client-side navigation within the app.

// The page transition happens using JS, which is faster than the default
// navigation done by the browser.
// With client-side navigation, the broswer no longer has to load full
// pages, and thus perform complete refreshes, in between page transitions.

// Furthermore, Next.js does code splitting automatically, meaning each
// page only loads what's necessary for that page. When the homepage is
// rendered, the code for other pages is not served initially, which lets
// the homepage load quickly even if hundreds of pages are added.

// In a production build also, whenever Link components appear in the
// browser viewport, Next.js automatically prefetches the code for the
// linked page in the background, making page transitions near-instant.

// This code splitting also means that pages become isolated. If one page
// throws an error, the rest of the app should still work.

// Notes
// If you need to link to an external page, just use a regular <a> tag.
// If you need to add attributes like className, add them to the <a> tag,
// not the Link tag. The Link should only have an href attribute.

// For more, refer to the routing section of the Next.js docs.

// STATIC ASSETS
// Static files can be served under the top level public directory.

// Files inside of this directory can be referenced from the root of the
// app similarly to pages. Note how the logo image in the footer is referred.

// If you wanted to add a new asset /images/me.jpg, the file path would be
// public/images/me.jpg.

// For more, refer to the Static File Serving section of the Next.js docs.

// METADATA
// Head is a React component built into Next.js that allows you to modify
// the <head> metadata of a page. It's imported from the next/head module.

// For more, see the API reference for next/head.
// If you want to customize the <html> tag, you can do so by creating a
// pages/_document.js file. Learn more in the custom Document
// documentation.

// CSS STYLING
// Next.js has built-in support for Styled-JSX, which is what is used in
// this example. You can still use other popular CSS-in-JS libraries
// such as Styled-Components or Emotion, but they don't have support
// built-in.

// There's also built-in support for CSS (Modules) and SASS, which allows
// you to import CSS and SCSS files.

// Using CSS libraries like Tailwind CSS is also supported.

// You can use the classnames library to toggle classes.
// You can use SCSS/SASS via CSS Modules using the .module.scss or
// .module.sass extensions. Just be sure to install SASS first!

// For more, see the CSS section of the Next.js documentation.

const Home = ({
  allPostsData
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={''}>
      <p>
        I'm Juno. I'm a software developer and a purveyor of miseries and
        platitudes.
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${''} ${''}`}>
      <h2 className={''}>Blog</h2>
      <ul className={''}></ul>
    </section>
  </Layout>
);

export default Home;
