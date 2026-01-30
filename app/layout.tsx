import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hurst First Members Portal",
  description: "AMC Management Portal for Hurst First Members",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
