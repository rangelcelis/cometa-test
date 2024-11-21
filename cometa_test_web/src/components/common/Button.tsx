import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
  shape: 'normal' | 'round';
  disabled?: boolean;
  testId?: string;
};

export const Button = ({
  children,
  shape,
  onClick,
  testId,
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={shape === 'normal' ? 'button' : 'button_round'}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
