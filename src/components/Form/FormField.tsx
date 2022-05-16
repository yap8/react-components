import { twMerge } from 'tailwind-merge';

interface FormFieldProps {
  className?: string;
  id: string;
  type: 'text' | 'email' | 'password';
  label?: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEvent<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({
  className,
  id,
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  return <input className={twMerge(className)} {...props} />;
};

export default FormField;
