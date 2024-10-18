import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikita Yaskevich",
  description: "Portfolio of Nikita Yaskevich. NextJS and Tailwind CSS.",

  openGraph: {
    siteName: "Nikita Yaskevich's Portfolio",
    title: "Nikita Yaskevich's Portfolio",
    description: "Portfolio of Nikita Yaskevich. NextJS and Tailwind CSS.",

    type: "website",
    locale: "en_US",
    url: "https://nik-yaskevich.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
