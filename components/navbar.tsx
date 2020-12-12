import Link from 'next/link';

import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <input
        type='checkbox'
        name='menu-toggle'
        id='menu-toggle'
        className={styles['navbar__menu-toggle']}
      />
      <label
        htmlFor='menu-toggle'
        className={styles['navbar__menu-btn']}
      ></label>
      <h1 className={styles['navbar__title']}>
        <Link href='/'>
          <a>Juno Tesoro</a>
        </Link>
      </h1>
      <nav className={styles['navbar__menu']}>
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
  );
};

export default Navbar;
