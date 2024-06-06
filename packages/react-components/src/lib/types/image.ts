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
  alt?: string;
  backgroundPattern?: boolean;
  darken?: boolean;
  attribution?: IImageAttribution;
  coverage?: ImageCoverage;
}
