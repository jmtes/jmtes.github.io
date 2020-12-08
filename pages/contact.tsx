import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';

const Contact = () => (
  <Layout>
    <Head>
      <title>{`${siteTitle} - Contact`}</title>
    </Head>

    <h2>Contact</h2>
    <section className='contact-section contact-section--socials'>
      <h3>My Socials</h3>
      <ul>
        <li>
          <a href='https://linkedin.com/in/jutesoro'>Linkedin</a>
        </li>
        <li>
          <a href='https://twitter.com/jumicates'>Twitter</a>
        </li>
        <li>
          <a href='mailto:junotesoro@gmail.com'>Email</a>
        </li>
      </ul>
      <p>I usually respond to messages within two days.</p>
    </section>
    <section className='contact-section contact-section--chat'>
      <h3>Want to chat in real time?</h3>
      <p>
        I'd love to as well! Check out my{' '}
        <a href='https://calendly.com/junotesoro'>Calendly</a> and find a time
        that works for you. We can chat on Zoom or Meet :)
      </p>
    </section>
  </Layout>
);

export default Contact;
