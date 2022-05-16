interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="text-xl px-4 py-2 border rounded transition hover:bg-slate-50">
      {children}
    </button>
  );
};

export default Button;
