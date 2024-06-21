"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hotjar from "@hotjar/browser";
import { useEffect } from "react";
import { mouseflow } from "react-mouseflow";
import { useRouter } from "next/navigation";

const siteId = 5024784;
const hotjarVersion = 6;
const mfid = "3fe6bbf0-ff24-458b-a231-57dd2ae2411a";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    // Ensure we're on the client side before running Mouseflow code
    if (typeof window !== "undefined") {
      // Create a script element
      const script = document.createElement("script");
      script.src =
        "https://cdn.mouseflow.com/projects/3fe6bbf0-ff24-458b-a231-57dd2ae2411a.js";
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
    console.log("Hotjar initiated, hotjarVersion", hotjarVersion);

    Hotjar.event("Page viewed hotjar");
  });

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
