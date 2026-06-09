import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "@/app/styles/globals.css";

// Fuente para Títulos (Gruesa y técnica)
const fuenteTitulos = Archivo({
  variable: "--font-titulos",
  subsets: ["latin"],
  weight: ["700", "900"], 
});

// Fuente para Texto Principal (Limpia y geométrica)
const fuentePrincipal = Montserrat({
  variable: "--font-principal",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Calculadora de precios WebPages",
  description: "Saca la cuenta y cotiza tu página web a tu gusto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aplicamos ambas variables al body */}
      <body className={`${fuenteTitulos.variable} ${fuentePrincipal.variable}`}>
        {children}
      </body>
    </html>
  );
}