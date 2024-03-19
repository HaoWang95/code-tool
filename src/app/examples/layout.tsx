import React from "react";
import MainLayout from "../ui/layout/MainLayout";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
