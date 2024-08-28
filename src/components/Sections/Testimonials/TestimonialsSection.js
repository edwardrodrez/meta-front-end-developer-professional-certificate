import React from "react";
import "./TestimonialsSection.css";
import TestimonialCard from "../../Cards/TestimonialCard/TestimonialCard";


const testimonials = [
  {
    id: 1,
    author: "Ethan Carter",
    description:
      "Little Lemon's Tiramisu was a dream dessert, rich and creamy with the perfect balance of coffee and sweetness.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    id: 2,
    author: "Sophia Williams",
    description:
      "I was amazed by the quality of the seafood at Little Lemon. The freshness of the fish was unparalleled.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    id: 3,
    author: "James Anderson",
    description:
      "The Lemon Tart at Little Lemon was a perfect balance of tangy and sweet, leaving me wanting more.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4,
  },
  {
    id: 7,
    author: "Miriam Louris",
    description:
      "Little Lemon's Pasta Primavera was a burst of fresh flavors and perfectly cooked pasta. A true delight!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  }

];


const TestimonialsSection = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;