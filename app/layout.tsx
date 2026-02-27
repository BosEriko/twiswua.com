import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
