import AboutSection from "@/components/sections/about";
import AiProTipsSection from "@/components/sections/ai-pro-tips";
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
      <AiProTipsSection />
      <CtaSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
