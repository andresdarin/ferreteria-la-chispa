'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/types/navLinks'
import Image from 'next/image'

export default function Header(): JSX.Element {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full absolute top-0 left-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Image src="/img/chispa.ico" alt="Ferretería Faustino" width={50} height={50} />

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) =>
                            link.cta ? (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="ml-2 inline-block bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 rounded-md text-sm"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <Link key={link.href} href={link.href} className="text-white/90 hover:text-white">
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Mobile burger */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg className={`h-6 w-6 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${open ? 'block' : 'hidden'} md:hidden pt-2`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 bg-black/30 backdrop-blur-sm">
                    {NAV_LINKS.map((link) =>
                        link.cta ? (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-block bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-md text-center"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-white">
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </header>
    )
}