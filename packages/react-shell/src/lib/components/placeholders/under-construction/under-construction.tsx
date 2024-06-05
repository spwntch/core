'use client';
import { H2 } from '@/react-typography';
import { PropsWithChildren, forwardRef } from 'react';
import styles from './under-construction.module.css';

export const UnderConstruction = forwardRef<
  HTMLDivElement,
  PropsWithChildren
>(({ children, ...props }, ref) => {
  return (
    <div className={styles.container} ref={ref} {...props}>
      <H2>Under Construction</H2>
      <div className={styles.content}>{children}</div>
    </div>
  );
});

UnderConstruction.displayName = 'UnderConstruction';
