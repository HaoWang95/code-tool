import React from "react";
import MainLayout from "../ui/layout/MainLayout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
