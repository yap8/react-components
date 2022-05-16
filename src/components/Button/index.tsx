import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'rounded transition',
        variant === 'outlined'
          ? 'border hover:bg-slate-50'
          : variant === 'contained'
          ? 'border border-blue-400 bg-blue-400 text-white hover:bg-blue-500 hover:border-blue-500'
          : 'border border-transparent hover:bg-slate-50',
        size === 'large'
          ? 'text-2xl px-6 py-2'
          : size === 'small'
          ? 'text-base px-4 py-2'
          : 'text-xl px-4 py-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
