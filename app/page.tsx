import Hero from "./components/hero/hero";
import GridScanBackground from "./components/gridscan-background";
import About from "./components/sections/about";
import Stats from "./components/sections/stats";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Education from "./components/sections/education";
import Testimonials from "./components/sections/testimonials";
import Blog from "./components/sections/blog";
import Contact from "./components/sections/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    
    <main className="w-full min-h-screen overflow-y-auto scroll-smooth relative" style={{ scrollbarGutter: 'stable' }}>
      <GridScanBackground
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#392e4e"
        gridScale={0.1}
        scanColor="#FF9FFC"
        scanOpacity={0.4}
        enablePost={true}
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
      <Hero />
      <Stats />
      <About />
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
