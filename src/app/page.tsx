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
    </main>
  )
}