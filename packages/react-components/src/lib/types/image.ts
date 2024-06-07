import { ReactNode } from 'react';

export interface IImageAttribution {
  url: string;
  photographer?: {
    name: string;
    url: string;
  };
}

export type ImageCoverage =
  | 'full'
  | 'split-left'
  | 'split-right'
  | 'split-top'
  | 'split-bottom';

export interface IImage {
  src: string;
  fallback?: string;
  alt?: string;
  backgroundPattern?: ReactNode;
  darken?: boolean;
  attribution?: IImageAttribution;
  coverage?: ImageCoverage;
}
