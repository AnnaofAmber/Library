import scss from "./BookList.module.scss";
import { BookItem } from "../BookItem/BookItem";

export const BookList = ({ showModalImage, filteredBooks, filteredComics }) => {
  return (
    <div>
      <ul className={scss.bookList}>
        {filteredBooks.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            name={book.name}
            author={book.author}
            year={book.year}
            publishYear={book.publishYear}
            genre={book.genre}
            publisher={book.publisher}
            cover={book.cover}
            image={book.cover}
            pages={book.pages}
            color={book.color}
            textColor={book.textColor}
            read={book.read}
            series={book.series}
            seriesName={book.seriesName}
            volumes={book.volumes}
            part={book.part}
            rating={book.rating}
            description={book.description}
            language={book.language}
            dateOfReading={book.dateOfReading}
            dateOfBuying={book.dateOfBuying}
            showModalImage={showModalImage}
          />
        ))}
      </ul>
      <ul className={scss.bookList}>
        {filteredComics.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            name={book.name}
            author={book.author}
            year={book.year}
            publishYear={book.publishYear}
            genre={book.genre}
            type={book.type}
            publisher={book.publisher}
            cover={book.cover}
            image={book.cover}
            pages={book.pages}
            color={book.color}
            textColor={book.textColor}
            read={book.read}
            series={book.series}
            seriesName={book.seriesName}
            volumes={book.volumes}
            part={book.part}
            rating={book.rating}
            description={book.description}
            language={book.language}
            dateOfReading={book.dateOfReading}
            dateOfBuying={book.dateOfBuying}
            showModalImage={showModalImage}
          />
        ))}
      </ul>
    </div>
  );
};
