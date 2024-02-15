import "@mantine/core/styles.css";
import "./globals.css";
import { notoStyle } from "../utils/font";
import { Metadata } from "next";

import MantineWrapper from "../components/organisms/mantine/MantineWrapper";
import TanstackProvider from "../components/atoms/tanstack-provider/TanstackProvider";

import Header from "../components/organisms/header/Header";
import AuthListener from "../components/organisms/listener/AuthListener";
import PageTransitionListener from "../components/atoms/Page-transition-listener/PageTransitionListener";
import ViewPortListener from "../components/organisms/listener/ViewPortListener";
import Modal from "../components/organisms/modal/Modal";

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
      <body className={notoStyle.className}>
        <TanstackProvider>
          <AuthListener />
          <PageTransitionListener />
          <ViewPortListener />
          <Modal />
          <MantineWrapper>
            <Header />
            {children}
          </MantineWrapper>
        </TanstackProvider>
      </body>
    </html>
  );
}
