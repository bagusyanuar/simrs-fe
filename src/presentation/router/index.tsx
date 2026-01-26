import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes, DashboardRoutes } from '@/presentation/router/modules';

export const appRouter = createBrowserRouter([
  {
    path: '',
    children: [...AuthRoutes, ...DashboardRoutes],
  },
]);
