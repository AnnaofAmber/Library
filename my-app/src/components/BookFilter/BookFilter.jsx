import scss from './BookFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../redux/filterBooksSlice';
import { readFilter } from '../../redux/readFilterSlice';
import clsx from 'clsx';
import { ReadFilter } from '../ReadFilter/ReadFilter';


export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const filter = useSelector(state => state.isRead)


  
  const handleFilterChange = event => {
    console.log(event);
    
    return dispatch(filterBooks(event.target.value));
  };


  const handleFilterChangeIsRead = event => {

 return dispatch(readFilter(event.target.id))
    
  }

console.log(filter);



  
  return (
<div className={scss.container}>
      <div className={scss.filter}>
      <label className={scss.label} htmlFor="search">
      </label>
      <input
        className={scss.input}
        id="search"
        name="filter"
        value={name}
        type="text"
        onChange={handleFilterChange}
        placeholder='Пошук'
      />
    </div>
    <ReadFilter handleFilterChangeIsRead={handleFilterChangeIsRead} filter={filter}/>
    {/* <div className={scss.btnContaier}>
      <button className={clsx(scss.btn, filter ==='all' && scss.btnClsx )} id='all' onClick={handleFilterChangeIsRead}>Всі</button>
      <button className={clsx(scss.btn, filter === 'read' && scss.btnClsx )} id='read' onClick={handleFilterChangeIsRead}>Прочитані</button>
      <button className={clsx(scss.btn, filter ==='not' && scss.btnClsx )} id='not' onClick={handleFilterChangeIsRead}>Непрочитані</button>

    </div> */}
</div>
  );
};