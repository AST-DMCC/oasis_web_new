import type { Metadata } from "next";
import { Cairo, Josefin_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
// Load Google Fonts
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cairo",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "OASIS",
  description: "This project was originally built in React and converted to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${josefin.variable}`}>
      <NextTopLoader height={4} color="#562af5" />
      <Toaster position="top-center" richColors closeButton />
        {children}
      </body>
    </html>
  );
}
