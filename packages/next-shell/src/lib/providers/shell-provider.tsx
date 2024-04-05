import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
// import { AuthBackends } from './auth-backend-provider';
import { BrandProvider, IBrand } from './brand-provider';
import { INavItem, NavProvider } from './nav-provider';

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
