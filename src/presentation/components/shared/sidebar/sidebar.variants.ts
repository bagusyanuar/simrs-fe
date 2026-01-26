import { cva } from 'class-variance-authority';

export const sidebarItemVariants = cva(
  'flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-colors ease-in-out duration-300',
  {
    variants: {
      isActive: {
        true: 'bg-primary-500 text-white shadow-lg shadow-primary-500/30',
        false: 'text-slate-500 hover:bg-slate-100 hover:text-slate-800',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);
