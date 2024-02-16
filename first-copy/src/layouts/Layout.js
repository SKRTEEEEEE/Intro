import React from 'react';
import { SideMenu } from '../components/sidemenu/sidemenu';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <SideMenu />
      {children}
    </div>
  );
}
