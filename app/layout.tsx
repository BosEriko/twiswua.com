import type { Metadata } from "next";
import { Caveat, Nunito, Permanent_Marker } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "twiswua.com — TwisWua's Homepage",
  description: "Rawr!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${permanentMarker.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
