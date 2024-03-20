import MainLayout from "@/app/ui/layout/MainLayout";
import React from "react";

export default function DuplicateCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
