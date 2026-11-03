import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Thapar Venture Club",
    template: "%s — Thapar Venture Club",
  },
  description:
    "Ideate. Ascend. Lead. The official digital home of Thapar Venture Club, TIET Patiala.",
  applicationName: "Thapar Venture Club",
  metadataBase: new URL("https://tvc-website.vercel.app"),
  openGraph: {
    title: "Thapar Venture Club",
    description: "Ideate. Ascend. Lead.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
