import { PropsWithChildren } from 'react';
import { IBrand } from '../brand/brand-provider/brand-provider';
import { INavItem } from '../nav/nav-provider/nav-provider';
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
  return <>{children}</>;
  // return (
  //   <ThemeProvider
  //     attribute="class"
  //     defaultTheme={defaultTheme}
  //     enableSystem
  //     disableTransitionOnChange
  //   >
  //     <BrandProvider brand={brand}>
  //       <NavProvider navItems={navItems}>
  //         {/* <AuthBackendContextProvider backendProvider={authBackendProvider}> */}
  //         {children}
  //         {/* </AuthBackendContextProvider> */}
  //       </NavProvider>
  //     </BrandProvider>
  //   </ThemeProvider>
  // );
};
