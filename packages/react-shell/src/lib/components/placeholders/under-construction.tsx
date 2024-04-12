'use client';
import { H1, H2 } from '@/react-components';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const UnderConstruction = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <div className="m-4 p-4 h-full flex flex-col items-center border-4 border-dashed border-muted text-muted-foreground">
      <H1>{pathname}</H1>
      <H2>Under Construction</H2>
      <div className="w-full pt-8 px-4 ">{children}</div>
    </div>
  );
};
