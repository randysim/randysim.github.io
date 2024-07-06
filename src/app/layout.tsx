import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ScrollLayout from "@/components/layouts/ScrollbarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randy Sim",
  description: "CS @ SBU | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollLayout>
          {children}
        </ScrollLayout>
      </body>
    </html>
  );
}
