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
}

export const SplitImageContentSection: React.FC<ImageContentHeaderProps> = ({
  image,
  innerContent,
  split = 'horizontal',
  flip,
  className,
  height = 540,
}) => {
  const imagePane = <ImageContainer image={image} className={className} />;
  const contentPane = innerContent && (
    <ContentContainer innerContent={innerContent} />
  );
  return (
    <div className={styles['container']} style={{ height: `${height}px` }}>
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
