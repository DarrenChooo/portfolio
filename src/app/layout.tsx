import Navbar from "../components/navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darren Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={cn(inter.className, "px-4 sm:px-6 lg:px-12 xl:px-16")}>
        <Navbar />
        <main className="max-w-screen-xl mx-auto lg:px-12 lg:py-12 flex items-center">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
