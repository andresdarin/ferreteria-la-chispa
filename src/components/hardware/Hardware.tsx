import React from "react";
import Image from "next/image";

interface Category {
    title: string;
    description: string;
    image: string;
}

export const HardwareCategories: React.FC = () => {
    const categories: Category[] = [
        {
            title: "Ferretería",
            description: "Más de 1.200 herramientas para profesionales y hogar.",
            image: "/img/HardwareShop/tools.jpg",
        },
        {
            title: "Sanitaria",
            description: "Cañerías, grifería y accesorios con la mejor calidad.",
            image: "/img/HardwareShop/sanitary.jpg",
        },
        {
            title: "Electricidad",
            description: "Cables, lámparas y todo para tus instalaciones seguras.",
            image: "/img/HardwareShop/electricity.jpg",
        },
        {
            title: "Pinturería",
            description: "Amplia gama de pinturas y esmaltes para cada proyecto.",
            image: "/img/HardwareShop/paints.jpg",
        },
        {
            title: "Construcción",
            description: "Materiales resistentes para obras grandes y pequeñas.",
            image: "/img/HardwareShop/construction.jpg",
        },
        {
            title: "Calefacción",
            description: "Estufas, salamandras y accesorios para el invierno.",
            image: "/img/HardwareShop/stove.jpg",
        },
    ];

    return (
        <section className="bg-[#f5f5f5] py-8 rounded-b-4xl" id="ferreteria">
            <div className="max-w-7xl mx-auto px-6">
                <header className="flex items-center gap-4 my-4 bg-[#171611] rounded-full px-4 py-2 text-[#f5f5f5]">
                    <div aria-hidden className="w-12 h-12 flex items-center justify-center">
                        <Image
                            src="/img/chispa.ico"
                            alt="Logo La Chispa "
                            width={48}
                            height={48}
                        />
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-3xl lg:text-[2rem] text-[#f5f5f5] uppercase font-light leading-tight">Sectores y Especialidades</h2>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6 py-8 grid-flow-dense">
                    {categories.map((cat, i) => {
                        // Controla qué tarjetas se expanden
                        const large = i % 4 === 0 ? "lg:col-span-2 lg:row-span-2" : "";
                        return (
                            <div
                                key={i}
                                className={`relative group rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform ${large}`}
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    width={500}
                                    height={320}
                                    className="object-cover w-full h-full brightness-75 group-hover:brightness-50 transition-all"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 p-5 text-white">
                                    <h3 className="text-xl font-bold">{cat.title}</h3>
                                    <p className="text-sm text-gray-300">{cat.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
