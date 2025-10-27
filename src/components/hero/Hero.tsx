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
    cta = { label: "Ver categorías", href: "#categorias" },
    imgAlt = "Taladro profesional - La Chispa",
    imgSrc = "/img/bg-hero.png",
    heightClass = "h-[78vh] md:h-[88vh]",
}: HeroProps) {
    return (
        <section
            role="region"
            aria-label="Hero principal"
            className={`relative w-full overflow-hidden rounded-b-4xl ${heightClass}`}
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Contenido */}
            <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="w-full lg:w-7/12 text-white">
                    <h1
                        className="font-extrabold uppercase leading-[0.9] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                        style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.5rem)" }}
                    >
                        <span className="block">{title}</span>
                        <span className="text-stroke-yellow">{` ${highlight}`}</span>
                        <br />
                        <span className="block mt-3">{subtitle}</span>{" "}
                        <span className="text-stroke-yellow">{subHighlight}</span>
                    </h1>

                    {cta && (
                        <Link
                            href={cta.href}
                            target={cta.target}
                            className="inline-flex items-center gap-3 mt-8 bg-[#F1DE6E] text-[#171611] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            {cta.label}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
