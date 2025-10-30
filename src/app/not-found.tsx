'use client'

import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react'

export default function NotFound(): JSX.Element {
    return (
        <main className="min-h-screen bg-[#171611] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Efecto de fondo con gradiente */}
            <div className="absolute inset-0 bg-linear-to-br from-[#171611] via-[#2a2820] to-[#171611] opacity-50" />

            {/* Contenido principal */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                {/* Logo */}
                <div className="mb-8 flex justify-center animate-bounce-slow">
                    <Image
                        src="/img/chispa.ico"
                        alt="Logo La Chispa"
                        width={80}
                        height={80}
                        className="drop-shadow-[0_0_20px_rgba(241,222,110,0.5)]"
                    />
                </div>

                {/* Número 404 con estilo stroke */}
                <h1
                    className="font-extrabold uppercase leading-none tracking-tight mb-4 text-stroke-yellow animate-glow"
                    style={{ fontSize: "clamp(4rem, 15vw, 10rem)" }}
                >
                    404
                </h1>

                {/* Título */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
                    ¡UPS! PÁGINA NO ENCONTRADA
                </h2>

                {/* Descripción */}
                <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto font-light">
                    Parece que esta página se perdió en el depósito.
                    <span className="block mt-2">No te preocupes, te ayudamos a volver al camino correcto.</span>
                </p>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 bg-[#F1DE6E] text-[#171611] font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                    >
                        Volver al inicio
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>

                    <Link
                        href="/#contacto"
                        className="group inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white font-medium text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase tracking-wide"
                    >
                        Contactanos
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>

                {/* Decoración adicional */}
                <div className="mt-12 text-white/40 text-sm uppercase tracking-widest">
                    <p>Código de error: 404</p>
                </div>
            </div>

            {/* Estilos personalizados */}
            <style jsx>{`
                @keyframes glow {
                    0%, 100% {
                        filter: drop-shadow(0 0 10px rgba(241, 222, 110, 0.5));
                    }
                    50% {
                        filter: drop-shadow(0 0 30px rgba(241, 222, 110, 0.8));
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .text-stroke-yellow {
                    -webkit-text-stroke: 3px #F1DE6E;
                    color: transparent;
                    text-shadow: 0 0 40px rgba(241, 222, 110, 0.4);
                }

                @media (max-width: 768px) {
                    .text-stroke-yellow {
                        -webkit-text-stroke: 2px #F1DE6E;
                    }
                }
            `}</style>
        </main>
    )
}