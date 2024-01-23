import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import Header from "../components/organisms/header/Header";
import MantineWrapper from "../components/organisms/mantine/MantineWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <MantineWrapper>
          <Header />
          {children}
        </MantineWrapper>
      </body>
    </html>
  );
}
