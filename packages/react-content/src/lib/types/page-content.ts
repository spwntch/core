import { ReactNode } from 'react';
import { IAttributableImage } from './image';

/**
 * Represents a bullet point in a page section with an optional icon, emoji, title, and content.
 */
export interface IPageSectionBullet {
  icon?: ReactNode;
  emoji?: string;
  title: string;
  content?: string;
}

/**
 * Represents the content of a page section with a heading, optional subheading, body, and bullets.
 */
export interface IPageSectionContent {
  heading: string;
  subHeading?: string;
  body?: string[];
  bullets?: IPageSectionBullet[];
  tags?: string[];
}


export interface IPageSection {
  image: IAttributableImage;
  content: IPageSectionContent;
}