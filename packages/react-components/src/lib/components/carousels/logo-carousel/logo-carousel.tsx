import * as React from 'react';
import styles from './logo-carousel.module.css';

export interface LogoCarouselProps {
  title: string;
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ title, logos }) => {
  return (
    <div className={styles['logo-carousel']}>
      <h2 className={styles['logo-carousel-title']}>{title}</h2>
      <div className={styles['carousel-content']}>
        {logos.map((logo, index) => (
          <div key={index} className={styles['carousel-item']}>
            <div className={styles['logo-item-container']}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles['logo-item']}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
