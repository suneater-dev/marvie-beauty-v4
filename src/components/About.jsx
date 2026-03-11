import React from "react";
import { Shield, Users, Award, Heart } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Safe & Certified",
    description: "All treatments performed by certified professionals using FDA-approved products.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Every treatment plan is customized to your unique skin type and aesthetic goals.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Over 2,000 satisfied clients with visible, natural-looking outcomes.",
  },
  {
    icon: Heart,
    title: "Gentle Approach",
    description: "Minimal downtime procedures with maximum comfort throughout your journey.",
  },
];

export default function About() {
  const [headerRef, headerVisible] = useReveal();
  const [imageRef, imageVisible] = useReveal();

  return (
    <section id="about" className="section bg-white">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className={`reveal ${imageVisible ? "visible" : ""} relative`}
          >
            <div className="relative">
              <img
                src="/assets/about.webp"
                alt="Marvie Beauty facial consultation"
                className="w-full rounded-3xl object-cover aspect-[4/5]"
                loading="lazy"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 glass rounded-2xl p-5 max-w-[220px] shadow-soft-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Award size={20} className="text-accent-700" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">5+ Years</div>
                  </div>
                </div>
                <p className="text-xs text-text-muted">
                  of trusted aesthetic excellence in Bali
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={headerRef} className={`reveal ${headerVisible ? "visible" : ""}`}>
            <span className="section-label">Why Marvie Beauty</span>
            <h2 className="font-display text-display-lg text-primary mb-6 text-balance">
              Where Science Meets <span className="text-accent-700">Beauty</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-10 text-pretty">
              At Marvie Beauty, we believe that everyone deserves to feel confident
              in their own skin. Led by Dr. Winayani, our clinic combines advanced
              medical techniques with a gentle, personalized approach to deliver
              results that enhance your natural beauty.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {HIGHLIGHTS.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 p-4 rounded-2xl transition-colors duration-200 hover:bg-bg cursor-default"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
