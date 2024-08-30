import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import SideNav from "@/components/nav/side-nav";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Providers } from "./providers";

const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });

export const metadata: Metadata = {
  title: "VisActor Next Template",
  description: "Template for VisActor and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background font-sans", gabarito.variable)}>
        <Providers>
          <div className="flex min-h-[100svh]">
            <SideNav className="flex-shrink-0" />
            <div className="flex-grow overflow-auto">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
