"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos: string[] = [
  "/logos/react.svg",
  "/logos/nextjs.svg",
  "/logos/tailwind.svg",
  "/logos/nodejs.svg",
  "/logos/mongodb.svg",
  "/logos/firebase.svg",
  "/logos/git.svg",
  "/logos/github.svg",
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-8">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate the logos to create a seamless infinite loop */}
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={i}
            src={logo}
            alt={`Logo ${i + 1}`}
            width={80}
            height={80}
            className="opacity-80 hover:opacity-100 transition"
          />
        ))}
      </motion.div>

      {/* Optional gradient fades for edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LogoMarquee;
