import { twMerge } from 'tailwind-merge';
import Card from '../Card';

interface ModalProps {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  className,
  children,
  onClose,
}) => {
  const handleClose = (e: React.MouseEvent) => {
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className={twMerge(
        'flex items-center justify-center bg-gray-900 top-0 left-0 bottom-0 right-0 absolute bg-opacity-30 backdrop-blur-sm'
      )}
      onClick={handleClose}
    >
      <Card
        className={twMerge(
          'p-8 text-center bg-white w-full max-w-lg',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Card>
    </div>
  );
};

export default Modal;
