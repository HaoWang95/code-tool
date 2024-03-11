import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/font";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code tool with GenAI",
  description: "A prototype app that implements GenAI service backed by AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
