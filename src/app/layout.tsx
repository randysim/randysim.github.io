import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const font = IBM_Plex_Sans({ weight: "400", subsets: ['latin'] });

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
      <body className={font.className}>
          <NavBar />
          {children}
      </body>
    </html>
  );
}
