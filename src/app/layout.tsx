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
      <body className={cn(inter.className, "xl:px-16 lg:px-12")}>
        <Navbar />
        <main className="container mx-auto sm:px-6 lg:px-8 flex items-center">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
