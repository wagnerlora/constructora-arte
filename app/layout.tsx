import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Constructora Arte | Remodelación y construcción en Santo Domingo",
  description:
    "Expertos en remodelación de cocinas, baños, apartamentos, impermeabilización de techos y obras civiles en Santo Domingo, Gazcue y toda República Dominicana.",
  keywords: [
    "constructora en Santo Domingo",
    "remodelación de baños en Santo Domingo",
    "remodelación de cocinas en Santo Domingo",
    "impermeabilización de techos RD",
    "constructora en Gazcue",
    "obras civiles República Dominicana",
    "Constructora Arte"
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
