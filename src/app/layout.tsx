'use client'
import { CSSProperties, useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Scrollbars } from "react-custom-scrollbars-2";

const inter = Inter({ subsets: ["latin"] });

/*
export const metadata: Metadata = {
  title: "Randy Sim",
  description: "CS @ SBU | Software Engineer",
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [autoHeightMax, setAutoHeightMax] = useState(window.innerHeight);

  useEffect(() => {
      const handleResize = () => {
          setAutoHeightMax(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderThumb = ({
      style,
      ...props
  }: {
      style: CSSProperties;
      [key: string]: any;
  }) => {
      const thumbStyle: CSSProperties = {
          backgroundColor: "rgb(87, 138, 101)",
          borderRadius: "4px", // Adjust this value as needed to match your design
      };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <html lang="en">
      <body className={inter.className}>
      <Scrollbars
            universal
            autoHeight
            autoHeightMin={100}
            autoHeightMax={autoHeightMax}
            renderThumbVertical={renderThumb} // Apply the custom thumb component here
        >
          {children}
        </Scrollbars>
      </body>
    </html>
  );
}
