import type { Metadata } from "next";
import { chineseFont } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Year With Bae",
  description: "One Year With Bae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      translate="no"
    >
      <body className={chineseFont.className}>{children}</body>
    </html>
  );
}
