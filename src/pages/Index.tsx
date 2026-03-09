import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Instagram from "@/components/Instagram";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Events />
      <Team />
      <Instagram />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
