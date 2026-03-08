import type { Metadata } from "next";
import "./globals.css";
import CommonHeader from "@/components/common/header";
import CommonFooter from "@/components/common/footer";

export const metadata: Metadata = {
  title: 'Health Hub | 健康アプリで運動・栄養をサポート',
  description: 'Health Hub | AI を活用したトレーニング情報・健康情報を発信。初心者から上級者まで、運動・栄養・健康管理をサポートする情報を提供します。',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.png" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-white">
        <CommonHeader/>
          {children}
        <CommonFooter/>
      </body>
    </html>
  );
}
