import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const SERVICES = [
  {
    id: 1,
    title: "Facial Treatment",
    description: "Deep cleansing facials, hydration therapy, and customized skin treatments for a radiant, healthy glow.",
    image: "/assets/service-1.webp",
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Anti-Aging Solutions",
    description: "Advanced collagen-boosting treatments, dermal fillers, and rejuvenation therapies to turn back time.",
    image: "/assets/service-2.webp",
    tag: null,
  },
  {
    id: 3,
    title: "Acne & Scar Treatment",
    description: "Medical-grade solutions for acne, pigmentation, and scar reduction using the latest technology.",
    image: "/assets/acne-and-scar.webp",
    tag: null,
  },
  {
    id: 4,
    title: "Face Contouring",
    description: "Non-surgical face sculpting and contouring for defined jawline, cheekbones, and balanced facial features.",
    image: "/assets/face-contouring.webp",
    tag: "Premium",
  },
  {
    id: 5,
    title: "Laser Treatment",
    description: "State-of-the-art laser technology for hair removal, skin resurfacing, and vascular treatments.",
    image: "/assets/laser.webp",
    tag: null,
  },
  {
    id: 6,
    title: "Body Contouring",
    description: "Non-invasive body sculpting, slimming treatments, and cellulite reduction for your ideal silhouette.",
    image: "/assets/body-contouring.webp",
    tag: null,
  },
];

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useReveal(0.1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="group card-hover block overflow-hidden h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={service.image}
            alt={`${service.title} at Marvie Beauty`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Tag */}
          {service.tag && (
            <span className="absolute top-4 left-4 badge-accent backdrop-blur-md bg-white/80">
              {service.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section id="services" className="section bg-bg">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="section-label">Our Treatments</span>
          <h2 className="font-display text-display-lg text-primary mb-4 text-balance">
            Expert Care for <span className="text-accent-700">Every Need</span>
          </h2>
          <p className="text-text-muted leading-relaxed">
            Discover our comprehensive range of aesthetic treatments, each tailored
            to your unique skin type and beauty goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
