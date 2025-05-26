import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";

// Fuente principal para el contenido general
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

// Fuente decorativa para títulos y elementos destacados
export const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "¡Genaro cumple 1 año!",
  description:
    "Acompañanos a celebrar el primer añito de Genaro el 21 de septiembre de 2025. ¡Va a ser un Dia inolvidable!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${pacifico.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
