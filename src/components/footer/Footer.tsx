import Brand from "./Brand";
import { Copy } from "./Copy";
import { Locations } from "./Locations";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    return (
        <footer className="bg-[#171611] text-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* --- sección principal --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    {/* Marca */}
                    <div className="flex justify-center md:justify-start">
                        <Brand />
                    </div>

                    {/* Ubicaciones */}
                    <div className="order-3 md:order-0">
                        <Locations />
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center md:justify-end">
                        <SocialIcons />
                    </div>
                </div>

                {/* --- divisor --- */}
                <hr className="border-gray-700 my-8" />

                {/* --- copy --- */}
                <div className="text-center text-sm text-gray-400">
                    <Copy />
                </div>
            </div>
        </footer>
    );
};
