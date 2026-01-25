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
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}

const Textfield: React.FC<TextfieldProps> = ({
  size,
  isError = false,
  className = '',
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
}) => {
  return (
    <div
      className={cn(
        wrapperVariant({
          size,
          isError,
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
      />
      {SuffixIcon && (
        <div className="h-full px-2">{<SuffixIcon size={14} />}</div>
      )}
    </div>
  );
};

export default Textfield;
