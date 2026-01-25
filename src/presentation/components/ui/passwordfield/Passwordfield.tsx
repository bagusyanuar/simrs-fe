import React, { useState, type HTMLInputTypeAttribute } from 'react';
import {
  wrapperVariant,
  inputVariant,
  iconVariants,
} from './passwordfield.variants';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import type { IconType } from 'react-icons';

type WrapperVariant = VariantProps<typeof wrapperVariant>;

interface PasswordfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputSize?: WrapperVariant['size'];
  isError?: WrapperVariant['isError'];
  disabled?: boolean;
  prefixIcon?: IconType;
}

const Passwordfield = React.forwardRef<HTMLInputElement, PasswordfieldProps>(
  (
    {
      inputSize,
      isError = false,
      disabled = false,
      prefixIcon: PrefixIcon,
      className = '',
      ...props
    },
    ref
  ) => {
    const [type, setType] = useState<HTMLInputTypeAttribute>('password');

    const handleChangeType = () => {
      if (!disabled) {
        setType((prev) => (prev === 'password' ? 'text' : 'password'));
      }
    };
    return (
      <div
        className={cn(
          wrapperVariant({
            size: inputSize,
            isError,
            disabled,
          }),
          className
        )}
      >
        {PrefixIcon && (
          <div className="h-full px-2">
            {
              <PrefixIcon
                className={cn(
                  iconVariants({ size: inputSize, error: isError })
                )}
                size={14}
              />
            }
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            inputVariant({
              size: inputSize,
            })
          )}
          disabled={disabled}
          {...props}
        />
        <div className="h-full px-2 cursor-pointer" onClick={handleChangeType}>
          {type === 'text' ? (
            <LuEye
              className={cn(iconVariants({ size: inputSize, error: isError }))}
              size={14}
            />
          ) : (
            <LuEyeOff
              className={cn(iconVariants({ size: inputSize, error: isError }))}
              size={14}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Passwordfield;
