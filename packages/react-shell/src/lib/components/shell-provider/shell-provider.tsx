import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { INavItem, NavProvider } from '../../providers/nav-provider';
import { BrandProvider, IBrand } from '../brand/brand-provider/brand-provider';
// import { AuthBackends } from './auth-backend-provider';

export interface IShellProviderProps {
  // authBackendProvider?: AuthBackends;
  defaultTheme?: 'light' | 'dark' | 'system';
  brand?: IBrand;
  navItems?: INavItem[];
}

export const ShellProvider = ({
  // authBackendProvider,
  defaultTheme = 'system',
  brand,
  navItems,
  children,
}: IShellProviderProps & PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
    >
      <BrandProvider brand={brand}>
        <NavProvider navItems={navItems}>
          {/* <AuthBackendContextProvider backendProvider={authBackendProvider}> */}
          {children}
          {/* </AuthBackendContextProvider> */}
        </NavProvider>
      </BrandProvider>
    </ThemeProvider>
  );
};
