import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import LogoMarquee from "@/components/LogoMarquee";
import { getLogos } from "@/lib/getLogos";

export default function Home() {

  const logos = getLogos(); // runs on the server at build time

  return (
    <>
      <Hero />
      <Projects />
      <LogoMarquee logos={logos}/>
      <Contact />
    </>
  );
}
