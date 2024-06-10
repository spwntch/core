import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
  SplitLayout,
} from '@/react-components';
import { cn } from '@/react-ui';
import React from 'react';
import styles from './split-image-content-section.module.css';

interface ImageContentHeaderProps {
  image: IImage;
  innerContent?: IContent;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  height?: number;
  className?: string;
  hero?: boolean;
}

export const SplitImageContentSection: React.FC<ImageContentHeaderProps> = ({
  image,
  innerContent,
  split = 'horizontal',
  flip,
  className,
  height = 540,
  hero = false,
}) => {
  const imagePane = <ImageContainer image={image} className={className} />;
  const contentPane = innerContent && (
    <ContentContainer innerContent={innerContent} />
  );
  return (
    <div className={cn(styles['container'], { 'h-screen': hero })} style={!hero ? { height: `${height}px` } : undefined}>
      <SplitLayout
        split={split}
        flip={flip}
        className={styles['split-layout']}
        containers={[imagePane, contentPane]}
      />
    </div>
  );
};

export default SplitImageContentSection;
