import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  'inline-flex items-center cursor-pointer relative',
  {
    variants: {
      size: {
        large: 'gap-2.5',
        normal: 'gap-2',
        small: 'gap-1',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

export const inputVariants = cva(
  'rounded-sm border border-neutral-400 flex items-center justify-center transition peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100',
  {
    variants: {
      size: {
        large: 'h-6 w-6',
        normal: 'h-5 w-5',
        small: 'h-4 w-4',
      },
      disabled: {
        true: 'border-neutral-400 bg-neutral-200 peer-[&:checked:disabled]:bg-neutral-200 peer-[&:checked:disabled]:border-neutral-400',
        false: '',
      },
      isError: {
        true: 'border-red-500 peer-checked:border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'normal',
      disabled: false,
      isError: false,
    },
  }
);

export const iconCheckVariants = cva(
  'text-white opacity-0 transition-all duration-150 peer-checked:[&_svg]:opacity-100',
  {
    variants: {
      size: {
        large: 'h-4 w-4',
        normal: 'w-3.5 h-3.5',
        small: 'w-2.5 h-2.5',
      },
    },
  }
);

export const labelVariants = cva('text-sm text-neutral-700 select-none', {
  variants: {
    size: {
      large: '',
      normal: 'text-sm',
      small: 'text-xs',
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});
