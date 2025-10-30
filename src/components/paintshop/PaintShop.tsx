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
            image: "/img/PaintShop/interior.jpg",
        },
        {
            title: "Pinturas para Exterior",
            description: "Protección y estilo frente a la intemperie.",
            image: "/img/PaintShop/exterior.jpg",
        },
        {
            title: "Accesorios y Rodillos",
            description: "Todo lo que necesitás para aplicar con precisión.",
            image: "/img/PaintShop/rodillo.jpg",
        },
        {
            title: "Línea de Aerosoles",
            description: "Pinturas, lubricantes y productos especiales en aerosol para múltiples usos.",
            image: "/img/PaintShop/spray.jpg",

        },
        {
            title: "Selladores y Barnices",
            description: "Protegé y realzá la belleza natural de la madera.",
            image: "/img/PaintShop/barniz.jpg",
        },
        {
            title: "Nuevas Tendencias",
            description: "Paletas de temporada y combinaciones exclusivas.",
            image: "/img/PaintShop/trendy.jpg",
        },
    ];

    return (
        <section className="py-16 rounded-b-4xl" id="pintureria">
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
                        <h2 className="text-xl sm:text-3xl lg:text-[2rem] text-[#f5f5f5] uppercase font-light leading-tight">Sectores de Pinturería</h2>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-6 py-8 grid-flow-dense">
                    {categories.map((cat, i) => {
                        // define qué ítems se expanden
                        const isLarge = i % 4 === 0 || i % 7 === 0;
                        const span = isLarge ? "lg:col-span-2 lg:row-span-2" : "";

                        return (
                            <div
                                key={i}
                                className={`relative group rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform ${span}`}
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover w-full h-full brightness-75 group-hover:brightness-50 transition-all"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 p-5 text-white">
                                    <h3 className="text-xl font-bold">{cat.title}</h3>
                                    <p className="text-sm text-gray-200">{cat.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
