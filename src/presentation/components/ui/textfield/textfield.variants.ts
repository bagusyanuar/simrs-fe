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
    },
    defaultVariants: {
      size: 'normal',
      isError: false,
    },
  }
);

export const inputVariant = cva(
  'flex-1 outline-none focus:outline-none focus:ring-0 text-gray-700',
  {
    variants: {
      size: {
        large: 'text-md py-3',
        normal: 'text-sm py-2',
        small: 'text-xs py-1.5',
      },
      hasPrefixIcon: {
        true: 'ps-0',
        false: '',
      },
      hasSuffixIcon: {
        true: 'pe-0',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'small', hasPrefixIcon: false, class: 'ps-2' },
      { size: 'normal', hasPrefixIcon: false, class: 'ps-2.5' },
      { size: 'large', hasPrefixIcon: false, class: 'ps-4' },

      { size: 'small', hasSuffixIcon: false, class: 'pe-2' },
      { size: 'normal', hasSuffixIcon: false, class: 'pe-2.5' },
      { size: 'large', hasSuffixIcon: false, class: 'pe-4' },
    ],
    defaultVariants: {
      size: 'normal',
      hasPrefixIcon: false,
      hasSuffixIcon: false,
    },
  }
);
