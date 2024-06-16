import { cn } from '@spwntch/ui';
import styles from './content-children.module.css';

interface ContentChildrenProps {
  alignmentClass: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentChildren: React.FC<ContentChildrenProps> = ({
  alignmentClass,
  children,
  className,
}) => (
  <div
    className={cn(
      styles.childrenContainer,
      styles[`childrenContainer--${alignmentClass}`],
      className
    )}
  >
    {children}
  </div>
);

export default ContentChildren;
