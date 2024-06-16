import { Badge } from '@spwntch/ui';
import styles from './tags.module.css';

interface ITagsProps {
  tags: string[];
  className?: string;
}

export const Tags: React.FC<ITagsProps> = ({ tags, className }) => {
  return (
    <div className={`${styles['tags-container']} ${className}`}>
      {tags.map((tag, index) => (
        <div key={index}>
          <Badge className={styles.tag}>{tag}</Badge>
        </div>
      ))}
      <div className={styles['tags-fade']} />
    </div>
  );
};
