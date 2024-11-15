'use client';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>Best Seller</h1>
      </div>

      <ul className={styles.menu}>
        <li className={path === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={path === '/about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
