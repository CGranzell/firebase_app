import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.mainContainer}>
      <div className={styles.navLinksContainer}>
        <Link href="#">Senaste</Link>
        <Link href="#">Nyheter</Link>
        <Link href="#">Om Oss</Link>
      </div>
      <div className={styles.loginContainer}>

      <Link href="/login">Login</Link>
      </div>

    </nav>
  );
};

export default Nav;
