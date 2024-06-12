"use client"
import { ShellProvider } from '@/react-shell';
import { WebsiteShell } from '../components/website-shell';
import { brand } from '../config';
import './global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ShellProvider brand={brand} /*navItems={primaryNav}*/ defaultTheme="dark">
          <WebsiteShell githubUrl="https://github.com/spwntch">
            {children}
          </WebsiteShell>
        </ShellProvider>
      </body>
    </html>
  );
}
