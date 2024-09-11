import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "~/components/theme-provider";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Hildebrandt",
  description:
    "Experienced Front End and Full Stack JavaScript Developer specializing in React, Typescript, NestJS, and automated testing. Based in Europe, available for freelance or contract work. Offering expert solutions for scalable, modern web development.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
