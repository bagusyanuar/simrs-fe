import type { RouteObject } from 'react-router-dom';
import SIMRSLayout from '@/presentation/layouts/SIMRSLayout';
import DashboardPage from '@/presentation/pages/sim-rs/dashboard/Dashboard';

export const DashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    Component: SIMRSLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
    ],
  },
];
