import React from 'react'
import styles from './styles/header.module.scss';
import { Link } from 'react-router';
import LangContainer from '../Lang/LangContainer';
import { IStateMenu } from './HeaderContainer';



interface IHeader {
  listMenu: IStateMenu[];
  handleClickMenu: (id: number) => void;
}

const Header: React.FC<IHeader> = ({ listMenu, handleClickMenu }: IHeader) => {
  return (
    <div className={styles['header__container']}>
    <div className={styles['header__container-wrap']}>
        <div className={styles['header__container-logo']}>
          <span>C</span>has
        </div>
        <div className={styles['header__container-nav']}>
          <div className={styles['header__container-menu-wrap']}>
            <ul className={styles['header__menu-container']}>
              {
                listMenu.map((m: IStateMenu, index: number) => {
                  return (
                    <li
                      key={index}
                      className={styles['header__menu-item'] }
                      data-state={m.active? 'active' : ''}
                      >
                      <Link 
                        className={styles['header__menu-item--menu'] }
                        to={`/${m.href.toLowerCase()}`}
                        onClick={()=>handleClickMenu(m.id)}
                      >{m.title}</Link>
                    </li>
                  )
                })
              }
              {/* <li className={styles['header__menu-item']} data-state="active">Home</li>
              <li className={styles['header__menu-item']}>About</li>
              <li className={styles['header__menu-item']}>Contact</li> */}
            </ul>
          </div>
          <div className={styles['header__container-contact-wrap']}>
            <ul className={styles['header__menu-container']}>
              <li className={styles['header__menu-item']}>
                <Link className={styles['header__menu-item--mail']} to={'mailto:chas.it.dev@gmail.com'}>chas.it.dev@gmail.com</Link>                
              </li>
              <li className={styles['header__menu-item']}>
                <Link className={styles['header__menu-item--phone']} to={'phone:+380956165129'}>+380(95)616-51-29</Link>
              </li>
              <li className={styles['header__menu-item-lang']}>
                <LangContainer />
                
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header