import type { Metadata } from "next";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";
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
      <body id="body-hook" className={manrope.className}>
        <Toast.Provider>
          <div className="flex flex-col min-h-screen w-full">
            <NavigationBar />
            {children}
          </div>

          <Toast.Viewport className="fixed flex flex-col gap-2 z-50 bottom-0 right-0 p-6" />
        </Toast.Provider>
      </body>
    </html>
  );
}
