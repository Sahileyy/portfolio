import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#121211",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilkriishna.in"),
  title: {
    default: "Sahil Krishna CB — Full-Stack Developer & Software Engineer",
    template: "%s | Sahil Krishna CB",
  },
  description:
    "Full-Stack Developer & Software Engineer based in Kerala, India. Specializing in Next.js, React, TypeScript, Node.js, and high-performance web applications.",
  applicationName: "Sahil Krishna CB Portfolio",
  authors: [{ name: "Sahil Krishna CB", url: "https://sahilkriishna.in" }],
  creator: "Sahil Krishna CB",
  publisher: "Sahil Krishna CB",
  keywords: [
    "Sahil Krishna CB",
    "Sahil Krishna",
    "Full-Stack Developer",
    "Software Engineer",
    "Full-Stack Developer Kerala",
    "Software Engineer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Shopify Developer",
    "Web Developer Portfolio",
    "Freelance Web Developer",
    "Sahileyy",
  ],
  alternates: {
    canonical: "https://sahilkriishna.in",
  },
  openGraph: {
    type: "profile",
    firstName: "Sahil",
    lastName: "Krishna CB",
    username: "Sahileyy",
    locale: "en_US",
    url: "https://sahilkriishna.in",
    siteName: "Sahil Krishna CB — Portfolio",
    title: "Sahil Krishna CB — Full-Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer & Software Engineer based in Kerala, India. Building modern web applications with Next.js, React, TypeScript, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Krishna CB — Full-Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer & Software Engineer based in Kerala, India. Specializing in Next.js, React, TypeScript, and Node.js.",
    creator: "@sahilkrishna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/fav-icon.svg", type: "image/svg+xml" }],
    shortcut: "/fav-icon.svg",
    apple: "/fav-icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sahilkriishna.in/#person",
      "name": "Sahil Krishna CB",
      "alternateName": ["Sahil Krishna", "Sahileyy"],
      "jobTitle": "Full-Stack Developer & Software Engineer",
      "description":
        "Full-Stack Developer & Software Engineer based in Kerala, India. Specializing in Next.js, React, TypeScript, Node.js, and modern cloud architecture.",
      "url": "https://sahilkriishna.in",
      "email": "mailto:sahilkrishnacb@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://github.com/Sahileyy",
        "https://www.linkedin.com/in/sahil-krishna-cb",
        "https://www.instagram.com/sahilkrishna.cb"
      ],
      "knowsAbout": [
        "Full-Stack Development",
        "Software Engineering",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Shopify",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sahilkriishna.in/#website",
      "url": "https://sahilkriishna.in",
      "name": "Sahil Krishna CB — Full-Stack Developer",
      "description":
        "Official portfolio of Sahil Krishna CB, Full-Stack Developer & Software Engineer.",
      "publisher": {
        "@id": "https://sahilkriishna.in/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased selection:bg-neutral-500/20`}
      >
        <CustomCursor />
        {/* Responsive Astronaut Draggable Rope: larger and touch-friendly on mobile, elegantly positioned */}
        <DraggableRope className="fixed -top-3 sm:top-0 right-1 sm:right-6 md:right-8 lg:right-12 xl:right-16 2xl:right-24 z-30 flex scale-[0.58] sm:scale-65 md:scale-85 lg:scale-100 origin-top-right pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
