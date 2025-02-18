import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="hidden md:block h-screen fixed mt-[65px] w-64">
        <SideNav />
      </div>
      <div className="w-full">
        <Header />
        <div className="md:ml-64 px-10 py-5">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
