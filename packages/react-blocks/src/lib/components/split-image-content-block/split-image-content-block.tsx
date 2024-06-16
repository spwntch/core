import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
  SplitLayout,
} from '@/react-components';
import { cn } from '@spwntch/ui';
import React from 'react';
import styles from './split-image-content-block.module.css';

interface ISplitImageContentBlockProps {
  image: IImage;
  innerContent?: IContent;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  height?: number;
  className?: string;
  hero?: boolean;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const SplitImageContentBlock: React.FC<ISplitImageContentBlockProps> = ({
  image,
  innerContent,
  split = 'horizontal',
  flip,
  className,
  height = 540,
  hero = false,
  hAlign,
  vAlign,
}) => {
  const imagePane = <ImageContainer image={image} className={className} />;
  const contentPane = innerContent && (
    <ContentContainer
      innerContent={innerContent}
      hAlign={hAlign}
      vAlign={vAlign}
    />
  );
  return (
    <div
      className={cn(styles['container'], { 'h-screen': hero })}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <SplitLayout
        split={split}
        flip={flip}
        className={styles['split-layout']}
        containers={[imagePane, contentPane]}
      />
    </div>
  );
};

export default SplitImageContentBlock;
