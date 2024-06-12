import { Button, ButtonProps } from '@/react-ui';
import { forwardRef } from 'react';
import { GithubIcon } from './github-icon';

export interface GithubButtonProps extends ButtonProps {
  url: string;
}

export const GithubButton = forwardRef<
  HTMLButtonElement,
  GithubButtonProps
>(({ url, ...props }, ref) => {
  return (
    <Button asChild ref={ref} variant="outline" size="icon" {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
    </Button>
  );
});

GithubButton.displayName = 'GithubButton';

export default GithubButton;
