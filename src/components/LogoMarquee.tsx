"use client";

import Cardlogos from "@/components/Cardlogos"

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

  return <main className="py-8">
    <div className="absolute left-0 flex gap-4">
      {[...images].map((item, idx) => (
        <Cardlogos image={item} key={idx}/>
      ))}
    </div>
  </main>
}