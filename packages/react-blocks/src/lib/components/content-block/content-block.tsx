import { ContentContainer, IContent } from '@/react-components';
import { cn } from '@spwntch/ui';
import React from 'react';

interface IContentBlockProps {
  innerContent: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ContentBlock: React.FC<IContentBlockProps> = ({
  innerContent,
  hAlign,
  vAlign,
  className,
  height = 540,
  hero = false,
}) => {
  return (
    <div
      className={cn('w-full', hero && 'h-screen', className)}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ContentContainer
        innerContent={innerContent}
        hAlign={hAlign}
        vAlign={vAlign}
      />
    </div>
  );
};

export default ContentBlock;
