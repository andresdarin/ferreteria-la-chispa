import './globals.css'
import { ReactNode } from 'react'
import { Londrina_Outline } from 'next/font/google';

export const metadata = {
  title: 'Ferretería Faustino',
  description: 'Landing',
}

const Londrina = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${Londrina.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}