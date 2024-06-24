import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./_components/NavigationBar";
import "katex/dist/katex.min.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeffery Mensah",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="flex flex-col min-h-screen">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
