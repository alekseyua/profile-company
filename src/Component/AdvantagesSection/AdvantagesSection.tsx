import React from 'react';
import styles from './styles/AdvantagesSection.module.scss';

interface IAdvantagesSection{

}
const AdvantagesSection:React.FC<IAdvantagesSection> = ({}:IAdvantagesSection) => {
  return (
    <div
      className={styles['advantages__container']}
    >Container</div>
  )
}

export default AdvantagesSection;