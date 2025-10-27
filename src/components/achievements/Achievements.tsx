import React from "react";
import { Wrench, PaintRoller, Building2, Flame } from "lucide-react";

interface Metric {
    icon: React.ReactNode;
    label: string;
    value: string;
}

export const Achievements: React.FC = () => {
    const metrics: Metric[] = [
        {
            icon: <Wrench className="w-6 h-6 text-yellow-500" />,
            label: "Herramientas y ferretería",
            value: "+1.200 productos",
        },
        {
            icon: <PaintRoller className="w-6 h-6 text-yellow-500" />,
            label: "Pinturas y accesorios",
            value: "+350 tonos y marcas",
        },
        {
            icon: <Building2 className="w-6 h-6 text-yellow-500" />,
            label: "Materiales de construcción",
            value: "+800 artículos",
        },
        {
            icon: <Flame className="w-6 h-6 text-yellow-500" />,
            label: "Estufas y calefacción",
            value: "+150 equipos vendidos",
        },
    ];

    return (
        <section className="bg-[#171611] text-white py-12 rounded-b-4xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 bg-[#1f1e19] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
                        >
                            {metric.icon}
                            <p className="text-lg font-semibold">{metric.value}</p>
                            <p className="text-sm text-gray-400">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
