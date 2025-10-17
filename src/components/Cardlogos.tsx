import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
    image: string;
}

const Cardlogos: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <motion.div 
            className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"> {/* parent must be relative & sized */}

            

            { showOverlay && (
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
                    <h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75">
                        <span>Explore Now</span>
                    </h1>
                </div>
            )}
            <Image
                src={image}
                alt={image}
                fill
                style={{ objectFit: "cover" }}  // ✅ fixed syntax
                className="opacity-80 hover:opacity-100 transition"
            />
        </motion.div>
    );
};

export default Cardlogos;