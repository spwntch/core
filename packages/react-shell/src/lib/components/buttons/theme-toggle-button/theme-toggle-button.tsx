'use client';

import React from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  cn,
} from '@/react-ui';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import styles from './theme-toggle-button.module.css';

export const ThemeToggleButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun className={cn(styles['icon'], 'dark:hidden')} />
          <Moon className={cn(styles['icon'], 'hidden dark:block')} />
          <span className={styles['screen-reader-text']}>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
