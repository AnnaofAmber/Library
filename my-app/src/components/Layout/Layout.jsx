import scss from "./Layout.module.scss";

import { BookList } from "../BookList/BookList";
import { BookFilter } from "../BookFilter/BookFilter";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Layout = () => {
  const books = useSelector((state) => state.books);
  const comics = useSelector((state) => state.comics);
  const filter = useSelector((state) => state.filter);
  const isRead = useSelector((state) => state.isRead);

  /**
  |============================
  | все для Modal
  |============================
*/

  const [isModal, setIsModal] = useState(false);
  const [name, setModalName] = useState({});
  const [author, setModalAuthor] = useState({});
  const [year, setModalYear] = useState({});
  const [publishYear, setPublishYear] = useState({});
  const [genre, setModalGenre] = useState({});
  const [publisher, setPublisher] = useState({});
  const [image, setModalImage] = useState({});
  const [pages, setPages] = useState({});
  const [read, setRead] = useState({});
  const [series, setSeries] = useState({});
  const [seriesName, setSeriesName] = useState({});
  const [volumes, setVolumes] = useState({});
  const [part, setPart] = useState({});
  const [rating, setRating] = useState({});
  const [description, setDescription] = useState({});
  const [language, setLanguage] = useState({});
  const [dateOfReading, setDateOfReading] = useState({});
  const [dateOfBuying, setDateOfBuying] = useState({});

  const showModalImage = (
    imageModal,
    name,
    author,
    genre,
    year,
    publishYear,
    publisher,
    pages,
    read,
    series,
    seriesName,
    volumes,
    part,
    rating,
    description,
    language,
    dateOfReading,
    dateOfBuying,
  ) => {
    setIsModal(true);
    setModalName(name);
    setModalAuthor(author);
    setModalYear(year);
    setPublishYear(publishYear);
    setModalGenre(genre);
    setPublisher(publisher);
    setModalImage(imageModal);
    setPages(pages);
    setRead(read);
    setSeries(series);
    setSeriesName(seriesName);
    setVolumes(volumes);
    setPart(part);
    setRating(rating);
    setDescription(description);
    setLanguage(language);
    setDateOfReading(dateOfReading);
    setDateOfBuying(dateOfBuying);

    console.log(dateOfReading);
  };

  const closeModal = () => {
    setModalImage({});
    setIsModal(false);
  };

  /**
    |============================
    | для фільтра прочитаного | BOOKS
    |============================
  */

  const onFilteredBooks = (books, filter, isRead) => {
    if (filter) {
      return books.filter(
        (book) =>
          book.name.toLowerCase().includes(filter.toLowerCase()) ||
          book.author.toLowerCase().includes(filter.toLowerCase()) ||
          book.genre.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    if (isRead === "read") {
      return books.filter((book) => book.read === true);
    } else if (isRead === "not") {
      return books.filter((book) => book.read === false);
    } else {
      return books;
    }
  };

  const filteredBooks = onFilteredBooks(books, filter, isRead);

  /**
    |============================
    | COMICS
    |============================
  */

  const onFilteredComics = (comics, filter, isRead) => {
    if (filter) {
      return comics.filter(
        (comic) =>
          comic.name.toLowerCase().includes(filter.toLowerCase()) ||
          comic.author.toLowerCase().includes(filter.toLowerCase()) ||
          comic.genre.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    if (isRead === "read") {
      return comics.filter((comic) => comic.read === true);
    } else if (isRead === "not") {
      return comics.filter((book) => book.read === false);
    } else {
      return comics;
    }
  };

  const filteredComics = onFilteredComics(comics, filter, isRead);

  /**
    |============================
    | counter
    |============================
  */

  let i = 0;
  const counter = (filteredBooks) => {
    filteredBooks.map((book) => {
      return (i = i + 1);
    });
  };
  counter(filteredBooks);

  /**
    |============================
    | RETURN
    |============================
  */
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <header className={scss.header}>
          <h1 className={scss.headerTitle}>MyLibrary</h1>
          <BookFilter />
        </header>
        <main className={scss.main}>
          <div className={scss.counter}>{i}</div>
          <BookList
            filteredBooks={filteredBooks}
            filteredComics={filteredComics}
            // showAll={all}
            showModalImage={showModalImage}
          />
        </main>
        <footer className={scss.footer}>
          <h3>2026</h3>
        </footer>
      </div>
      {isModal && (
        <Modal
          nameModal={name}
          author={author}
          year={year}
          publisher={publisher}
          publishYear={publishYear}
          genre={genre}
          image={image}
          pages={pages}
          read={read}
          series={series}
          seriesName={seriesName}
          volumes={volumes}
          part={part}
          rating={rating}
          description={description}
          language={language}
          dateOfReading={dateOfReading}
          dateOfBuying={dateOfBuying}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
