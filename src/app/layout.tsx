import type { Metadata } from "next";
import "@/styles/all-styles.scss";

import MainWrapper from "@/components/MainWrapper";

export const metadata: Metadata = {
  title: "Manno Sutisna (Portfolio website)",
  description: "Web Development portfolio website of Manno Sutisna",
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
