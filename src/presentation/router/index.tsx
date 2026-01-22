import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '@/presentation/router/modules';

export const appRouter = createBrowserRouter([
  {
    path: '',
    children: [...AuthRoutes],
  },
]);
