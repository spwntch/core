import React from 'react';
import { cn } from '@/react-ui';
import styles from './bullets.module.css';
import { IBullet } from '../../../types';

interface IBulletsProps {
  bullets: IBullet[];
  className?: string;
}

export const Bullets: React.FC<IBulletsProps> = ({ bullets, className }) => (
  <div className={cn(styles['bullets-container'], className)}>
    {bullets.map((bullet, index) => (
      <div key={index} className={cn(styles['bullet-item'], bullet.className)}>
        {bullet.icon && <div className={styles['bullet-icon']}>{bullet.icon}</div>}
        <div className={styles['bullet-text']}>{bullet.text}</div>
      </div>
    ))}
  </div>
);

export default Bullets;
