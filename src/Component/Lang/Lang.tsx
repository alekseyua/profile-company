import React from 'react'
import styles from './styles/lang.module.scss';
import { IListLang } from './LangContainer';

interface ILang {
  listLang: IListLang[];
  isShowDropDownLang: boolean;
  handleMenuLang: (s: boolean) => void;
  handleSwitchLang: (id: number, code: string) => void;
}
const Lang: React.FC<ILang> = ({
  listLang,
  handleMenuLang,
  handleSwitchLang,
  isShowDropDownLang,
}: ILang) => {
  return (
    <div className={styles['lang__list-container']}>
      <ul
        className={isShowDropDownLang ? styles['lang__list-container-wrap--open'] : styles['lang__list-container-wrap']}
        onClick={() => handleMenuLang(!isShowDropDownLang)}
      >
        {
          listLang.map((l: IListLang) => {
            return (
              <li
                key={l.id}
                className={l.active ? styles['lang__list-item--active'] : styles['lang__list-item']}
                onClick={() => handleSwitchLang(l.id, l.code)}
              >{l.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Lang;