import React from 'react';
import { Badge } from '@spwntch/ui';

interface ITagsProps {
  tags: string[];
  className?: string;
}

export const Tags: React.FC<ITagsProps> = ({ tags, className }) => {
  return (
    <div className={`flex gap-2 overflow-hidden relative max-w-full ${className}`}>
      {tags.map((tag, index) => (
        <div key={index}>
          <Badge
            className={`bg-purple-500 text-white rounded-full px-3 py-1 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] inline-block flex-shrink-0`}
          >
            {tag}
          </Badge>
        </div>
      ))}
      <div
        className="absolute right-0 top-0 bottom-0 w-[50px] bg-gradient-to-l from-white to-transparent"
      />
    </div>
  );
};
