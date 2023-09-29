import React from 'react';
import Sidebar from './Sidebar/indexSidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;