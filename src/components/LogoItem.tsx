"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

export interface LogoItemProps {
  src: string;
  index: number;
  gap: number;
  speed: number;
  isHovered: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const LogoItem: React.FC<LogoItemProps> = ({
  src,
  index,
  gap,
  speed,
  isHovered,
  containerRef,
}) => {
  const x = useMotionValue(0);
  const [logoWidth, setLogoWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // ✅ Add small random offset per logo to desync them slightly
  const randomOffset = Math.random() * 200;

  // Measure each logo width once mounted
  useEffect(() => {
    if (ref.current) setLogoWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const newX = x.get() - speed;

      // ✅ Only this logo resets itself
      if (newX < -logoWidth - gap) {
        x.set(containerWidth + randomOffset);
      } else {
        x.set(newX);
      }

      if (!isHovered) animationFrame = requestAnimationFrame(animate);
    };

    if (!isHovered) animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [x, speed, logoWidth, gap, isHovered, containerRef, randomOffset]);

  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        x,
        left: `${index * (logoWidth + gap)}px`,
      }}
    >
      <Image
        src={src}
        alt={`Logo ${index + 1}`}
        width={80}
        height={80}
        className="opacity-80 hover:opacity-100 transition"
      />
    </motion.div>
  );
};

export default LogoItem;
