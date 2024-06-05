import React from 'react';
import { Button, ButtonProps } from '@/react-ui';
import { Github } from 'lucide-react';

export interface GithubButtonProps extends ButtonProps {
  url: string;
}

export const GithubButton = React.forwardRef<HTMLButtonElement, GithubButtonProps>(
  ({ url, ...props }, ref) => {
    return (
      <Button asChild ref={ref} variant="outline" size="icon" {...props}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </Button>
    );
  }
);

GithubButton.displayName = 'GithubButton';

export default GithubButton;
