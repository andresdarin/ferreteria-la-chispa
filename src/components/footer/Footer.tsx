import Brand from "./Brand";
import { Copy } from "./Copy";
import { Locations } from "./Locations";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    return (
        <footer className="bg-[#171611] text-white py-10 mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    <Brand />
                    <Locations />
                    <div className="flex justify-center md:justify-end">
                        <SocialIcons />
                    </div>
                </div>

                <hr className="border-gray-700 my-6" />

                <Copy />
            </div>
        </footer>
    );
};
