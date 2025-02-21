import type { Metadata } from "next";

import "./globals.css";
import { roboto } from "./ui/font";

export const metadata: Metadata = {
  //El %s en template, nos permite capturar lo que este en el titulo de la pagina que este pasando por este layout
  title: {
    template: "%s | Anjrot Dashboard",
    default: "Anjrot Dev"
  },
  description: "Tutorial del tutorial de Next js",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [
      {
        url: "/public/hero-desktop.png",
      },
    ],
  },
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
