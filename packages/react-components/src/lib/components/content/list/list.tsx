import { Avatar, AvatarFallback, AvatarImage, cn } from '@spwntch/ui';
import { Dot } from 'lucide-react';
import React from 'react';
import { IBullet } from '../../../types';

export interface IBulletsProps {
  bullets: IBullet[];
  className?: string;
  numbered?: boolean;
}

export const List: React.FC<IBulletsProps> = ({
  bullets,
  className,
  numbered,
}) => (
  <ul className={cn('flex flex-col gap-2 text-left', className)}>
    {bullets.map((list, index) => (
      <li key={index} className={cn('flex gap-3 items-center', list.className)}>
        {list.icon && <div className="flex-shrink-0">{list.icon}</div>}
        {list.image && (
          <div className="flex-shrink-0">
            <Avatar className="h-6 w-6 text-xs">
              <AvatarImage src={list.image.src} alt={list.image.alt} />
              <AvatarFallback>{list.image.fallback}</AvatarFallback>
            </Avatar>
          </div>
        )}
        {list.emoji && (
          <div
            className={cn('flex-shrink-0', {
              'text-3xl': list.title,
            })}
          >
            <span>{list.emoji}</span>
          </div>
        )}
        {!list.icon && !list.image && !list.emoji && numbered && (
          <div className="flex-shrink-0">
            <span>{index + 1}.</span>
          </div>
        )}
        {!list.icon && !list.image && !list.emoji && !numbered && <Dot />}
        <div className="flex-grow">
          {list.title && <div className="font-bold">{list.title}</div>}
          <div>{list.body}</div>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
