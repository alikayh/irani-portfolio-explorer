
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}: CustomButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-persian-blue text-white hover:bg-persian-blue/90 focus:ring-2 focus:ring-persian-blue/50",
    secondary: "bg-persian-turquoise text-white hover:bg-persian-turquoise/90 focus:ring-2 focus:ring-persian-turquoise/50",
    outline: "bg-transparent border-2 border-persian-blue text-persian-blue hover:bg-persian-blue/10 focus:ring-2 focus:ring-persian-blue/50",
    ghost: "bg-transparent text-persian-blue hover:bg-persian-blue/10 focus:ring-2 focus:ring-persian-blue/50"
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-2.5 gap-2.5"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        iconPosition === 'right' && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      {icon && <span className={iconPosition === 'left' ? 'mr-1' : 'ml-1'}>{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
