"use client";

import Cardlogos from "@/components/Cardlogos"
import { animate, motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

export default function LogoMarquee() {
  const logos = [
    { image: "/logos/c-sharp-16-svgrepo-com.svg", name: "C#" },
    { image: "/logos/code-svgrepo-com.svg", name: "VS Code" },
    { image: "/logos/github-svgrepo-com.svg", name: "GitHub" },
    { image: "/logos/go-16-svgrepo-com.svg", name: "Go" },
    { image: "/logos/javascript-155-svgrepo-com.svg", name: "JavaScript" },
    { image: "/logos/nodejs02-svgrepo-com.svg", name: "Node.js" },
    { image: "/logos/python-127-svgrepo-com.svg", name: "Python" },
    
    { image: "/logos/c-sharp-16-svgrepo-com.svg", name: "C#" },
    { image: "/logos/code-svgrepo-com.svg", name: "VS Code" },
    { image: "/logos/github-svgrepo-com.svg", name: "GitHub" },
    { image: "/logos/go-16-svgrepo-com.svg", name: "Go" },
    { image: "/logos/javascript-155-svgrepo-com.svg", name: "JavaScript" },
    { image: "/logos/nodejs02-svgrepo-com.svg", name: "Node.js" },
    { image: "/logos/python-127-svgrepo-com.svg", name: "Python" },
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

  return <main className="py-2 overflow-hidden bg-white">
    <motion.div 
      className="left-0 flex gap-4 " 
    
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
      {[...logos, ...logos].map((logo, idx) => (
        <Cardlogos image={logo.image} name={logo.name} key={idx} />
      ))}
    </motion.div>
  </main>
}