import styles from '@/styles/About.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <section className={styles.aboutBox}>
      <div className={styles.imageWrapper}>
        <img src="/about-us-img.jpg" alt="About Us" />
      </div>

      <div className={styles.title}>
        <h2>About us</h2>
      </div>
      <p className={styles.content}>Welcome to the official explore for the New York Times Best Seller list explore.</p>
      <p className={styles.content}>We hope you enjoy your stay!</p>
    </section>
  );
}
