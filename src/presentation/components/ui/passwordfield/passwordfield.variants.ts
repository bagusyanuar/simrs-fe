import { cva } from 'class-variance-authority';

export const wrapperVariant = cva(
  'flex items-center border transition-[border] ease-in-out duration-300 overflow-hidden',
  {
    variants: {
      size: {
        large: 'rounded-lg',
        normal: 'rounded-md',
        small: 'rounded-sm',
      },
      isError: {
        false: 'border-gray-400 focus-within:border-gray-500',
        true: 'border-red-500',
      },
      disabled: {
        true: 'bg-neutral-200 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'normal',
      isError: false,
      disabled: false,
    },
  }
);

export const inputVariant = cva(
  'flex-1 outline-none focus:outline-none focus:ring-0 text-gray-700',
  {
    variants: {
      size: {
        large: 'text-md py-3 pe-0',
        normal: 'text-sm py-2 pe-0',
        small: 'text-xs py-1.5 pe-0',
      },
      hasPrefixIcon: {
        true: 'ps-0',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'small', hasPrefixIcon: false, class: 'ps-2' },
      { size: 'normal', hasPrefixIcon: false, class: 'ps-2.5' },
      { size: 'large', hasPrefixIcon: false, class: 'ps-4' },
    ],
    defaultVariants: {
      size: 'normal',
      hasPrefixIcon: false,
    },
  }
);

export const iconVariants = cva('aspect-square', {
  variants: {
    size: {
      large: 'h-4',
      normal: 'h-3.5',
      small: 'h-3',
    },
    error: {
      true: 'text-red-500',
      false: 'text-gray-700',
    },
  },
  defaultVariants: {
    size: 'normal',
    error: false,
  },
});
