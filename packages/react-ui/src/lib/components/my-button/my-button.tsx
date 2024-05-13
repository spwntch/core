import React, { PropsWithChildren } from 'react';
import styles from './button.module.css';

export interface ButtonProps extends PropsWithChildren {
  allCaps?: boolean;
}

export const MyButton = ({ children }: ButtonProps) => {
  return <div className={styles.button}>{children}</div>;
};
