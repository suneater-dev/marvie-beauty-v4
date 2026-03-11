import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, Sparkles } from "./Icons";

const WHATSAPP_URL = "https://wa.me/6287729138734?text=Halo%20Marvie%20Beauty,%20saya%20ingin%20konsultasi";

const SLIDES = [
  {
    image: "/assets/hero-slide-1.webp",
    fallback: "/assets/hero-placeholder.jpg",
  },
  {
    image: "/assets/hero-slide-2.webp",
    fallback: "/assets/hero-placeholder.jpg",
  },
  {
    image: "/assets/hero-slide-3.webp",
    fallback: "/assets/hero-placeholder.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            currentSlide === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-5 sm:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Trusted by 2,000+ Clients in Bali
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-display-xl text-white mb-6 text-balance transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Enhancing
            <br />
            <span className="text-accent">Natural</span> Beauty
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg mb-10 text-pretty transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Personalized aesthetic treatments with medical precision.
            Safe, natural-looking results you'll love.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary px-8 py-4 text-sm font-semibold rounded-2xl
                         hover:bg-white/90 active:scale-[0.98] shadow-soft-lg
                         transition-all duration-200"
            >
              Book Consultation
              <ArrowRight size={16} />
            </a>
            <button
              onClick={scrollToServices}
              className="btn border border-white/30 text-white px-8 py-4 text-sm rounded-2xl
                         hover:bg-white/10 hover:border-white/50 active:scale-[0.98]
                         transition-all duration-200 cursor-pointer"
            >
              View Treatments
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-white/15 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {[
              { value: "2,000+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === i ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
