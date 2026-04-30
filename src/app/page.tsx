import Hero from "@/components/Hero";
import Products from "@/components/Products";
import TechSection from "@/components/TechSection";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <TechSection />
      <News />
      <Footer />
    </main>
  );
}
