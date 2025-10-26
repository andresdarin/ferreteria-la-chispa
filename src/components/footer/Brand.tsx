import Image from "next/image";

export const Brand = () => {
    return (
        <div className="flex items-center">
            <Image src="/img/la-chispa-vector.png" alt="Ferretería La Chispa" width={120} height={120} />
        </div>
    );
};
export default Brand;