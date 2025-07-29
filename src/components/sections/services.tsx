import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, ShowerHead, Plug, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: "General Repairs",
    description: "From leaky pipes to broken fixtures, we handle all types of plumbing repairs quickly and efficiently.",
  },
  {
    icon: <ShowerHead className="h-10 w-10 text-accent" />,
    title: "Installations",
    description: "Upgrading your home? We install new sinks, toilets, water heaters, and full piping systems.",
  },
  {
    icon: <Plug className="h-10 w-10 text-accent" />,
    title: "Drain Cleaning",
    description: "Our professional drain cleaning services will clear any clog and keep your pipes flowing smoothly.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Preventative Maintenance",
    description: "Avoid future disasters with our comprehensive maintenance checks and preventative care plans.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Plumbing Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            We offer a comprehensive range of services to meet all your plumbing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
