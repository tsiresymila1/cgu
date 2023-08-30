import "./globals.css";
import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";

const montserra = ABeeZee({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "User Data Usage Policy",
  description: "User Data Usage Policy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>User Data Usage Policy</title>
      </head>
      <body className={montserra.className}>{children}</body>
    </html>
  );
}
