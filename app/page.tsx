import Hero from "./components/hero/hero";
import Stats from "./components/sections/stats";
import Marquee from "./components/sections/marquee";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Education from "./components/sections/education";
import Testimonials from "./components/sections/testimonials";
import Blog from "./components/sections/blog";
import Contact from "./components/sections/contact";
import Footer from "./components/footer";

import FloatingSocials from "./components/floating-socials";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth relative bg-black" style={{ scrollbarGutter: 'stable' }}>
      <ScrollProgress />
      <FloatingSocials />
      <Hero />
      <Stats />
     
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
