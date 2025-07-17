import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/navbar/home";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
