import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
// import LoginLayout from "./login-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philly Truce",
  description:
    "An Extraordinary Web-based Mobile Application that seeks to reduce violence around in the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
