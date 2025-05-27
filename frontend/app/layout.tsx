import type { Metadata } from "next";

import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";

// Fuente principal para el contenido general
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

// Fuente decorativa para títulos y elementos destacados
const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400",
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
    <html lang="es" className={`${poppins.variable} ${pacifico.variable} scroll-smooth`}>
      <body
        className={`antialiased w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
