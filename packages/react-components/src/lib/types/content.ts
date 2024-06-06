import { ReactNode } from 'react';

export interface IBullet {
  icon?: ReactNode;
  text: string;
}

export interface IContent {
  announcement?: { message: string; cta: ReactNode }; // Time-related information
  heading?: string; // H2 tag
  subHeading?: string; // H3 tag
  body?: string[]; // Array of P tags
  bullets?: IBullet[];
  tags?: string[];
}
