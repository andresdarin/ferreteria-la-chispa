import ContactForm from '@/components/contact/ContactForm'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import { JSX } from 'react'

export default function Page(): JSX.Element {
  return (
    <main>
      <Header />
      <Hero />
      <ContactForm />
      <section className="max-w-4xl mx-auto p-6 ">
        <h2 className="text-2xl font-semibold mb-4">Secciones</h2>
        <p className="text-gray-700">Resto del contenido de la landing...</p>
      </section>
    </main>
  )
}