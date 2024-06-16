import { H3 } from '@spwntch/typography';
import { cn } from '@spwntch/ui';
import React, { forwardRef, PropsWithChildren } from 'react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';
import SocialIcon, {
  SocialPlatform,
} from '../../../social/social-icon/social-icon';

export interface ISocialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Social = forwardRef<HTMLDivElement, ISocialProps>(
  ({ className, ...props }, ref) => {
    const { social } = useBrand();

    return (
      <div className={cn('p-4', className)} ref={ref} {...props}>
        <H3 className="text-2xl font-semibold">Follow Us</H3>
        <ul className="{styles.list}">
          {social &&
            Object.keys(social).map((platform) => (
              <li key={platform}>
                <SocialIcon
                  platform={platform as SocialPlatform}
                  url={social[platform]}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

Social.displayName = 'Social';

export default Social;
