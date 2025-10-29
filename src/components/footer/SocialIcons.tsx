import { FaFacebookF, FaInstagram, FaThreads } from "react-icons/fa6"

export const SocialIcons = () => {
    return (
        <div className="flex space-x-4 items-center justify-center mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
                <FaThreads />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
            </a>
        </div>
    )
}
