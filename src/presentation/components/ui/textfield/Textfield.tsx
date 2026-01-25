import React from 'react';
import { wrapperVariant, inputVariant } from './textfield.variants';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import type { IconType } from 'react-icons';

type WrapperVariant = VariantProps<typeof wrapperVariant>;

interface TextfieldProps {
  className?: string;
  size?: WrapperVariant['size'];
  isError?: WrapperVariant['isError'];
  disabled?: boolean;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
  ({
    size,
    prefixIcon: PrefixIcon,
    suffixIcon: SuffixIcon,
    isError = false,
    disabled = false,
    className = '',
    ...props
  }) => {
    return (
      <div
        className={cn(
          wrapperVariant({
            size,
            isError,
            disabled,
          }),
          className
        )}
      >
        {PrefixIcon && (
          <div className="h-full px-2">{<PrefixIcon size={14} />}</div>
        )}
        <input
          className={cn(
            inputVariant({
              size,
              hasPrefixIcon: !!PrefixIcon,
              hasSuffixIcon: !!SuffixIcon,
            })
          )}
          disabled={disabled}
          {...props}
        />
        {SuffixIcon && (
          <div className="h-full px-2">{<SuffixIcon size={14} />}</div>
        )}
      </div>
    );
  }
);

export default Textfield;
