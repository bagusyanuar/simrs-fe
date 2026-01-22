import React from 'react';
import { cn } from '@/presentation/utils/cn';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={cn('px-4 py-6 bg-white shadow rounded-md', className)}>
      {children}
    </div>
  );
};

export default Card;
