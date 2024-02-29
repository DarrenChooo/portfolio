import Navbar from "./components/navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn(inter.className, "px-12")}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
