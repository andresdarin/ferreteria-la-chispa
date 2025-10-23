import React, { JSX, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CTA = {
    label: string
    href: string
    target?: '_self' | '_blank'
}

type HeroProps = {
    title?: ReactNode
    subtitle?: ReactNode
    heightClass?: string
    overlayOpacity?: number
    cta?: CTA | null
    outlineTitle?: boolean
    outlineSubtitle?: boolean
    imgAlt?: string
}

export default function Hero({
    title = (
        <>
            Tu proyecto <br />
            empieza acá
        </>
    ),
    subtitle = <>Equipate con lo mejor</>,
    heightClass = 'h-56 md:h-96 lg:h-[32rem]',
    overlayOpacity = 0.6,
    cta = null,
    outlineTitle = false,
    outlineSubtitle = false,
    imgAlt = '',
}: HeroProps): JSX.Element {
    const overlayStyle = { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }

    return (
        <section
            role="region"
            aria-label="Hero"
            className={`relative ${heightClass} w-full pt-16 md:pt-20`}
        >
            {/* Background */}
            <Image
                src="/img/bg-hero.png"
                alt={imgAlt}
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0" style={overlayStyle} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-white">
                    <h1
                        className={`font-extrabold leading-tight tracking-tight text-[clamp(1.6rem,6vw,2.5rem)] md:text-[clamp(2.4rem,6.5vw,4.5rem)]`}
                    >
                        <span className={outlineTitle ? 'text-outline' : ''}>{title}</span>
                    </h1>

                    <p
                        className={`mt-3 font-semibold text-[clamp(1rem,3.5vw,1.5rem)] md:text-[clamp(1.25rem,3.5vw,2rem)]`}
                    >
                        <span className={outlineSubtitle ? 'text-outline' : ''}>{subtitle}</span>
                    </p>

                    {cta && (
                        <div className="mt-6">
                            <Link
                                href={cta.href}
                                target={cta.target}
                                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-md shadow-md"
                            >
                                {cta.label}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}