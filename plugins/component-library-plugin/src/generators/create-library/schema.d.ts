export interface CreateLibraryGeneratorSchema {
  directory: 'libs' | 'packages' | string;
  name: string;
  publishable?: boolean;
  addStories?: boolean;
}
