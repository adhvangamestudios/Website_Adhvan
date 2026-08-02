import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adhvanstudios.com"),
  title: {
    default: "Adhvan | A Journey of Consciousness",
    template: "%s | Adhvan Game Studios",
  },
  description:
    "Adhvan is a premium action-adventure set in an original world inspired by Indian philosophical thought.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Adhvan Game Studios",
    title: "Adhvan | A Journey of Consciousness",
    description:
      "A premium action-adventure set in an original world inspired by Indian philosophical thought.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Adhvan — A Journey of Consciousness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhvan | A Journey of Consciousness",
    description:
      "A premium action-adventure set in an original world inspired by Indian philosophical thought.",
    images: ["/images/hero-poster.jpg"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
