import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Footer />
    </main>
  );
}
