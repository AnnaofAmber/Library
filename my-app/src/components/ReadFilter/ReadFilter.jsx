import clsx from 'clsx'
import scss from './ReadFilter.module.scss'

export const ReadFilter = ({handleFilterChangeIsRead, filter})=>{


    return(
            <div className={scss.btnContaier}>
      <button className={clsx(scss.btn, filter ==='all' && scss.btnClsx )} id='all' onClick={handleFilterChangeIsRead}>Всі</button>
      <button className={clsx(scss.btn, filter === 'read' && scss.btnClsx )} id='read' onClick={handleFilterChangeIsRead}>Прочитані</button>
      <button className={clsx(scss.btn, filter ==='not' && scss.btnClsx )} id='not' onClick={handleFilterChangeIsRead}>Непрочитані</button>

    </div>
    )
}