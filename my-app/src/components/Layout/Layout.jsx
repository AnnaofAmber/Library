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
  const az = useSelector((state) => state.az);

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
    | ФІЛЬТРИ | BOOKS
    |============================
  */

  const onFilteredBooks = (books, filter, isRead) => {
    let sortedBooks = [];
    books.map((book) => sortedBooks.push(book));

    if (isRead === "read") {
      if (az === "AZ") {
        if (filter) {
          return books
            .filter((book) => book.read === true)
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return books
            .filter((book) => book.read === true)
            .sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return books.filter((book) => book.read === true);
      }
      if (filter) {
        return books
          .filter((book) => book.read === true)
          .filter(
            (book) =>
              book.name.toLowerCase().includes(filter.toLowerCase()) ||
              book.author.toLowerCase().includes(filter.toLowerCase()) ||
              book.genre.toLowerCase().includes(filter.toLowerCase()),
          );
      }
    } else if (isRead === "not") {
      if (az === "AZ") {
        if (filter) {
          return books
            .filter((book) => book.read === false)
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return books
            .filter((book) => book.read === false)
            .sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return books.filter((book) => book.read === false);
      }
      if (filter) {
        return books
          .filter((book) => book.read === false)
          .filter(
            (book) =>
              book.name.toLowerCase().includes(filter.toLowerCase()) ||
              book.author.toLowerCase().includes(filter.toLowerCase()) ||
              book.genre.toLowerCase().includes(filter.toLowerCase()),
          );
      }
    } else if (isRead === "all") {
      if (az === "AZ") {
        if (filter) {
          return books
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return books;
      }
      if (filter) {
        return books.filter(
          (book) =>
            book.name.toLowerCase().includes(filter.toLowerCase()) ||
            book.author.toLowerCase().includes(filter.toLowerCase()) ||
            book.genre.toLowerCase().includes(filter.toLowerCase()),
        );
      }
    }
  };

  const filteredBooks = onFilteredBooks(books, filter, isRead);

  /**
    |============================
    | ФІЛЬТРИ | COMICS
    |============================
  */

  const onFilteredComics = (comics, filter, isRead) => {
    let sortedComics = [];
    comics.map((book) => sortedComics.push(book));

    if (isRead === "read") {
      if (az === "AZ") {
        if (filter) {
          return comics
            .filter((book) => book.read === true)
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return comics
            .filter((book) => book.read === true)
            .sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return comics.filter((book) => book.read === true);
      }
      if (filter) {
        return comics
          .filter((book) => book.read === true)
          .filter(
            (book) =>
              book.name.toLowerCase().includes(filter.toLowerCase()) ||
              book.author.toLowerCase().includes(filter.toLowerCase()) ||
              book.genre.toLowerCase().includes(filter.toLowerCase()),
          );
      }
    } else if (isRead === "not") {
      if (az === "AZ") {
        if (filter) {
          return comics
            .filter((book) => book.read === false)
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return comics
            .filter((book) => book.read === false)
            .sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return comics.filter((book) => book.read === false);
      }
      if (filter) {
        return comics
          .filter((book) => book.read === false)
          .filter(
            (book) =>
              book.name.toLowerCase().includes(filter.toLowerCase()) ||
              book.author.toLowerCase().includes(filter.toLowerCase()) ||
              book.genre.toLowerCase().includes(filter.toLowerCase()),
          );
      }
    } else if (isRead === "all") {
      if (az === "AZ") {
        if (filter) {
          return comics
            .filter(
              (book) =>
                book.name.toLowerCase().includes(filter.toLowerCase()) ||
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return sortedComics.sort((a, b) => a.name.localeCompare(b.name));
        }
      } else if (az === "all" && !filter) {
        return comics;
      }

      if (filter) {
        return comics.filter(
          (book) =>
            book.name.toLowerCase().includes(filter.toLowerCase()) ||
            book.author.toLowerCase().includes(filter.toLowerCase()) ||
            book.genre.toLowerCase().includes(filter.toLowerCase()),
        );
      }
    }
  };

  const filteredComics = onFilteredComics(comics, filter, isRead);

  /**
    |============================
    | counter
    |============================
  */

  let i = 0;
  const counter = () => {
    filteredBooks.map(() => (i = i + 1));
    filteredComics.map(() => (i = i + 1));
  };
  counter();

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
