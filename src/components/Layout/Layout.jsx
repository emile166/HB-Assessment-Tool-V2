import React from 'react';

function Layout({ children }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {children}
    </div>
  );
}

export default Layout; 