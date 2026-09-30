import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import { DraggableRope } from "@/components/ui/gsap-draggable-rope";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilkrishna.in"),
  title: "Sahil Krishna CB — Full-Stack Developer",
  description:
    "Full-stack developer building clean, reliable, and high-performance web applications with Next.js, TypeScript, Node.js, and modern cloud architecture.",
  keywords: [
    "Sahil Krishna CB",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Krishna CB" }],
  creator: "Sahil Krishna CB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilkrishna.in",
    title: "Sahil Krishna CB — Full-Stack Developer",
    description:
      "Full-stack developer building clean, reliable, and high-performance web applications with Next.js, TypeScript, Node.js, and modern cloud architecture.",
    siteName: "Sahil Krishna CB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Krishna CB — Full-Stack Developer",
    description:
      "Full-stack developer building clean, reliable, and high-performance web applications.",
    creator: "@sahilkrishna",
  },
  icons: {
    icon: [
      { url: "/fav-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/fav-icon.svg",
    apple: "/fav-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased selection:bg-neutral-500/20`}
      >
        <CustomCursor />
        <DraggableRope className="fixed -top-5 sm:top-0 right-1 sm:right-6 md:right-8 lg:right-12 xl:right-16 2xl:right-24 z-30 flex scale-[0.32] sm:scale-65 md:scale-85 lg:scale-100 origin-top-right pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
