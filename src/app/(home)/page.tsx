import styles from '@/styles/Home.module.css';
import { CategoryList } from '@/types/book';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

const API_URL = 'https://books-api.nomadcoders.workers.dev/lists';

const fetchCategoryList = async () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((res) => res.results);
};

const Home = async () => {
  const categoryList = await fetchCategoryList();
  return (
    <section className={styles.categoryBox}>
      <div className={styles.title}>
        <h2>Explore Our Book Categories</h2>
      </div>

      <div className={styles.categoryList}>
        {categoryList.map((book: CategoryList) => (
          <Link key={book.list_name_encoded} href={`/list/${book.list_name_encoded}`}>
            <div className={styles.category}>{book.display_name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
