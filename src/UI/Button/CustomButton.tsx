import React, { useRef } from 'react'
import styles from './styles/button.module.scss';
import { FormattedMessage } from 'react-intl';
import { IButton } from './ButtonContainer';
import { Link } from 'react-router';

type ButtonProps = React.PropsWithChildren<IButton>

const CustomButton: React.FC<IButton> = React.forwardRef<HTMLButtonElement,ButtonProps>(({ 
    title, 
    className, 
    onClick, 
    disabled, 
    type ='button', 
    size ='medium', 
    color ='primary', 
    iconLeft,
    iconRight,
    loading,
    variant,
    border,
    to,
    }, ref) => {
    console.log({ className }, { variant }, { border })
    if (to) {
        return <div 
            className={`
                ${styles['button__container']}  
                ${className ? className : ''} 
                ${variant ? styles[`${variant}`] : ''}
                ${border ? styles[`${border}`] : ''}
            `}
            >
                <Link to={to} 
                    onClick = { onClick }
                    className={`${styles['button__btn']}`}
                >
                    <FormattedMessage id={title} />
                </Link>
            </div>
    }
  return (
      <div className={styles['button__container']}>
        {
            iconLeft && <img src={iconLeft} />
        }
            <button 
                ref={ref}
                className={styles['button__btn']}
                onClick={onClick}
            >
                <FormattedMessage id={title} />
            </button>
        {
            iconRight && <img src={iconRight} />
        }
      </div>
  )
}
)

export default CustomButton;