import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'center'; 
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  icon,
  iconPosition = 'left',
}) => {
  const baseStyles = 'px-4 py-2 rounded-md focus:outline-none transition duration-200 font-bold flex items-center justify-center';
  const primaryStyles = 'border-2 rounded-md text-white hover:bg-blue-600 disabled:bg-blue-300';
  const secondaryStyles = 'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300';

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  // Menentukan arah layout dengan flex
  const iconPositionStyles = iconPosition === 'left' ? 'flex-row' : iconPosition === 'right' ? 'flex-row-reverse' : 'flex-col';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${buttonStyles} ${iconPositionStyles} ${disabled ? 'cursor-not-allowed' : ''}`}
    >
      {icon && (typeof icon === 'string' ? <img src={icon} className="mr-2"/> : icon)}
      <span>{label}</span>
    </button>
  );
};

export default Button;
