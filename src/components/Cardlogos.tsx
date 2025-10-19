
import Image from "next/image";

interface CardProps {
    image: string;
    name: string;
}

const Cardlogos: React.FC<CardProps> = ({ image, name }) => {

    return (
        <div 
            className="relative flex items-center gap-3 px-10 py-3 rounded-xl bg-transparent"
            
            
            > 
            <Image
                src={image}
                alt={name}
                width={32} // small icon size
                height={32}
                className="object-contain"
            />
            <span className="text-black text-sm font-medium">{name}</span>
        </div>
    );
};

export default Cardlogos;