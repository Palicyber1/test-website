import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Stats />
      <Services />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
