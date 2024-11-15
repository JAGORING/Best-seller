import styles from '@/styles/NotFound.module.css';

export const metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <section className={styles.notFoundBox}>
      <h3 className={styles.text}>This page could not be found</h3>
    </section>
  );
}
