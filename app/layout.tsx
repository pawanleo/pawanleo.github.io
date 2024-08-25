import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const font = Titillium_Web({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pawan Portfolio",
  description: "Pawan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
