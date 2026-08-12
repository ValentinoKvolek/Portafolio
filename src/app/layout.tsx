import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { TitleBar } from "@/components/TitleBar";
import { StatusBar } from "@/components/StatusBar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Valentino Kvolek",
  description: "Valentino Franco Kvolek — Backend & Data Engineer",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="crt-overlay h-svh flex flex-col overflow-hidden bg-bg">
          <TitleBar />
          <main id="scroll-main" className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-8">{children}</div>
          </main>
          <StatusBar />
        </div>
      </body>
    </html>
  );
}
