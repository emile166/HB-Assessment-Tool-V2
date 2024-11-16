import React from 'react';

function Layout({ children }) {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      {children}
    </div>
  );
}

export default Layout; 