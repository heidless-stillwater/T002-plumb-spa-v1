import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Professional plumber"
                data-ai-hint="plumber portrait"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline text-primary">
                  Your Trusted Local Plumber
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  With over 15 years of hands-on experience in the plumbing industry, FlowPro Plumbing was founded on the principles of honesty, integrity, and unparalleled craftsmanship. I am a certified master plumber dedicated to providing top-quality solutions that last.
                </p>
                <p>
                  From leaky faucets to complex commercial installations, I approach every job with the same commitment to excellence. My goal is to not only fix your plumbing issues but also to build lasting relationships with my clients through reliable service and transparent communication.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
