import { Controls, Description, Primary, Title } from '@storybook/blocks';
import { PropsWithChildren } from 'react';

export const BasicDocs = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Title />
      <Description />
      <Primary />
      <Controls />
      {children}
    </>
  );
};

export const NoControlsDocs = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Title />
      <Description />
      <Primary />
      {children}
    </>
  );
};
