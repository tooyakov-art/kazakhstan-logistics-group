import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp' | 'white';
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm active:scale-95";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-brand-blue text-white hover:bg-blue-700 shadow-blue-200/50";
      break;
    case 'outline':
      variantStyles = "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white";
      break;
    case 'white':
      variantStyles = "bg-white text-brand-dark hover:bg-gray-100 border border-gray-200";
      break;
    case 'whatsapp':
      variantStyles = "bg-green-500 text-white hover:bg-green-600 shadow-green-200/50";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};