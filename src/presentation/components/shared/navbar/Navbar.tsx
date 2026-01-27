import React from 'react';

interface NavbarProps {
  children?: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="fixed w-full ps-64 top-0 left-0 z-29 border-b border-gray-300">
      <div className="w-full h-16 bg-white px-3 flex items-center drop-shadow-md">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
