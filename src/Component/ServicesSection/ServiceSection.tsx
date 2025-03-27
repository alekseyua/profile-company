import React from 'react'
import { IService } from '../../Pages/Home/Sections/ServiceMainSectionContainer';
import styles from './styles/service.module.scss';
import Button from '../../UI/Button/ButtonContainer';
import { FormattedMessage } from 'react-intl';

interface IProps {
    listService: IService[];
}

const ServiceSection:React.FC<IProps> = ({listService}) => {
  return (
    <div className={styles['service__container']}>
      <div className={styles['service__container-wrap']}>
        {listService.map((service: IService, index) => (
          <div key={service.id} className={styles['service__item-container']}>
            <div className={styles['service__item-header']}>
              <h3><FormattedMessage id={service.title}/></h3>
            </div>
            <div className={styles['service__item-description']}>
              <p><FormattedMessage id={service.description}/></p>
            </div>
            <div className={styles['service__item-footer']}>
              <Button
                className={styles['service__item-footer-btn']}
                variant='transparent'
                border='border'
                title='service.button'
                to={service.href}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSection