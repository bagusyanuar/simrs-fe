import { Outlet } from 'react-router-dom';
import {
  Sidebar,
  SidebarTree,
  SidebarItem,
} from '@/presentation/components/shared/sidebar';
import { Navbar } from '@/presentation/components/shared/navbar';
import { Content } from '@/presentation/components/shared/content';
import {
  LuActivity,
  LuFolderArchive,
  LuStethoscope,
  LuPill,
} from 'react-icons/lu';


export default function SIMRSLayout() {
  return (
    <main>
      {/* <div className="w-18 h-dvh p-3 border-r border-slate-300 shadow-lg shadow-slate-300/20">
        <div className="w-full aspect-square rounded-xl flex justify-center">
          <img src={BrandLogo} alt="brand-logo" className="w-10 h-10" />
        </div>
        <div className="flex flex-col gap-1 mt-5 justify-center items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500 shadow-lg shadow-primary-500/20">
            <LuStethoscope size={16} className='text-white' />
          </div>
          <div className="w-12 h-12 text-slate-500 flex items-center justify-center rounded-lg">
            <LuPill size={18} />
          </div>
        </div>
      </div>
      <div className="w-64 h-dvh p-3 border-r border-slate-300">
        <div className='w-full'>
          <h1>Medical Overview</h1>
        </div>
      </div>
      <div className="flex-1"></div> */}
      <Sidebar>
        <div className="text-xs text-slate-500 font-medium mb-3 tracking-widest">
          Menu Overview
        </div>
        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          icon={LuActivity}
          isActive
        />
        <SidebarTree label="Master Data" icon={LuFolderArchive} />
      </Sidebar>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </main>
  );
}
