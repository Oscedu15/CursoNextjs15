import type { Metadata } from "next";

import "./globals.css";
import { roboto } from "./ui/font";



export const metadata: Metadata = {
  title: "AnjrotDev",
  description: "Tutorial Next Js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`} suppressHydrationWarning
        //roboto es la fuente de letra base para todas las letras de la pagina
        //antialiased mejorar la estetica del texto para el usuario
      >
        {children}
      </body>
    </html>
  );
}
