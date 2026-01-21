import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <main className='w-full h-dvh bg-teal-500'>
            <Outlet />
        </main>
    );
}