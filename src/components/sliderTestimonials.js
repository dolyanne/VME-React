import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <TestimonialsSlider/>
      </div>
    </section>
  );
}
