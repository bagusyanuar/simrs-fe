import React, { forwardRef } from 'react';
import {
  wrapperVariants,
  iconCheckVariants,
  inputVariants,
  labelVariants,
} from './checkbox.variants';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';

type InputProps = VariantProps<typeof inputVariants>;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  isError?: boolean;
  inputSize?: InputProps['size'];
  className?: string;
}
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      disabled = false,
      isError = false,
      inputSize = 'normal',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          wrapperVariants({
            size: inputSize,
          }),
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="peer absolute opacity-0 w-0 h-0"
          {...props}
        />
        <span
          className={cn(
            inputVariants({
              size: inputSize,
              disabled,
              isError,
            })
          )}
        >
          <svg
            className={cn(iconCheckVariants({ size: inputSize }))}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {label && (
          <span className={cn(labelVariants({ size: inputSize }))}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

export default Checkbox;
