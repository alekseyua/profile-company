import React from 'react'
import styles from './styles/home.module.scss';
import { firstImage } from '../../images';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  return (
    <div className={styles['home__container']}>
      <div className={styles['home__section-getting-to-know']}>
        <div className={styles['home__section-getting-to-know-wrap']}>

          <div className={styles['home__section-getting-to-know-text']}>
            <h1 className={styles['home__section-getting-to-know-text-title']}>
              <FormattedMessage id='home.getting-to-know.title-1'/>
              <span><FormattedMessage id='home.getting-to-know.title-2' /></span>
              <p><FormattedMessage id='home.getting-to-know.title-3' /></p>
            </h1>
            <p className={styles['home__section-getting-to-know-text-subtitle']}>Проектирование, разработка, тестирование и поддержка интернет-магазинов, веб-сервисов, приложений, продающих и корпоративных сайтов</p>
          </div>
          <div className={styles['home__section-getting-to-know-image']}>
            <img src={firstImage} alt="random-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home