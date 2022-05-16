import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  className?: string;
  tag?: 'div' | 'section' | 'header' | 'footer';
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  className,
  tag: Tag = 'div',
  children,
  ...props
}) => {
  return (
    <Tag className={twMerge('container', className)} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
