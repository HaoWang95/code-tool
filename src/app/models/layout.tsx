import React from "react";
import MainLayout from "../ui/layout/MainLayout";

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-100">
    //   <div className="w-full flex-none md:w-64">
    //     <SideNav />
    //   </div>
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
    <MainLayout>{children}</MainLayout>
  );
}
