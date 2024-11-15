import styles from '@/styles/Detail.module.css';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Detail',
};

const API_URL = 'https://books-api.nomadcoders.workers.dev/list';

const fetchBookList = async (name: string) => {
  return fetch(`${API_URL}?name=${name}`)
    .then((res) => res.json())
    .then((res) => res.results);
};

const Detail = async ({ params: { name } }: { params: { name: string } }) => {
  const bookList: Book = await fetchBookList(name);
  return (
    <section className={styles.bookList}>
      <div className={styles.title}>
        <h2>{bookList.display_name}</h2>
      </div>

      <div className={styles.bookGrid}>
        {bookList.books.map((book) => (
          <div className={styles.bookBox} key={book.title}>
            <div className={styles.imageWrapper}>
              <img src={book.book_image} alt={book.description} />
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>{book.author}</p>
              <Link href={book.amazon_product_url || ''} target="_blank" className={styles.learnMoreButton}>
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
