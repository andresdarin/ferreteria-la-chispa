import './globals.css'
import { ReactNode } from 'react'
import { Londrina_Outline, Lato } from 'next/font/google';

export const metadata = {
  title: 'Ferretería La Chispa',
  description: 'Tu ferretería de confianza en la ciudad. Encuentra herramientas, materiales y asesoramiento experto para tus proyectos de construcción y bricolaje.',
}

const londrina = Londrina_Outline({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-londrina',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`
        ${lato.className} 
        ${londrina.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}