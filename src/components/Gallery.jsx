import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const GALLERY_ITEMS = [
  { src: "/assets/gallery-1.webp", alt: "Before and after facial treatment result" },
  { src: "/assets/gallery-2.webp", alt: "Before and after skin rejuvenation" },
  { src: "/assets/gallery-3.webp", alt: "Before and after acne treatment" },
  { src: "/assets/gallery-4.webp", alt: "Before and after skin treatment result" },
];

export default function Gallery() {
  const [headerRef, headerVisible] = useReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="gallery" className="section bg-bg">
        <div className="container-wide mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`reveal ${headerVisible ? "visible" : ""} text-center max-w-2xl mx-auto mb-16`}
          >
            <span className="section-label">Real Results</span>
            <h2 className="font-display text-display-lg text-primary mb-4 text-balance">
              See the <span className="text-accent-700">Transformation</span>
            </h2>
            <p className="text-text-muted leading-relaxed">
              Real results from real clients. Every transformation tells a unique
              story of confidence restored.
            </p>
          </div>

          {/* Gallery Grid - Masonry-like */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, i) => {
              const [ref, isVisible] = useReveal(0.1); // eslint-disable-line react-hooks/rules-of-hooks
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`reveal ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-white">View Result</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
