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
    "Software Developer at CloudWare Technologies and freelance Data Engineer. My strength lies in building AI powered applications and currently working remotely from Nigeria.",
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
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Victor Oladejo — Software Developer and Data Engineer",
    description:
      "Frontend Developer at CloudWare Technologies and freelance Data Engineer. My strength lies in building AI powered applications and currently working remotely from Lagos, Nigeria.",
    url: "https://www.victorwilliams.me",
    siteName: "Software Developer and Data Engineer",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
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
      "Software Developer at CloudWare Technologies and freelance Data Engineer. My strength lies in building AI powered applications and currently working remotely from Lagos, Nigeria.",
    creator: "@victortosin01",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
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
  metadataBase: new URL("https://www.victorwilliams.me"),
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
