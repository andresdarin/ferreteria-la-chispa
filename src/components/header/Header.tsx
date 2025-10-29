'use client'

import { JSX, useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/types/navLinks'
import Image from 'next/image'

export default function Header(): JSX.Element {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[95%] sm:w-[90%] lg:w-[85%] max-w-6xl rounded-2xl sm:rounded-full transition-all duration-500 ease-out ${scrolled
                ? 'bg-[#171611]/90 backdrop-blur-xl shadow-2xl scale-[0.98]'
                : 'bg-[#171611]/70 backdrop-blur-md shadow-lg'
                }`}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
                    {/* Logo with animation */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group relative"
                    >
                        <div className="relative">
                            <Image
                                src="/img/la-chispa-vector.png"
                                alt="Ferretería La Chispa"
                                width={48}
                                height={48}
                                className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </Link>

                    {/* Desktop nav with enhanced animations */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {NAV_LINKS.map((link, idx) =>
                            link.cta ? (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative bg-white text-[#171611] px-4 lg:px-5 py-2 rounded-full font-medium text-sm lg:text-base overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                        animation: 'fadeInDown 0.6s ease-out forwards'
                                    }}
                                >
                                    <span className="relative z-10 uppercase tracking-wide">{link.label}</span>
                                    <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-orange-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </Link>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative text-white/80 hover:text-white px-3 lg:px-4 py-2 rounded-full transition-all duration-300 group text-sm lg:text-base uppercase tracking-wide font-light"
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                        animation: 'fadeInDown 0.6s ease-out forwards'
                                    }}
                                >
                                    {link.label}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Enhanced mobile burger */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <div className="w-5 h-5 flex flex-col items-center justify-center">
                                <span
                                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'
                                        }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                        }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'
                                        }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced mobile menu */}
            <div
                className={`absolute top-full left-0 w-full mt-2 overflow-hidden transition-all duration-500 ease-out ${open ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                    } md:hidden`}
            >
                <div className="mx-2 px-4 py-5 flex flex-col gap-3 bg-[#171611]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
                    {NAV_LINKS.map((link, idx) =>
                        link.cta ? (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="relative bg-linear-to-r from-white to-gray-100 text-[#171611] text-center px-4 py-3 rounded-xl font-semibold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 overflow-hidden group"
                                style={{
                                    animationDelay: `${idx * 50}ms`,
                                    animation: open ? 'slideInRight 0.4s ease-out forwards' : 'none'
                                }}
                            >
                                <span className="relative z-10">{link.label}</span>
                                <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-orange-300 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </Link>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-white/90 text-center px-4 py-2.5 rounded-xl font-light uppercase tracking-wide hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95"
                                style={{
                                    animationDelay: `${idx * 50}ms`,
                                    animation: open ? 'slideInRight 0.4s ease-out forwards' : 'none'
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    )
}