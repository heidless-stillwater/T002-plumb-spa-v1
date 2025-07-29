import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Plumbing work in a modern kitchen"
        data-ai-hint="plumbing kitchen"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container relative z-20 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Expert Plumbing, Unbeatable Service.
        </h1>
        <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
          Your trusted partner for all residential and commercial plumbing needs. Fast, reliable, and professional solutions are just a call away.
        </p>
        <div className="flex gap-4">
           <a href="#contact">
            <Button size="lg">Request Service</Button>
          </a>
           <a href="#services">
            <Button size="lg" variant="secondary">
              Our Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
