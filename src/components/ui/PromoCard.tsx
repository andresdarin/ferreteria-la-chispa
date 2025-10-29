"use client";

import Image from "next/image";

interface PromoCardProps {
    title: string;
    description: string;
    date: string;
    image: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({
    title,
    description,
    date,
    image,
}) => {
    return (
        <div
            className="bg-white text-[#171611] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all w-full sm:w-[300px]"
        >
            <Image src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between h-40">
                <div>
                    <h3 className="text-lg font-bold mb-1">{title}</h3>
                    <p className="text-sm text-gray-700">{description}</p>
                </div>
                <span className="text-xs text-gray-500 mt-2">{date}</span>
            </div>
        </div>
    );
};
