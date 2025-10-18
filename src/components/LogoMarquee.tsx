"use client";

import Cardlogos from "@/components/Cardlogos"
import { animate, motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

export default function LogoMarquee() {
  const images = [
    "/logos/c-sharp-16-svgrepo-com.svg",
    "/logos/code-svgrepo-com.svg",
    "/logos/github-svgrepo-com.svg",
    "/logos/go-16-svgrepo-com.svg",
    "/logos/javascript-155-svgrepo-com.svg",
    "/logos/nodejs02-svgrepo-com.svg",
    "/logos/python-127-svgrepo-com.svg",
  ];

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION)

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender]     = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * ( 1 - xTranslation.get()/ finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender]);

  return <main className="py-8">
    <motion.div 
      className="absolute left-0 flex gap-4" 
    
      ref={ref}
      style = {{ x:xTranslation }}
      onHoverStart = {() => { 
        setMustFinish(true);
        setDuration(SLOW_DURATION)
      }}
      onHoverEnd   = {() => {
        setMustFinish(true);
        setDuration(FAST_DURATION)}}
      >
      {[...images, ...images].map((item, idx) => (
        <Cardlogos image={item} key={idx}/>
      ))}
    </motion.div>
  </main>
}