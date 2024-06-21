"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

const siteId = 5024784;
const hotjarVersion = 6;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
    console.log("Hotjar initiated, hotjarVersion", hotjarVersion);
    Hotjar.event("Page viewed");
  });

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
