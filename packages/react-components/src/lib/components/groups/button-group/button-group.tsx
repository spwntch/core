import React from 'react';

export interface IButtonGroupProps {
  stacked?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup: React.FC<IButtonGroupProps> = ({
  stacked = false,
  children,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center gap-x-4 gap-y-2 ${
        stacked ? 'flex-col' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
