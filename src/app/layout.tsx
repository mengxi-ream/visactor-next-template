import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
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
    <html lang="en">
      <body className={cn("bg-background font-sans", gabarito.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
