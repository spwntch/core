import React from 'react';
import { Badge, cn } from '@/react-ui';
import styles from './tags.module.css';

interface ITagsProps {
  tags: string[];
  className?: string;
}

export const Tags: React.FC<ITagsProps> = ({ tags, className }) => (
  <div className={cn(styles['tags-container'], className)}>
    {tags.map((tag, index) => (
      <Badge key={index}>{tag}</Badge>
    ))}
  </div>
);

export default Tags;
