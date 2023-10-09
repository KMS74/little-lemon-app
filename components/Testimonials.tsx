import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-primary space-v-lg p-4">
      <div className="container p-4">
        <h3 className="display-3 text-center text-secondary mb-3">
          What people say about us!
        </h3>
        <div className="row row-gap-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />

          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
