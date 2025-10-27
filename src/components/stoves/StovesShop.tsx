import { PromoCard } from "./../ui/PromoCard";

export const IronStovesSection: React.FC = () => {
    const stoves = [
        {
            title: "Estufa de hierro cuadrada",
            description: "Ideal para chips de madera, con puerta de vidrio aesthetic.",
            date: "Disponible todo octubre",
            image: "/images/iron-stove-chips.jpg",
        },
        {
            title: "Mini estufa de troncos",
            description: "Calor natural y estilo rústico, perfecta para ambientes pequeños.",
            date: "Oferta hasta el 15 de noviembre",
            image: "/images/iron-stove-logs.jpg",
        },
        {
            title: "Estufa retro con puerta",
            description: "Diseño clásico de hierro fundido, combina con cualquier interior.",
            date: "Hasta agotar stock",
            image: "/images/iron-stove-retro.jpg",
        },
    ];

    return (
        <section className="bg-[#fff4e1] py-12 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#171611]">
                    🔥 Estufas de Hierro Aesthetic
                </h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {stoves.map((stove, i) => (
                        <PromoCard key={i} {...stove} />
                    ))}
                </div>
            </div>
        </section>
    );
};
