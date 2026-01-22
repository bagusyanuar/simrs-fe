import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <Outlet />
    </main>
  );
}
