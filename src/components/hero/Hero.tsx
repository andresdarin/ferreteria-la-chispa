import React from "react";
import Image from "next/image";
import Link from "next/link";

type CTA = {
    label: string;
    href: string;
    target?: "_self" | "_blank";
};

type HeroProps = {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    cta?: CTA | null;
    imgAlt?: string;
    imgSrc?: string;
    heightClass?: string;
};

export default function Hero({
    title = (
        <>
            TU PROYECTO
            <br />
            EMPIEZA <span className="text-stroke-yellow">ACÁ.</span>
        </>
    ),
    subtitle = (
        <>
            EQUIPATE CON <span className="text-stroke-yellow">LO MEJOR</span>
        </>
    ),
    cta = { label: "Ver productos", href: "#categorias", target: "_self" },
    imgAlt = "Taladro profesional - La Chispa",
    imgSrc = "/img/bg-hero.png",
    heightClass = "h-[78vh] md:h-[88vh]",
}: HeroProps) {
    return (
        <section
            role="region"
            aria-label="Hero"
            className={`relative w-full overflow-hidden ${heightClass} pt-6`}
        >
            {/* Background image fills the section */}
            <div className="absolute inset-0">
                <Image src={imgSrc} alt={imgAlt} fill className="object-cover" priority />
            </div>

            {/* Dark overlay (stronger on left where text sits) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/15" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 h-full flex items-center">
                <div className="w-full lg:w-7/12">
                    {/* big heading left-aligned, heavy tracking and uppercase */}
                    <h1
                        className="text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)] font-extrabold uppercase leading-[0.90] tracking-tight"
                        style={{
                            fontSize: "clamp(2.6rem, 7.5vw, 5.5rem)",
                        }}
                    >
                        <span className="block">{/* Line 1 */}TU PROYECTO EMPIEZA</span><span className="text-stroke-yellow font-[--font-londrina]">ACÁ.</span>
                        <span className="block mt-3">EQUIPATE CON LO <span className="text-stroke-yellow font-[--font-londrina]">MEJOR</span></span>
                    </h1>

                    {/* CTA */}
                    {cta && (
                        <div className="mt-8">
                            <Link
                                href={cta.href}
                                target={cta.target}
                                className="inline-flex items-center gap-3 bg-[#F1DE6E] text-[#171611] font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition"
                            >
                                <span>{cta.label}</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}