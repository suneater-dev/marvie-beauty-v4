import React from "react";
import { ArrowRight } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/6287729138734?text=Halo%20Marvie%20Beauty,%20saya%20tertarik%20dengan%20promo%20terbaru";

export default function PromoSection() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="section bg-bg overflow-hidden">
      <div className="container-wide mx-auto">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="relative bg-primary rounded-[2rem] overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="inline-block text-accent text-xs font-medium uppercase tracking-[0.2em] mb-4">
                  Limited Offer
                </span>
                <h2 className="font-display text-display-md text-white mb-4 text-balance">
                  First Visit Special Package
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                  Experience our signature facial treatment with a complimentary skin
                  consultation. New clients get exclusive introductory pricing.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-accent text-primary px-8 py-4 text-sm font-semibold rounded-2xl
                             hover:bg-accent-300 active:scale-[0.98] transition-all duration-200"
                >
                  Claim Offer
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Image */}
              <div className="hidden lg:block relative h-full min-h-[400px]">
                <img
                  src="/assets/promo-person.webp"
                  alt="Special promotion at Marvie Beauty"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
