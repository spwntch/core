import { PropsWithChildren } from 'react';

export const PostContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-none py-8 relative isolate prose text-foreground prose-headings:text-foreground">
      {children || 'No content provided.'}
    </div>
  );
};
