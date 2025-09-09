
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-f1-light-dark p-6 rounded-lg border border-gray-700 shadow-lg ${className}`}>
      {children}
    </div>
  );
};
