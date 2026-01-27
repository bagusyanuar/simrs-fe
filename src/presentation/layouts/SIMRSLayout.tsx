import { Outlet } from 'react-router-dom';
import {
  Sidebar,
  SidebarTree,
  SidebarItem,
} from '@/presentation/components/shared/sidebar';
import { Navbar } from '@/presentation/components/shared/navbar';
import { Content } from '@/presentation/components/shared/content';
import { LuActivity, LuFolderArchive } from 'react-icons/lu';

export default function SIMRSLayout() {
  return (
    <main>
      <Sidebar>
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
