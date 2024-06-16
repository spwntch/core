import { H2, H3 } from '@spwntch/typography';
import { cn } from '@spwntch/ui';
import React from 'react';
import { Tags } from '../../content/tags/tags';
import styles from './header.module.css';

interface IHeaderProps {
  titleContent?: string;
  titleClassName?: string;
  subTitleContent?: string;
  subTitleClassName?: string;
  tagsContent?: string[];
  tagsClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const Header: React.FC<IHeaderProps> = ({
  titleContent,
  titleClassName,
  subTitleContent,
  subTitleClassName,
  tagsContent,
  tagsClassName,
  alignment = 'center',
}) => (
  <div className={cn(styles.container, styles[alignment])}>
    {titleContent && (
      <H2 className={cn(styles.title, titleClassName)}>{titleContent}</H2>
    )}
    {subTitleContent && (
      <H3 className={cn(styles['sub-title'], subTitleClassName)}>
        {subTitleContent}
      </H3>
    )}
    {tagsContent && (
      <Tags
        tags={tagsContent}
        className={cn(styles.tags, styles[`tags-${alignment}`], tagsClassName)}
      />
    )}
  </div>
);

export default Header;
