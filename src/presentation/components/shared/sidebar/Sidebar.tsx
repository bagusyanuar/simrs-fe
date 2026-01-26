import React from 'react';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="fixed z-30 w-64 h-dvh bg-white shadow-md border-r border-gray-300 flex flex-col py-4">
      <div className="w-full flex items-center gap-2 px-6 mb-7">
        <div className="w-8 h-8 rounded-md bg-primary-500"></div>
        <h1 className="text-lg font-black text-slate-900">MEDIFLOW</h1>
      </div>
      <div className="flex-1 flex flex-col gap-1.5 overflow-auto px-6">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
