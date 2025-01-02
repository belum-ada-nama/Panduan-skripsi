
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none transition duration-200';
  const primaryStyles = 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300';
  const secondaryStyles = 'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300';

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${buttonStyles} ${disabled ? 'cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
