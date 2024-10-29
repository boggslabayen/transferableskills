import type { Metadata } from "next";
import { quickSand } from "./ui/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transferable Skills",
  description: "IMM - Interactive Media Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className}  antialiased`}>{children}</body>
    </html>
  );
}
