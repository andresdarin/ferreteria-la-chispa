import { Achievements } from '@/components/achievements/Achievements'
import ContactForm from '@/components/contact/ContactForm'
import { Footer } from '@/components/footer/Footer'
import { HardwareCategories } from '@/components/hardware/Hardware'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import { PaintshopCategories } from '@/components/paintshop/PaintShop'
import { MetavilaStovesSection } from '@/components/stoves/StovesShop'
import { JSX } from 'react'

export default function Page(): JSX.Element {
  return (
    <main>
      <Header />
      <div className="bg-[#171611]">
        <Hero />
      </div>
      <div className="bg-[#f5f5f5]">
        <Achievements />
      </div>
      <PaintshopCategories />
      <HardwareCategories />
      <MetavilaStovesSection />
      <div className='bg-[#171611]'>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}