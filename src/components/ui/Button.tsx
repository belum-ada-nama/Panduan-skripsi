
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'; 
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef(
  (
    { variant = 'primary', size = 'medium', className, children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonClass = clsx(
      'inline-flex items-center justify-center rounded-md font-semibold transition-all focus:outline-none disabled:opacity-50', 
      {
        
        'bg-white text-black': variant === 'primary',
        'text-white border border-white': variant === 'secondary',
        'border border-gray-500 text-gray-500 hover:bg-gray-100': variant === 'outline',

        'px-6 py-3 text-sm': size === 'small',
        'px-6 py-3 text-base': size === 'medium',
        'px-8 py-4 text-lg': size === 'large',
      },
      className
    );

    return (
      <button ref={ref} className={buttonClass}  {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
