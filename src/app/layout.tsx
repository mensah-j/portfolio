import type { Metadata, Viewport } from "next";
import * as Toast from "@radix-ui/react-toast";
import { Manrope, DM_Mono } from "next/font/google";
import { NavigationBar } from "./_components/NavigationBar";
import "./globals.css";
import "katex/dist/katex.min.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-jjio" });
const codeFont = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Jeffery Mensah",
  description:
    "Recent MIT graduate (SB ‘24, Mathematics and Physics) passionate about solving problems with technology.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
