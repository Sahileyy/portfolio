import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import { DraggableRope } from "@/components/ui/gsap-draggable-rope";
import "./globals.css";

const SITE_URL = "https://sahilkrishna.in";
const SITE_NAME = "Sahil Krishna CB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121211",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Sahil Krishna-Developer & Software Engineer",
    template: "%s | Sahil Krishna CB",
  },

  description:
    "Sahil Krishna CB is a Full-Stack Developer and Software Engineer based in Kerala, India, specializing in Next.js, React, TypeScript, Node.js, Shopify, and modern web applications.",

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  keywords: [
    "Sahil Krishna CB",
    "Sahil Krishna",
    "sahilkrishna",
    "best developer in kerala",
    "best software developer in kerala",
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
    canonical: "/",
  },

  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",

    title: "Sahil Krishna CB-Developer & Software Engineer",

    description:
      "Full-Stack Developer and Software Engineer based in Kerala, India. Specializing in Next.js, React, TypeScript, Node.js, Shopify, and modern web applications.",

    firstName: "Sahil",
    lastName: "Krishna CB",
    username: "Sahileyy",

    images: [
      {
        url: "/fav-icon.svg",
        width: 1200,
        height: 630,
        alt: "Sahil Krishna CB — Full-Stack Developer & Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sahil Krishna CB-Developer & Software Engineer",

    description:
      "Full-Stack Developer and Software Engineer based in Kerala, India. Specializing in Next.js, React, TypeScript, Node.js, and Shopify.",

    creator: "@sahilkrishna",

    images: ["/fav-icon.svg"],
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
    icon: [
      {
        url: "/fav-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/fav-icon.svg",
    apple: "/fav-icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Person",

      "@id": `${SITE_URL}/#person`,

      name: "Sahil Krishna CB",

      givenName: "Sahil",

      familyName: "Krishna CB",

      alternateName: ["Sahil Krishna", "Sahileyy"],

      jobTitle: "Developer & Software Engineer",

      description:
        "Full-Stack Developer and Software Engineer based in Kerala, India, specializing in Next.js, React, TypeScript, Node.js, Shopify, and modern web applications.",

      url: SITE_URL,

      image: `${SITE_URL}/fav-icon.svg`,

      email: "mailto:sahilkrishnacb@gmail.com",

      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },

      sameAs: [
        "https://github.com/Sahileyy",
        "https://www.linkedin.com/in/sahil-krishna-cb",
        "https://www.instagram.com/sahilkrishna.cb",
      ],

      knowsAbout: [
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
        "REST APIs",
      ],
    },

    {
      "@type": "WebSite",

      "@id": `${SITE_URL}/#website`,

      url: SITE_URL,

      name: "Sahil Krishna-Developer",

      description:
        "Official portfolio of Sahil Krishna CB, Full-Stack Developer and Software Engineer.",

      publisher: {
        "@id": `${SITE_URL}/#person`,
      },

      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
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
