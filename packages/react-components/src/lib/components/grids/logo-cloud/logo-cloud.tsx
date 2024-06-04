import React from 'react';
import { H3 } from '@/react-typography';
import styles from './logo-cloud.module.css';
import { cn } from '@/react-ui';

export interface ILogoCloudProps {
  title?: string;
  logos: { src: string; alt?: string }[];
  className?: string;
}

export const LogoCloud: React.FC<ILogoCloudProps> = ({
  title,
  logos,
  className,
}) => {
  if (!logos?.length) return null;
  return (
    <div className={cn(styles['logo-cloud'], className)}>
      {title && <H3 className={styles['logo-cloud-title']}>{title}</H3>}
      <div className={styles['logo-cloud-grid']}>
        {logos.map((logo) => (
          <img
            key={logo.src}
            className={styles['logo']}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
