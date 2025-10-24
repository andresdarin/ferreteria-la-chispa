import './globals.css'
import { ReactNode } from 'react'
import { Londrina_Outline } from 'next/font/google';

export const metadata = {
  title: 'Ferretería La Chispa',
  description: 'Tu ferretería de confianza en la ciudad. Encuentra herramientas, materiales y asesoramiento experto para tus proyectos de construcción y bricolaje.',
}

const Londrina = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${Londrina.className} ${Londrina.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}