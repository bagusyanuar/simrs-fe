import React from 'react';

interface ContentProps {
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="ps-64 pt-16 w-full h-dvh bg-primary-50">
      <section className="p-6">{children}</section>
    </main>
  );
};

export default Content;
