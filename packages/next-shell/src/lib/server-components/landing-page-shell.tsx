import { PropsWithChildren } from 'react';
import { RegularFooter } from '../client-components';

export const LandingPageShell = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <RegularFooter />
    </div>
  );
};
