import { twMerge } from 'tailwind-merge';

interface TitleProps {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  className,
  variant = 'h2',
  children,
  ...props
}) => {
  const Tag = variant;

  return (
    <Tag
      className={twMerge(
        variant === 'h1'
          ? 'text-6xl'
          : variant === 'h2'
          ? 'text-5xl'
          : variant === 'h3'
          ? 'text-4xl'
          : variant === 'h4'
          ? 'text-3xl'
          : variant === 'h5'
          ? 'text-2xl'
          : 'text-xl',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Title;
