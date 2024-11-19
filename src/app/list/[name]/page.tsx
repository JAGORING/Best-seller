import BookCard from '@/components/BookCard';
import styles from '@/styles/Detail.module.css';
import { Book } from '@/types/book';
import { Metadata } from 'next';

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

      {bookList.books ? (
        <div className={styles.bookGrid}>
          {bookList.books.map((book) => (
            <BookCard key={book.primary_isbn10} book={book} />
          ))}
        </div>
      ) : (
        <div className={styles.title}>
          <h2>No matching data found.</h2>
        </div>
      )}
    </section>
  );
};

export default Detail;
