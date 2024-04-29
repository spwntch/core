import { JSXElementConstructor, ReactElement } from 'react';

export interface ITocItem {
  label: string;
  href: string;
  children?: ITocItem[];
}

export interface IMdxDoc {
  meta: IMdxDocMeta;
  toc: ITocItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface IMdxDocFrontMatter {
  date: string;
  title: string;
  subtitle?: string;
  authorName?: string;
  authorAvatar?: string;
  tags?: string[];
  published?: boolean;
}

export interface IMdxDocMeta extends IMdxDocFrontMatter {
  slug: string;
}
