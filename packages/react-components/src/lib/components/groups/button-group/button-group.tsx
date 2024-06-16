import React from 'react';
import styles from './button-group.module.css';

export interface IButtonGroupProps {
  stacked?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup: React.FC<IButtonGroupProps> = ({
  stacked = false,
  children,
  className = '',
}) => {
  return (
    <div
      className={`${styles['button-group']} ${
        stacked ? styles['button-group--stacked'] : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
