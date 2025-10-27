import { PromoCard } from "./../ui/PromoCard";

export const PaintshopSection: React.FC = () => {
    const promos = [
        {
            title: "3x2 en pinturas para interior",
            description: "Llevá tres, pagá dos. ¡Renová tus ambientes!",
            date: "Del 20 al 30 de octubre",
            image: "/images/interior-paint.jpg",
        },
        {
            title: "Nuevos colores primavera 2025",
            description: "Descubrí la paleta más fresca del año.",
            date: "Todo noviembre",
            image: "/images/spring-colors.jpg",
        },
    ];

    return (
        <section className="bg-white py-12 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#171611]">
                    🎨 Promociones de Pinturería
                </h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {promos.map((promo, i) => (
                        <PromoCard key={i} {...promo} />
                    ))}
                </div>
            </div>
        </section>
    );
};
