import { LandingPageShell, ShellProvider } from '@/shell';
import type { Metadata } from 'next';
import { brand } from '../config';
import './global.css';

export const metadata: Metadata = {
  title: 'Spawntech Website Sample',
  description: 'Generated with pnpm dlx spawn-workpace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShellProvider brand={brand}>
          <LandingPageShell>{children}</LandingPageShell>
        </ShellProvider>
      </body>
    </html>
  );
}
