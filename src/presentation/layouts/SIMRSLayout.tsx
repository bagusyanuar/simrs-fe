import { Outlet } from 'react-router-dom';
import { Sidebar, SidebarItem } from '@/presentation/components/shared/sidebar';
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
        <SidebarItem to="/master" label="Master Data" icon={LuFolderArchive} />
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </main>
  );
}
