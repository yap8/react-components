import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  tag?: 'div' | 'li' | 'section';
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  tag: Tag = 'div',
  children,
  ...props
}) => {
  return (
    <Tag className={twMerge('rounded border shadow p-4', className)} {...props}>
      {children}
    </Tag>
  );
};

export default Card;
