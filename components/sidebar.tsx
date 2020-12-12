import Link from 'next/link';

import styles from '../styles/sidebar.module.css';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles['sidebar__content']}>
      <img
        src='images/profile.jpg'
        alt='A picture of me'
        className={styles['sidebar__img']}
      />
      <h1 className={styles['sidebar__title']}>
        <Link href='/'>
          <a>Juno Tesoro</a>
        </Link>
      </h1>
      <nav className={styles['sidebar__nav']}>
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
