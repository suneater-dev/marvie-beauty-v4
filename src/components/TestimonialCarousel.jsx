import React, { useState, useCallback, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emma Whitfield",
    role: "Regular Client",
    image: "/assets/testimonial-1.webp",
    rating: 5,
    text: "Marvie Beauty completely transformed my skin. The facial treatment was so relaxing and the results were visible from the very first session. Dr. Winayani really knows what she's doing!",
  },
  {
    id: 2,
    name: "Kim Soyeon",
    role: "Loyal Client",
    image: "/assets/testimonial-2.webp",
    rating: 5,
    text: "I've tried many clinics in Bali, but Marvie Beauty stands out. The personalized approach, clean facility, and amazing results keep me coming back. Highly recommend their anti-aging treatments!",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [headerRef, headerVisible] = useReveal();
  const [cardRef, cardVisible] = useReveal();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-tight mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="section-label">Client Stories</span>
          <h2 className="font-display text-display-lg text-primary mb-4 text-balance">
            What Our Clients <span className="text-accent-700">Say</span>
          </h2>
          <p className="text-text-muted leading-relaxed">
            Don't just take our word for it — hear from the people who trust us
            with their beauty journey.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          ref={cardRef}
          className={`reveal ${cardVisible ? "visible" : ""} max-w-3xl mx-auto`}
        >
          <div className="relative bg-bg rounded-3xl p-8 sm:p-12 border border-border/60">
            {/* Quote icon */}
            <Quote size={48} className="text-accent/30 absolute top-6 right-8" />

            <div className="flex flex-col sm:flex-row items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent-600" />
                  ))}
                </div>

                <blockquote className="text-primary text-base sm:text-lg leading-relaxed mb-6 text-pretty">
                  "{testimonial.text}"
                </blockquote>

                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/60">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      current === i ? "w-8 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
