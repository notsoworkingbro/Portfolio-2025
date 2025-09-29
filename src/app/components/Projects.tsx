"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Finance Tracker",
      img: "/projects/finance.png",
      description: "A full-stack finance tracker built with Next.js and Node.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      img: "/projects/portfolio.png",
      description: "Personal portfolio built with Next.js, Tailwind, and shadcn/ui.",
    },
    {
      id: 3,
      title: "CRUD App",
      img: "/projects/crud.png",
      description: "CRUD operations with Quasar + Axios + RESTful APIs.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-4xl mx-auto">
        <Carousel>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="flex flex-col items-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mt-2">
                  {project.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
