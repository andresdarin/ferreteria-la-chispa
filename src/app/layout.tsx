import './globals.css'
import Header from '@/components/header/Header'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Ferretería Faustino',
  description: 'Landing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}