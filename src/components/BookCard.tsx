import styles from '@/styles/Detail.module.css';
import { Books } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }: { book: Books }) => {
  return (
    <div className={styles.bookBox} key={book.title}>
      <div className={styles.imageWrapper}>
        <Image src={book.book_image} alt={book.description} width={250} height={340} />
      </div>
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookAuthor}>{book.author}</p>
        <Link href={book.amazon_product_url || ''} target="_blank" className={styles.learnMoreButton}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
