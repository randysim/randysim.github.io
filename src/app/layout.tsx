import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";

const font = IBM_Plex_Sans({ weight: "400", subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Randy Sim",
  description: "CS @ Brown | Software Engineer"
};

export const viewport : Viewport = {
  themeColor: "#000000"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={font.className}>
          <Navbar />
          <div>
            {children}
          </div>
      </body>
    </html>
  );
}
