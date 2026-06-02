import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "line-build | LINE構築・Lステップ実装ブログ",
    template: "%s | line-build",
  },
  description: "LINE構築・Lステップ・エルメ・LINE Messaging APIの実務情報を現役フリーランスエンジニアが発信。実案件をもとにした一次情報ブログ。",
  keywords: ["Lステップ", "LINE構築", "エルメ", "LINE Messaging API", "フリーランス", "LINE公式アカウント"],
  openGraph: {
    siteName: "line-build",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
