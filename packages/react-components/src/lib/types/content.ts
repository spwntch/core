import { ReactNode } from 'react';

export interface IBullet {
  icon?: ReactNode;
  text: string;
  className?: string;
}

export type TextWithClassName = { content: string; className: string };
export type ParapgraphsWithClassName = { content: string[]; className: string };

export interface IContent {
  announcement?: { message: string; className?: string; href: string }; // Time-related information
  title?: string | TextWithClassName; // H2 tag
  subTitle?: string | TextWithClassName; // H3 tag
  body?: string[] | ParapgraphsWithClassName; // Array of P tags
  bullets?: IBullet[];
  tags?: string[] | ParapgraphsWithClassName;
}
