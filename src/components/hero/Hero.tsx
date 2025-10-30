'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

type CTA = {
    label: string;
    href: string;
    target?: "_self" | "_blank";
};

interface HeroProps {
    title?: string;
    highlight?: string;
    subtitle?: string;
    subHighlight?: string;
    cta?: CTA | null;
    imgAlt?: string;
    imgSrc?: string;
    heightClass?: string;
}

export default function Hero({
    title = "TU PROYECTO EMPIEZA",
    highlight = "ACÁ.",
    subtitle = "EQUIPATE CON LO",
    subHighlight = "MEJOR",
    cta = { label: "Descubrilo!", href: "#ferretería" },
    imgAlt = "Taladro profesional - La Chispa",
    imgSrc = "/img/bg-hero.png",
    heightClass = "h-[78vh] md:h-[88vh]",
}: HeroProps) {
    return (
        <section
            role="region"
            aria-label="Hero principal"
            className={`relative w-full overflow-hidden rounded-b-4xl md:rounded-b-[3rem] ${heightClass}`}
        >
            {/* Imagen de fondo */}
            <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                priority
                className="object-cover"
            />

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

            {/* Contenido */}
            <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="w-full lg:w-8/12 xl:w-7/12 text-white">
                    <h1
                        className="font-extrabold uppercase leading-[0.85] md:leading-[0.9] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                        style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
                    >
                        <span className="block">{title}</span>
                        <span className="text-stroke-yellow animate-glow">{` ${highlight}`}</span>
                        <br />
                        <span className="block mt-2 md:mt-3">{subtitle}</span>{" "}
                        <span className="text-stroke-yellow animate-glow">{subHighlight}</span>
                    </h1>

                    {cta && (
                        <Link
                            href={cta.href}
                            target={cta.target}
                            className="group inline-flex items-center gap-2 mt-6 md:mt-8 bg-[#F1DE6E] text-[#171611] font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wide"
                        >
                            {cta.label}
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    )}

                    {/* Indicador de scroll */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 flex flex-col items-center gap-2 text-white/60 animate-bounce-slow">
                        <span className="text-xs uppercase tracking-widest hidden sm:block">Scroll</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes glow {
                    0%, 100% {
                        filter: drop-shadow(0 0 10px rgba(241, 222, 110, 0.5));
                    }
                    50% {
                        filter: drop-shadow(0 0 20px rgba(241, 222, 110, 0.8));
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .text-stroke-yellow {
                    -webkit-text-stroke: 2px #F1DE6E;
                    color: transparent;
                    text-shadow: 0 0 30px rgba(241, 222, 110, 0.3);
                }

                @media (max-width: 768px) {
                    .text-stroke-yellow {
                        -webkit-text-stroke: 1.5px #F1DE6E;
                    }
                }
            `}</style>
        </section>
    );
}