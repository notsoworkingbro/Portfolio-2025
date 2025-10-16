"use client";

import { useRef, useState } from "react";
import LogoItem from "./LogoItem";

interface LogoMarqueeProps {
  logos: string[];
}

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const gap = 100;  // spacing between logos
  const speed = 3; // px per second

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gray-900 py-8 flex items-center justify-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {logos.map((logo, i) => (
        <LogoItem
          key={i}
          src={logo}
          index={i}
          gap={gap}
          speed={speed}
          isHovered={isHovered}
          containerRef={containerRef}
        />
      ))}

      {/* Edge gradients for fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
}
