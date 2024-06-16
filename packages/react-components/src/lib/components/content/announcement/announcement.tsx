import { cn } from '@spwntch/ui';
import styles from './announcement.module.css';

interface IAnnouncementProps {
  message: string;
  href: string;
  className?: string;
}

export const Announcement: React.FC<IAnnouncementProps> = ({
  message,
  href,
  className,
}) => (
  <div className={cn(styles['announcement-container'], className)}>
    <div className={styles['announcement-message']}>{message}</div>
    <div className={styles['announcement-link']}>
      <a href={href} className={styles['announcement-link']}>
        <span className={styles['absolute-inset']} aria-hidden="true" />
        Read more <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
);

export default Announcement;
