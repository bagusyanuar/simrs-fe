import React, { useState, useRef, useEffect } from 'react';
import type { IconType } from 'react-icons';
import { sidebarTreeVariants } from './sidebar.variants';
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
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const collapsibleRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setOpen(isActive);
  }, [isActive]);

  useEffect(() => {
    if (open && collapsibleRef.current) {
      setHeight(collapsibleRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className="w-full relative">
      <div
        className={cn(sidebarTreeVariants({ isActive }))}
        onClick={handleOpen}
      >
        {Icon ? <Icon size={14} /> : <LuCircle size={14} />}
        <span className="flex-1">{label}</span>
        <LuChevronRight size={14} className="" />
      </div>
      <div
        ref={collapsibleRef}
        style={{ height: height }}
        className="w-full opacity-100 transition-all duration-300 ease-in-out"
      >
        <div className="ps-5 pt-1.5">
          <div className="w-full ps-1.5 flex flex-col gap-0.5 border-l border-black/50">
            <div className="px-2 py-1.5 w-full rounded-sm text-sm font-light text-black/80 cursor-pointer hover:bg-white/20  hover:text-white transition-all duration-300 ease-in-out focus:ring-0 focus:outline-none">
              Unit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarTree;
