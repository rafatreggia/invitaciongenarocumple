import { Poppins, Pacifico } from "next/font/google"

// Fuente principal para el contenido general
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

// Fuente decorativa para títulos y elementos destacados
export const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400",
})