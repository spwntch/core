/**
 * Represents a photographer with a name and URL.
 */
export interface IAttributablePhotographer {
    name: string;
    url: string;
  }
  
  /**
   * Represents an image with a source URL, optional URL, and optional photographer information.
   */
  export interface IAttributableImage {
    src: string;
    url?: string;
    photographer?: IAttributablePhotographer;
  }
  