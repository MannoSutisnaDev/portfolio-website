import type { Metadata } from "next";
import "../styles/reset.scss";
import "../styles/fonts.scss";
import "../styles/main.scss";
import "../styles/main-mobile.scss";

import MainWrapper from "@/components/MainWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
