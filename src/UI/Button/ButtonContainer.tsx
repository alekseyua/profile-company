import React, { useState } from 'react'
import CustomButton from './CustomButton';

export interface IButton {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  iconLeft?: string;
  iconRight?: string;
  loading?: boolean;
  title: string;
  variant?: string;
  border?: 'border';
  to?: string;
}

const Button:React.FC<IButton> = ({...props}:IButton) => {
  return (
    <CustomButton
      {...props}
    />
  )
}

export default Button;