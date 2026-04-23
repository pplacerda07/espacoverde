import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Events from "@/components/Events";
import Rules from "@/components/Rules";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Pricing />
      <Events />
      <Rules />
      <Contact />
    </main>
  );
}
