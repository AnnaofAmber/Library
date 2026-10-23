import clsx from "clsx";
import scss from "./ReadFilter.module.scss";

export const ReadFilter = ({
  handleFilterChangeIsRead,
  handleFilterAZ,
  filter,
}) => {
  return (
    <div className={scss.btnContaier}>
      <button
        className={clsx(scss.btn, filter === "all" && scss.btnClsx)}
        id="all"
        onClick={handleFilterChangeIsRead}
      >
        Всі
      </button>
      <button
        className={clsx(scss.btn, filter === "read" && scss.btnClsx)}
        id="read"
        onClick={handleFilterChangeIsRead}
      >
        Прочитані
      </button>
      <button
        className={clsx(scss.btn, filter === "not" && scss.btnClsx)}
        id="not"
        onClick={handleFilterChangeIsRead}
      >
        Непрочитані
      </button>
      <button
        // className={clsx(scss.btn, filter === "not" && scss.btnClsx)}
        id="AZ"
        onClick={handleFilterAZ}
      >
        A-Я
      </button>
    </div>
  );
};
