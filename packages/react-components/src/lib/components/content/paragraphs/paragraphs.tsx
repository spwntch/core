import React from 'react';
import { cn } from '@spwntch/ui';
import { P } from '@spwntch/typography';
import styles from './paragraphs.module.css';

export type ParagraphAlignment = 'left' | 'center' | 'right' | 'justified';

interface IParagraphsProps {
  content: string[];
  className?: string;
  alignment?: ParagraphAlignment;
}

export const Paragraphs: React.FC<IParagraphsProps> = ({
  content = [],
  className,
  alignment = 'left',
}) => (
  <div
    className={cn(styles['paragraph-container'], styles[alignment], className)}
  >
    {content.map((paragraph, index) => (
      <P key={index}>{paragraph}</P>
    ))}
  </div>
);

export default Paragraphs;
