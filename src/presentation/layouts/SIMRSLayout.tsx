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
import BrandLogo from '@/assets/images/logo.png';

export default function SIMRSLayout() {
  return (
    <main className="w-full h-dvh flex">
      <div className="w-18 h-dvh p-3 border-r border-slate-100">
        <div className="w-full aspect-square rounded-xl">
          <img src={BrandLogo} alt="brand-logo" className="w-12 h-12" />
          <div className="flex flex-col gap-1 mt-5">
            <div className="w-full aspect-square text-slate-500 flex items-center justify-center rounded-lg bg-slate-100">
              <LuStethoscope size={18} />
            </div>
            <div className="w-full aspect-square text-slate-500 flex items-center justify-center rounded-lg">
              <LuPill size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 h-dvh p-3 border-r border-slate-100"></div>
      <div className="flex-1"></div>
      {/* <Sidebar>
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
      <Navbar /> */}
      {/* <Content>
        <Outlet />
      </Content> */}
    </main>
  );
}
