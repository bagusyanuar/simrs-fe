import React from 'react';
import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons';
import { sidebarItemVariants } from './sidebar.variants';
import { cn } from '@/presentation/utils/cn';

interface SidebarItemProps {
  to: string;
  label?: string;
  icon?: IconType;
  isActive?: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  label,
  icon: Icon,
  isActive = false,
}) => {
  return (
    <NavLink to={to} className={cn(sidebarItemVariants({ isActive }))}>
      {Icon && <Icon size={14} />}
      {label}
    </NavLink>
  );
};

export default SidebarItem;
