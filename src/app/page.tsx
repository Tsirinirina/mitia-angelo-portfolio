import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Journey from "@/components/sections/journey";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
