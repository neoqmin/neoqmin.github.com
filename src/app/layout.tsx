import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdgeBit — 아이디어를 현실로",
  description:
    "Windows 데스크톱 도구부터 웹 플랫폼까지, 실무에 바로 쓰이는 소프트웨어를 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-primary">
        {children}
      </body>
    </html>
  );
}
