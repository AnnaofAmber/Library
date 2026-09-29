import scss from "./BookInfo.module.scss";

export const BookInfo = ({
  image,
  author,
  nameModal,
  year,
  genre,
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
  return (
    <div>
      <section className={scss.container}>
        <img
          className={scss.img}
          // src={require(`../../covers/${image}`)}
          src={image}
          alt="adss"
          loading="lazy"
        />
        <div className={scss.infoContainer}>
          <h2 className={scss.name}> {nameModal} </h2>
          <p className={scss.author}>{author}</p>
          <p className={scss.info}>Видавництво: <span className={scss.infoSpan}> {publisher}</span>  </p>
          <p className={scss.info}>Рік видання: <span className={scss.infoSpan}> {year}</span>  </p>
          <p className={scss.info}>Мова: <span className={scss.infoSpan}>{language}</span>  </p>
          <p className={scss.info}>К-сть сторінок: <span className={scss.infoSpan}>{pages} </span>  </p>
          <p className={scss.info}>Жанр: <span className={scss.infoSpan}> {genre}</span> </p>

          {seriesName !== 'none' &&(<div className={scss.seriesContainer}><p className={scss.info}>Серія: <span className={scss.infoSpan}>{seriesName}</span>  </p>
          <p className={scss.info}>Частина: <span className={scss.infoSpan}> {part} </span> </p></div>)}
          
{ read &&( <div className={scss.readContainer}> <p className={scss.info}>Прочитана: <span className={scss.infoSpan}> {read}</span>  </p>
          <p className={scss.info}>Дата прочитання: <span className={scss.infoSpan}> {dateOfReading} </span> </p>
          <p className={scss.info}>Оцінка: <span className={scss.infoSpan}> {rating}</span>  </p></div> )}

          <p className={scss.info}>Опис:  <span className={scss.infoSpan}>{description}</span>  </p>
{dateOfBuying !== 'none' &&(          <p className={scss.info}>Дата купівлі: <span className={scss.infoSpan}> {dateOfBuying} </span> </p>)}
        </div>
      </section>
    </div>
  );
};
