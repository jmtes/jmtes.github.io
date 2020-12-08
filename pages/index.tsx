import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

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
    <section className={utilStyles.headingMd}>
      <p>
        I'm Juno. I'm a software developer and a purveyor of miseries and
        platitudes.
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

// STATIC GENERATION
// Pages will be generated during build time and reused for each request.
// Can be done with or without data.

// Use static generation as opposed to server-side rendering whenever you
// can! As a rule of thumb you should only use server-side rendering if
// your page contains data that needs to be constantly updated or that
// changes on every request.

// STATIC GENERATION WITH DATA
// For some pages, you might not be able to render the HTML without fetching
// some external data first.
// You might need to access the file system, fetch from an external API,
// query your DB, etc. at build time.

// This is when getStaticProps comes in!
// It's an async function exported alongside a page component that runs at
// build time in production. Inside it you can fetch external data and
// return an object containing a `props` key, which, as you may be able to
// guess, will be passed to the page component as props.

// Essentially, getStaticProps tells Next.js, "Hey, this page has some data
// dependencies, so when you pre-render this page at build time, make sure
// to resolve them first!"

// See below for an example on how to use getStaticProps!
// For more, see the Data Fetching section of the Next.js docs.

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return { props: { allPostsData } };

  // Example to fetch from external API
  // Next.js polyfills fetch on both the client and server, so you don't
  // have to worry about importing it!
  const res = await fetch('..');
  return res.json();

  // You can do Prisma queries here too, I imagine!
  // getStaticProps only ever runs on the server-side, which means you can
  // write code sich as direct database queries without them being sent to
  // browsers!
  // Ooh, this means you can probably use this to use the Imgur API or
  // something without having to expose your key/token in the client-side
  // code!
};

// Note that, because getStaticProps is meant to be run at build time, you
// won't be able to use data that's only available during request time, such
// as query parameters or HTTP headers.

// It's also worth noting that getStaticProps can only be exported from a
// page (that is, a file under the top-level pages directory).

// SERVER SIDE RENDERING
// The process of using server-side rendering is pretty much identical to
// the one used for static generation.
// Simply export an async function called getServerSideProps instead of
// getStaticProps!

// See the usage example below!

// The context param contains request-specific data such as query params,
// headers, etc.
// export const getServerSideProps = (context) => {
//   return {
//     props: {}
//   };
// };

// Again, use SSR only if you need to pre-render a page whose data must be
// fetched at request time!

// For more, see the Data Fetching section of the Next.js docs!

// CLIENT SIDE RENDERING
// Do this if you do not need to pre-render page data.
// You're still pre-rendering the parts of the page that do not require
// external data. External data is only fetched from the client using JS
// once the page loads in their browser though, after which the remaining
// parts of the page are populated.

// A use case for this approach is for a user dashboard page. Because a
// dashboard is a private, user-specific page, SEO is irrelevant and no pre-
// rendering is needed. Additionally, the data on a dashboard is frequently
// updated, which requires request-time data fetching.

// The Next.js team created a React hook for data fetching called useSWR.
// It's highly recommended for fetching data on the client side. See the
// SWR documentation for more.

export default Home;
