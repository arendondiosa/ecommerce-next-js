import React from "react";
import TopMenu from '../../components/ui/top-menu/TopMenu';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen">
    <TopMenu />
    {children}</main>;
};

export default ShopLayout;
