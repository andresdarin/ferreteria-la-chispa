import React from "react";
import Image from "next/image";

interface Category {
    title: string;
    description: string;
    image: string;
}

export const PaintshopCategories: React.FC = () => {
    const categories: Category[] = [
        {
            title: "Pinturas para Interior",
            description: "Colores vibrantes y acabados perfectos para tus ambientes.",
            image: "/images/categories/pintura-interior.jpg",
        },
        {
            title: "Pinturas para Exterior",
            description: "Protección y estilo frente a la intemperie.",
            image: "/images/categories/pintura-exterior.jpg",
        },
        {
            title: "Accesorios y Rodillos",
            description: "Todo lo que necesitás para aplicar con precisión.",
            image: "/images/categories/accesorios-pintura.jpg",
        },
        {
            title: "Línea Automotriz",
            description: "Esmaltes, primers y acabados para vehículos.",
            image: "/images/categories/pintura-auto.jpg",
        },
        {
            title: "Selladores y Barnices",
            description: "Protegé y realzá la belleza natural de la madera.",
            image: "/images/categories/barnices.jpg",
        },
        {
            title: "Nuevas Tendencias",
            description: "Paletas de temporada y combinaciones exclusivas.",
            image: "/images/categories/paletas-tendencia.jpg",
        },
    ];

    return (
        <section className="bg-[#f5f5f5] py-16 rounded-b-4xl">
            <div className="max-w-7xl mx-auto px-6">
                <header className="flex items-center gap-4 mb-4 bg-[#171611] rounded-full px-4 py-2 text-[#E5E7EB]">
                    <div aria-hidden className="w-12 h-12 flex items-center justify-center">
                        <Image
                            src="/img/chispa.ico"
                            alt="Logo La Chispa "
                            width={48}
                            height={48}
                        />
                    </div>

                    <div>
                        <h2 className="text-[3rem] text-[#F1DE6E] relative pt-0 uppercase font-light">Sectores de Pinturería</h2>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="relative group rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                width={500}
                                height={320}
                                className="object-cover w-full h-56 brightness-90 group-hover:brightness-70 transition-all"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 p-5 text-white">
                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                <p className="text-sm text-gray-200">{cat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
