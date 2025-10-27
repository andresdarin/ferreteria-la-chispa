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
            image: "/images/categories/ferreteria.jpg",
        },
        {
            title: "Sanitaria",
            description: "Cañerías, grifería y accesorios con la mejor calidad.",
            image: "/images/categories/sanitaria.jpg",
        },
        {
            title: "Electricidad",
            description: "Cables, lámparas y todo para tus instalaciones seguras.",
            image: "/images/categories/electricidad.jpg",
        },
        {
            title: "Pinturería",
            description: "Amplia gama de pinturas y esmaltes para cada proyecto.",
            image: "/images/categories/pintureria.jpg",
        },
        {
            title: "Construcción",
            description: "Materiales resistentes para obras grandes y pequeñas.",
            image: "/images/categories/construccion.jpg",
        },
        {
            title: "Calefacción",
            description: "Estufas, salamandras y accesorios para el invierno.",
            image: "/images/categories/estufas.jpg",
        },
    ];

    return (
        <section className=" py-16">
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
                        <h2 className="text-[3rem] text-[#F1DE6E] relative pt-0 uppercase font-light">Sectores y Especialidades</h2>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                width={500}
                                height={320}
                                className="object-cover w-full h-56 brightness-75 group-hover:brightness-50 transition-all"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 p-5 text-white">
                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                <p className="text-sm text-gray-300">{cat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
