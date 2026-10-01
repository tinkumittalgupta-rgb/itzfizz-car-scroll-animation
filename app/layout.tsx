import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ItzFizz — Digital Studio",
  description:
    "ItzFizz crafts digital experiences that move people. Premium scroll-based hero animation demo.",
  keywords: ["digital studio", "itzfizz", "web design", "animation"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-outfit">{children}</body>
    </html>
  );
}
