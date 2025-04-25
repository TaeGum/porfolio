/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter, Handlee } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handlee",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`relative ${inter.className} ${handlee.className} bg-white min-h-screen font-inter`}
      >
        {/* 전체 배경 패턴 이미지 */}
        <img
          src="/bg-patterns0.png"
          alt=""
          className="fixed inset-0 w-full h-full object-cover max-w-6xl mx-auto -z-10 pointer-events-none"
        />
        {children}
      </body>
    </html>
  );
}
