import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './theme-provider';
import { useTheme } from 'next-themes';

const ThemedComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('system')}>System Mode</button>
    </div>
  );
};

/**
 *
 * The `ThemeProvider` is designed to integrate with `next-themes` to provide theme switching functionality in your Next.js applications.
 *
 * ## How to Use
 *
 * To use `ThemeProvider`, simply wrap your application with it. You can pass any props that are supported by `next-themes`.
 * 
 * ```tsx
 * import { ThemeProvider } from './theme-provider';
 * 
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <ThemeProvider attribute="class">
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 *
 */
const meta: Meta<typeof ThemeProvider> = {
  title: 'shell/theme-provider',
  component: ThemeProvider,
  args: {
    attribute: 'class',
    children: <ThemedComponent />,
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ThemeProvider>;

/**
 * Basic ThemeProvider example.
 * Demonstrates the ThemeProvider component.
 */
export const Basic: Story = {};

/**
 * Dark Mode ThemeProvider example.
 * Demonstrates the ThemeProvider component in dark mode.
 */
export const InDarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
