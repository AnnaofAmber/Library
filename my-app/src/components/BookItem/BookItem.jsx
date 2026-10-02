import scss from "./BookItem.module.scss";

// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({
  name,
  author,
  year,
  genre,
  type,
  cover,
  image,
  showModalImage,
  color,
  textColor,
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
}) => {
  //   const dispatch = useDispatch();
  //   const onDelete = () => dispatch(deleteBook(id));

  /**
  |============================
  | Spine
  |============================
*/
  let width;
  let height;

  if (type === "комікс") {
    width = 50;
    height = 320;

    // if (height < 200) {
    //   height = 200 + width;
    // }
    // if (height > 300) {
    //   height = 300;
    // }
  } else {
    width = Number(pages) / 9;
    height = Number(pages) / 3;

    if (height < 200) {
      height = 200 + width;
    }
    if (height > 300) {
      height = 300;
    }
  }

  /**
  |============================
  | RETURN
  |============================
*/

  return (
    <li
      className={scss.bookItem}
      onClick={() =>
        showModalImage(
          image,
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
        )
      }
    >
      <div
        className={scss.bookSpine}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
          color: `${textColor}`,
        }}
      >
        <h2 className={scss.name}>{name}</h2>
        <p className={scss.author}>{author}</p>
      </div>
      <div className={scss.shelf}></div>
    </li>
  );
};
// style={{fontSize:`${fontSize}px`}}
// style={{fontSize:`${fontSizeTitle}px`}}
