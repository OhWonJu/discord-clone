import { NavigationSidebar } from "@/components/navigations";
import React from "react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* Servers Sidebar Area */}
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fiex inset-y-0">
        <NavigationSidebar />
      </div>
      {/* Servers Page Area */}
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;