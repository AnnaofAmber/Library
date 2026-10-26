import scss from "./BookFilter.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { filterBooks } from "../../redux/filterBooksSlice";
import { readFilter } from "../../redux/readFilterSlice";
import { ReadFilter } from "../ReadFilter/ReadFilter";
import { azFilter } from "../../redux/azFilterSlice";

export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const filter = useSelector((state) => state.isRead);
  const az = useSelector((state) => state.az);

  /**
    |============================
    | фільтр по пошуку
    |============================
  */

  const handleFilterChange = (event) => {
    return dispatch(filterBooks(event.target.value));
  };

  /**
    |============================
    | фільтер прочитаного
    |============================
  */

  const handleFilterChangeIsRead = (event) => {
    if (!filter) {
      dispatch(azFilter("all"));
    }
    return dispatch(readFilter(event.target.id));
  };
  /**
  |============================
  | фільтр по алфавіту
  |============================
*/

  const handleFilterAZ = (event) => {
    if (az === "all") {
      return dispatch(azFilter(event.target.id));
    } else {
      event.target.blur();
      return dispatch(azFilter("all"));
    }
  };

  /**
    |============================
    | RETURN
    |============================
  */

  return (
    <div className={scss.container}>
      <div className={scss.filter}>
        <label className={scss.label} htmlFor="search"></label>
        <input
          className={scss.input}
          id="search"
          name="filter"
          value={name}
          type="text"
          onChange={handleFilterChange}
          placeholder="Пошук"
        />
      </div>
      <ReadFilter
        handleFilterAZ={handleFilterAZ}
        handleFilterChangeIsRead={handleFilterChangeIsRead}
        filter={filter}
        az={az}
      />
    </div>
  );
};
