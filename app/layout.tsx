import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Victor Oladejo — Frontend Developer and Data Engineer",
  description:
    "Software Developer and Data Engineer. My strength lies in building AI powered applications.",
  generator: "Next.js",
  applicationName: "Victor Oladejo",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "data engineer",
    "data analyst",
    "machine learning",
    "deep learning",
    "reinforced learning",
    "supervised learning",
    "unsupervised learning",
    "Cloud",
    "AWS",
    "GCP",
    "Azure",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Victor Oladejo — Software Developer and Data Engineer",
    description:
      "Software Developer and Data Engineer. My strength lies in building AI powered applications.",
    url: "https://victorportfolio.onrender.com",
    siteName: "Software Developer and Data Engineer",
    images: [
      {
        url: "https://raw.githubusercontent.com/victortosin02/pvoliov1/main/uploads/motion%20tracker.png",
        width: 1200,
        height: 630,
        alt: "VictorOladejo - Software Developer and Data Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Oladejo — Software Developer and Data Engineer",
    description:
      "Software Developer and Data Engineer. My strength lies in building AI powered applications.",
    creator: "@victortosin01",
    images: [
      "https://raw.githubusercontent.com/victortosin02/pvoliov1/main/uploads/motion%20tracker.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  metadataBase: new URL("https://victorportfolio.onrender.com"),
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
