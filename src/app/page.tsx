import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import CtaSection from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
