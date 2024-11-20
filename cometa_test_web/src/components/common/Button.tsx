import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
  shape: 'normal' | 'round';
  disabled?: boolean;
};

export const Button = ({
  children,
  shape,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={shape === 'normal' ? 'button' : 'button_round'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
