
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, isLoading = false, className, ...props }) => {
  return (
    <button
      className={`relative flex justify-center items-center w-full px-6 py-3 bg-f1-red text-white font-bold text-lg rounded-md hover:bg-red-700 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</span>
      {isLoading && <span className="absolute">{children}</span>}
    </button>
  );
};
