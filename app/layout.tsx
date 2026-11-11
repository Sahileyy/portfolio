import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import { DraggableRope } from "@/components/ui/gsap-draggable-rope";
import SmoothScroll from "@/components/smooth-scroll";
import Preloader from "@/components/preloader";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
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
        url: "/og-image.jpg",
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

    images: ["/og-image.jpg"],
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

      image: `${SITE_URL}/profile.jpg`,

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
          <StyledComponentsRegistry>
            <Preloader />

            <SmoothScroll>
              <CustomCursor />

            <DraggableRope
              className="
                fixed
                -top-2
                sm:top-0
                right-4
                xs:right-6
                sm:right-8
                md:right-10
                lg:right-14
                xl:right-18
                2xl:right-24
                z-30
                flex
                scale-[0.68]
                xs:scale-[0.72]
                sm:scale-[0.78]
                md:scale-[0.82]
                lg:scale-[0.85]
                xl:scale-[0.90]
                2xl:scale-95
                origin-top-right
                pointer-events-none
              "
            />

            {children}
        </SmoothScroll>
      </StyledComponentsRegistry>
    </body>
    </html >
  );
}