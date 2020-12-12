import Link from 'next/link';

import styles from '../styles/sidebar.module.css';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div>
      <img
        src='images/profile.jpg'
        alt='A picture of me'
        className={styles.img}
      />
      <h1 className={styles.title}>
        <Link href='/'>
          <a>Juno Tesoro</a>
        </Link>
      </h1>
      <nav className={styles.nav}>
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
);

export default Sidebar;
