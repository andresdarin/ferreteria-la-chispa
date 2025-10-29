import Image from "next/image";

export const MetavilaStovesSection: React.FC = () => {
    return (
        <section className="bg-[#f8efe6] py-16 shadow-xl/30 mx-auto my-16">
            <div className="max-w-6xl mx-auto px-6 text-[#171611] text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex justify-center items-center gap-2">
                    Estufas <span className="text-[#c44b1a] font-black">Metavila</span>
                </h2>

                <p className="max-w-2xl mx-auto text-lg text-[#444] leading-relaxed mb-8">
                    Metavila es sinónimo de <strong>calidad uruguaya</strong> en calefacción.
                    Diseñadas para ofrecer <strong>eficiencia, durabilidad</strong> y un estilo
                    estético que combina con cualquier ambiente. Fabricadas en hierro de alta
                    densidad, preparadas para chips o troncos.
                </p>

                <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                    <Image
                        src="/img/banner-hero.webp"
                        alt="Estufa Metavila"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p className="text-sm text-[#666] mt-6">
                    Confort, diseño y rendimiento — elegí <strong>Metavila</strong>, la estufa que calienta hogares uruguayos desde hace años.
                </p>
            </div>
        </section>
    );
};
