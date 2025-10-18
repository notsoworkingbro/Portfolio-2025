import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
    image: string;
}

const Cardlogos: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div 
            className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"
            
            onHoverStart = {() => setShowOverlay(true)}
            onHoverEnd = {() => setShowOverlay(false)}
            
            > 

            { showOverlay && (
                <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit    = {{ opacity: 0 }}

                >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>

                    <motion.h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                    
                    initial = {{ opacity: 10 }}
                    animate = {{ opacity: 0  }}
                    exit    = {{ opacity: 10 }}

                    >
                        <span>Explore Now</span>
                    </motion.h1>
                </motion.div>
            )}
            <Image
                src={image}
                alt={image}
                fill
                style={{ objectFit: "cover" }}  
                
            />
        </motion.div>
    );
};

export default Cardlogos;