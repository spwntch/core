import React from 'react';
import styles from './button-group.module.css';

export interface IButtonGroupProps {
  /**
   * If true, the buttons will be stacked vertically.
   */
  stacked?: boolean;
  /**
   * The content of the ButtonGroup, usually buttons.
   */
  children: React.ReactNode;
  /**
   * Additional class names to apply to the ButtonGroup.
   */
  className?: string;
}

/**
 * ButtonGroup component.
 *
 * Renders a group of buttons either horizontally or vertically based on the `stacked` prop.
 *
 * @param {IButtonGroupProps} props - The props for the ButtonGroup component.
 */
export const ButtonGroup: React.FC<IButtonGroupProps> = ({
  stacked = false,
  children,
  className = '',
}) => {
  return (
    <div className={`${styles['button-group']} ${stacked ? styles['button-group--stacked'] : ''} ${className}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;