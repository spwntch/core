import { Avatar, AvatarFallback, AvatarImage, cn } from '@spwntch/ui';
import { Dot } from 'lucide-react';
import styles from './list.module.css';
import { IBullet } from '../../../types';

export interface IBulletsProps {
  bullets: IBullet[];
  className?: string;
  numbered?: boolean;
}

export const List: React.FC<IBulletsProps> = ({
  bullets,
  className,
  numbered,
}) => (
  <ul className={cn(styles['list-container'], className)}>
    {bullets.map((list, index) => (
      <li key={index} className={cn(styles['list-item'], list.className)}>
        {list.icon && <div className={styles['list-icon']}>{list.icon}</div>}
        {list.image && (
          <div className={styles['list-icon']}>
            <Avatar className={styles['avatar']}>
              <AvatarImage src={list.image.src} alt={list.image.alt} />
              <AvatarFallback>{list.image.fallback}</AvatarFallback>
            </Avatar>
          </div>
        )}
        {list.emoji && (
          <div
            className={cn(styles['list-icon'], {
              [styles['large-emoji']]: list.title,
            })}
          >
            <span>{list.emoji}</span>
          </div>
        )}
        {!list.icon && !list.image && !list.emoji && numbered && (
          <div className={styles['list-icon']}>
            <span>{index + 1}.</span>
          </div>
        )}
        {!list.icon && !list.image && !list.emoji && !numbered && <Dot />}
        <div className={styles['list-text']}>
          {list.title && (
            <div className={styles['list-title']}>{list.title}</div>
          )}
          <div>{list.body}</div>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
