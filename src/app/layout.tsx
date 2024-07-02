import type { Metadata } from "next";
import { Manrope, Inconsolata } from "next/font/google";
import { NavigationBar } from "./_components/NavigationBar";
import "./globals.css";
import "katex/dist/katex.min.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-jjio" });
const codeFont = Inconsolata({
  subsets: ["latin"],
  variable: "--font-code",
});

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
    <html lang="en" className={codeFont.variable}>
      <body className={manrope.className}>
        <div className="flex flex-col min-h-screen">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
