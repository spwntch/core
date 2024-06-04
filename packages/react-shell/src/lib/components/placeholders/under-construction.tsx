'use client';
import { H2 } from '@/react-typography';
import { PropsWithChildren } from 'react';

export const UnderConstruction = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-4 p-4 h-full flex flex-col items-center border-4 border-dashed border-muted text-muted-foreground">
      <H2>Under Construction</H2>
      <div className="w-full pt-8 px-4 ">{children}</div>
    </div>
  );
};
