import site from "@/data/site.json";
import TestimonialsClient from "./TestimonailsClient";

export default function Testimonials() {
  const testimonials = site.testimonials;

  return <TestimonialsClient testimonials={testimonials} />;
}   