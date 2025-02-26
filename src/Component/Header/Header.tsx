import React from 'react'
import styles from './styles/header.module.scss';
import { Link } from 'react-router';
import LangContainer from '../Lang/LangContainer';



interface IHeader {

}

const Header: React.FC<IHeader> = ({ }: IHeader) => {
  return (
    <div className={styles['header__container']}>
    <div className={styles['header__container-wrap']}>
        <div className={styles['header__container-logo']}>
          <span>C</span>has
        </div>
        <div className={styles['header__container-nav']}>
          <div className={styles['header__container-menu-wrap']}>
            <ul className={styles['header__menu-container']}>
              <li className={styles['header__menu-item']}>Home</li>
              <li className={styles['header__menu-item']}>About</li>
              <li className={styles['header__menu-item']}>Contact</li>
            </ul>
          </div>
          <div className={styles['header__container-contact-wrap']}>
            <ul className={styles['header__menu-container']}>
              <li className={styles['header__menu-item']}>
                <Link to={'mailto:progernode@gmail.com'}>progernode@gmail.com</Link>
              </li>
              <li className={styles['header__menu-item']}>Contact me</li>
              <li className={styles['header__menu-item']}>
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