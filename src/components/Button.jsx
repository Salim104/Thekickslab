import React from 'react';

const Button = ({ children, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-black text-white hover:bg-red-600'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
