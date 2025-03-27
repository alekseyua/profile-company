import React from 'react'
import styles from './styles/PreviewSection.module.scss';
import { firstImage } from '../../images';
import { FormattedMessage } from 'react-intl';

const PreviewSection = () => {
  return (
    <div className={styles['preview-section__container']}>
      <div className={styles['preview-section__section-getting-to-know']}>
        <div className={styles['preview-section__section-getting-to-know-wrap']}>

          <div className={styles['preview-section__section-getting-to-know-text']}>
            <h1 className={styles['preview-section__section-getting-to-know-text-title']}>
              <FormattedMessage id='home.getting-to-know.title-1'/>
              <span><FormattedMessage id='home.getting-to-know.title-2' /></span>
              <p><FormattedMessage id='home.getting-to-know.title-3' /></p>
            </h1>
            <p className={styles['preview-section__section-getting-to-know-text-subtitle']}>
              <FormattedMessage id='home.getting-to-know.text'/>
            </p>
            <div className={styles['preview-section__section-getting-to-know-controller']}>
              <button className={styles['preview-section__section-getting-to-know-controller-buttons']}>
                <FormattedMessage id='home.getting-to-know.calculate-cost'/>
              </button>
            </div>
          </div>
          <div className={styles['preview-section__section-getting-to-know-image']}>
            <img src={firstImage} alt="random-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewSection;