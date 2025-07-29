import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-accent text-accent-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready for a FlowPro Fix?
        </h2>
        <p className="mx-auto max-w-[600px] mt-4 mb-8">
          Don't let plumbing problems disrupt your day. Contact us now for a free, no-obligation estimate and experience the FlowPro difference.
        </p>
        <a href="#contact">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get Your Free Estimate
            </Button>
        </a>
      </div>
    </section>
  );
}
