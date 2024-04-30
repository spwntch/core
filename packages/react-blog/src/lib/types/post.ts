
export interface IPostAuthor {
    name: string;
    avatarUrl: string;
  }
  
  export interface IPostMeta {
    slug: string;
    categories: string[];
    keywords: string[];
    author: IPostAuthor;
  }
  
  export interface IPost {
    meta: IPostMeta;
    title: string;
    subtitle: string;
    abstract: string[];
    coverImage: any;
  }
  