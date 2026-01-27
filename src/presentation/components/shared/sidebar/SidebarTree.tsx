import React from 'react';
import type { IconType } from 'react-icons';
import { sidebarItemVariants } from './sidebar.variants';
import { cn } from '@/presentation/utils/cn';
import { LuCircle, LuChevronRight } from 'react-icons/lu';

interface SidebarTreeProps {
  label?: string;
  icon?: IconType;
  isActive?: boolean;
}

const SidebarTree: React.FC<SidebarTreeProps> = ({
  label,
  icon: Icon,
  isActive = false,
}) => {
  return (
    <div className={cn(sidebarItemVariants({ isActive }))}>
      {Icon ? <Icon size={14} /> : <LuCircle size={14} />}
      <span className="flex-1">{label}</span>
      <LuChevronRight size={14} className="" />
    </div>
  );
};

export default SidebarTree;
