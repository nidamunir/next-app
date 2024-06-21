"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hotjar from "@hotjar/browser";
import { useEffect } from "react";
import Mouseflow from "mouseflow";

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
    Hotjar.event("Page viewed hotjar");
    Mouseflow.init("2c2b5e25-1639-4105-b4dd-64b73c25ce8d");
  });

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
