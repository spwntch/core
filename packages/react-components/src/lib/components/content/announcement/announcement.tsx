import React from 'react';
import { cn } from '@spwntch/ui';

interface IAnnouncementProps {
  message: string;
  href: string;
  className?: string;
}

export const Announcement: React.FC<IAnnouncementProps> = ({
  message,
  href,
  className,
}) => (
  <div
    className={cn(
      'relative rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-ring/20 hover:ring-ring/30 mb-4 w-fit max-w-5xl flex items-center',
      className
    )}
  >
    <div className="w-fit">{message}</div>
    <div className="ml-3 font-semibold text-primary w-fit text-nowrap">
      <a
        href={href}
        className="ml-3 font-semibold text-primary w-fit text-nowrap"
      >
        <span className="absolute inset-0" aria-hidden="true" />
        Read more <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
);

export default Announcement;
