import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import Project from '../components/project';

const Portfolio = () => (
  <Layout>
    <Head>
      <title>{`${siteTitle} - Portfolio`}</title>
    </Head>

    <h2>Portfolio</h2>
    <Project
      name='Bearbnb'
      technologies='GraphQL, Prisma, and PostgreSQL'
      desc="A simple clone of the Airbnb API. Allows users to create accounts, upload listings, browse and book others' listings, and write reviews for them, among other things."
      links={[
        {
          href: 'https://bearbnb-api.herokuapp.com/',
          text: 'GraphQL Playground'
        },
        { href: 'https://github.com/jmtes/bearbnb-server', text: 'Github' }
      ]}
    />
    <Project
      name='mybadtweets'
      technologies='Node and Vanilla JS'
      desc='You log in with Twitter and it shows you your least popular tweets as a slideshow, warranting that you have to see each and every one of them. You can then delete individual tweets out of shame or retweet them to give them another chance right from the app without needing to go to Twitter and search for them yourself.'
      links={[
        { href: 'https://mybadtweets.herokuapp.com', text: 'Demo' },
        { href: 'https://github.com/jmtes/mybadtweets', text: 'Github' }
      ]}
    />
  </Layout>
);

export default Portfolio;
