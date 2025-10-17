import React, { useState } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

interface CardProps {
    image: string;
}

const Cardlogos: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"> {/* parent must be relative & sized */}

            { showOverlay && (
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
                </div>
            )}
            <Image
                src={image}
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}  // ✅ fixed syntax
                className="opacity-80 hover:opacity-100 transition"
            />
        </div>
    );
};

export default Cardlogos;