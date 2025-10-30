import React from "react";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

type Props = {
    phone?: string;        // ejemplo: "+54 9 11 2345-6789"
    whatsapp?: string;     // ejemplo: "5491123456789" (sin + ni espacios)
    address?: string;
    hours?: string;
    promo?: string;
};

export default function ContactSidebar({
    phone = "2622 7082",
    whatsapp = "5491123456789",
    address = "Av.Gral Rivera 3102, 11300 Montevideo",
    hours = "Lunes a Viernes 8:00 a 18:30hs. Sábados de 8:00 a 13:30hs",
    promo,
}: Props) {
    const telHref = `tel:${phone.replace(/\s+/g, "")}`;
    const waHref = `https://wa.me/${whatsapp}`;

    return (
        <aside
            className="w-full max-w-xs rounded-lg p-4 flex flex-col gap-4"
            aria-labelledby="contact-sidebar-title"
        >
            <h2 id="contact-sidebar-title" className="text-lg font-semibold text-gray-800">
                Información de contacto
            </h2>

            <div className="flex flex-row gap-2 items-center">
                <h3 className="text-sm font-medium text-gray-700"><FaPhoneVolume /></h3>
                <a
                    href={telHref}
                    className="text-sm text-blue-600 hover:underline"
                    aria-label="Llamar a la ferretería"
                >
                    {phone}
                </a>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <h3 className="text-sm font-medium text-gray-700"><FaWhatsapp /></h3>
                <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                    aria-label="Escribir por WhatsApp"
                >
                    Enviar mensaje
                </a>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-gray-700">Horario de atención</h3>
                <p className="text-sm text-gray-600">{hours}</p>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-gray-700">Dirección</h3>
                <p className="text-sm text-gray-600">{address}</p>
            </div>

            {promo ? (
                <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-orange-50 border border-orange-100 p-2">
                    <span className="inline-block rounded-full bg-orange-500 text-white text-xs px-2 py-0.5 font-semibold">
                        Promo
                    </span>
                    <p className="text-sm text-orange-700">{promo}</p>
                </div>
            ) : null}

            <p className="mt-2 text-xs text-gray-500">
                Seguinos en Instagram para más promos y novedades.
            </p>
        </aside>
    );
}