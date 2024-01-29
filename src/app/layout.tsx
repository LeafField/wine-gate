import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import Header from "../components/organisms/header/Header";
import MantineWrapper from "../components/organisms/mantine/MantineWrapper";
import { Metadata } from "next";
import AuthListener from "../components/organisms/listener/AuthListener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WINE GATE",
  description: "日本語で気楽にワインが探せるワインコミュニティサイトです",
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthListener />
        <MantineWrapper>
          <Header />
          {children}
        </MantineWrapper>
      </body>
    </html>
  );
}
