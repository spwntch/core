import React from 'react';
import { cn } from '@/react-ui';
import { H2, H3 } from '@/react-typography';
import { Tags } from '../../content/tags/tags';
import styles from './header.module.css';

interface IHeaderProps {
  titleContent?: string;
  titleClassName?: string;
  subTitleContent?: string;
  subTitleClassName?: string;
  tagsContent?: string[];
  tagsClassName?: string;
}

export const Header: React.FC<IHeaderProps> = ({
  titleContent,
  titleClassName,
  subTitleContent,
  subTitleClassName,
  tagsContent,
  tagsClassName,
}) => (
  <div>
    {titleContent && (
      <H2 className={cn(styles.heading, titleClassName)}>{titleContent}</H2>
    )}
    {subTitleContent && (
      <H3 className={cn(styles.subHeading, subTitleClassName)}>
        {subTitleContent}
      </H3>
    )}
    {tagsContent && (
      <Tags tags={tagsContent} className={cn(styles.tags, tagsClassName)} />
    )}
  </div>
);

export default Header;
