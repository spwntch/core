export interface CreateLibraryGeneratorSchema {
  name: string;
  directory: string;
  publishable?: boolean;
  addStories?: boolean;
}
