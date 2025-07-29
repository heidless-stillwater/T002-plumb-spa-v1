import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    title: "Homeowner",
    quote: "FlowPro was a lifesaver! They arrived on time, diagnosed the issue quickly, and fixed our leaking pipe with such professionalism. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    avatar: "MJ",
    title: "Restaurant Owner",
    quote: "We had a major plumbing emergency at our restaurant. FlowPro responded immediately, even after hours, and got our kitchen back up and running. Incredibly reliable service.",
  },
  {
    name: "David Chen",
    avatar: "DC",
    title: "Property Manager",
    quote: "I manage multiple properties and FlowPro is my go-to for all plumbing needs. They are consistently professional, fairly priced, and do excellent work. A true partner.",
  },
  {
      name: "Emily White",
      avatar: "EW",
      title: "Homeowner",
      quote: "The team installed a new water heater for us. The process was smooth, clean, and they took the time to explain everything. We're very happy with the result.",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="w-fit mb-2">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our TEST Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            We're proud of our work and our clients TEST agree.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex flex-col items-center gap-2 mb-4">
                        <Avatar>
                          <AvatarImage src={`https://placehold.co/40x40?text=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
