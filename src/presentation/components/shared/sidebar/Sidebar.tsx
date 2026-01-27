import React from 'react';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="fixed z-30 w-64 h-dvh bg-white shadow-md border-r border-gray-300 flex flex-col py-4">
      <div className="w-full flex items-center gap-2 px-6">
        <div className="w-8 h-8 rounded-md bg-primary-500"></div>
        <h1 className="text-lg font-black text-slate-700">MEDIFLOW</h1>
      </div>
      <div className="px-6 my-5">
        <div className="w-full p-3 rounded-lg flex items-center gap-2 bg-gray-100 shadow-lg">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://i.pravatar.cc/300"
              alt="avatar"
              className="w-10 h-10 rounded-full object-center object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="text-xs text-slate-700 font-medium leading-none">
              Dr. John
            </span>
            <span className="text-xs text-slate-500 font-light">Dokter</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5 overflow-auto px-6">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
