import React from "react";
import { WhatsApp } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/+6287729138734?text=Hi%2C%20saya%20tertarik%20dengan%20Lebaran%20Pangling%20Package%20di%20Marvie%20Beauty.%20Bisa%20info%20lebih%20lanjut%3F";

const CrescentMoon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M42 8C30.954 8 22 16.954 22 28s8.954 20 20 20c3.87 0 7.49-1.1 10.56-3A23.94 23.94 0 0 1 36 52C22.745 52 12 41.255 12 28S22.745 4 36 4c2.28 0 4.49.32 6.58.92A19.88 19.88 0 0 0 42 8Z" fill="currentColor" />
  </svg>
);

const StarOrnament = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z" />
  </svg>
);

export default function PromoLebaran() {
  const [headerRef, headerVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070E1A] via-[#0C1829] to-[#0A1522]">
      {/* Animated gold glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/[0.06] rounded-full blur-[150px] animate-pulse-soft" />
        <div className="absolute bottom-[-5%] left-[20%] w-[300px] h-[300px] bg-[#D4AF37]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[-5%] w-[200px] h-[200px] bg-[#D4AF37]/[0.03] rounded-full blur-[80px]" />

        {/* Gold geometric pattern corners */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.06]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <pattern id="ip1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" transform="rotate(45 20 20)" />
            </pattern>
            <rect width="200" height="200" fill="url(#ip1)" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.06] rotate-180">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <pattern id="ip2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" transform="rotate(45 20 20)" />
            </pattern>
            <rect width="200" height="200" fill="url(#ip2)" />
          </svg>
        </div>

        {/* Floating crescents & stars */}
        <CrescentMoon className="absolute top-16 left-[8%] w-24 h-24 text-[#D4AF37]/[0.08] animate-float" />
        <StarOrnament className="absolute top-10 left-[22%] w-6 h-6 text-[#D4AF37]/15" />
        <StarOrnament className="absolute top-28 left-[5%] w-4 h-4 text-[#D4AF37]/10" />
        <StarOrnament className="absolute bottom-20 right-[12%] w-5 h-5 text-[#D4AF37]/10" />
      </div>

      <div className="container-wide mx-auto relative z-10 px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <CrescentMoon className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Promo valid 2 – 31 March 2026
            </span>
            <StarOrnament className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="font-display text-display-xl text-white mb-2 italic"
              style={{ textShadow: "0 0 60px rgba(212,175,55,0.15)" }}>
            Lebaran Pangling
          </h2>
          <p className="text-base uppercase tracking-[0.35em] text-[#D4AF37]/80 font-semibold">
            Package
          </p>
        </div>

        {/* Packages */}
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "visible" : ""} max-w-3xl mx-auto space-y-0`}
        >
          {/* Package 1: Benang Hidung */}
          <div className="relative py-8 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Benang Hidung + <span className="text-[#D4AF37]">FREE</span> Skin Booster DNA Salmon
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent hidden sm:block" />
              <span className="inline-flex items-center bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg shadow-[#25D366]/20">
                Save 33%
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3.5 border border-white/[0.04] hover:border-[#D4AF37]/20 transition-colors">
                <span className="text-sm text-white/60">Korean Nose</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/60 line-through tabular-nums">5,000K</span>
                  <span className="text-xl font-bold text-[#D4AF37] tabular-nums">3,500K</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3.5 border border-white/[0.04] hover:border-[#D4AF37]/20 transition-colors">
                <span className="text-sm text-white/60">Turkish Nose</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/60 line-through tabular-nums">7,500K</span>
                  <span className="text-xl font-bold text-[#D4AF37] tabular-nums">5,000K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Package 2: Promo Pangling 1 */}
          <div className="relative py-8 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Promo Pangling 1
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent hidden sm:block" />
              <span className="inline-flex items-center bg-[#D4AF37] text-[#0C1829] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg shadow-[#D4AF37]/20">
                Save 18%
              </span>
            </div>
            <p className="text-sm text-white/70 mb-5">
              Threadlift 4 + Botox Masseter 50iu + Chin Filler 1ml
            </p>
            <div className="flex flex-wrap items-baseline gap-3 bg-white/[0.02] rounded-xl px-5 py-4 border border-white/[0.04]">
              <span className="text-sm text-white/60 line-through tabular-nums">9,700K</span>
              <span className="text-sm text-white/40 italic">Now Only</span>
              <span className="text-3xl font-bold text-white tabular-nums"
                    style={{ textShadow: "0 0 30px rgba(212,175,55,0.2)" }}>
                IDR <span className="text-[#D4AF37]">8,000K</span>
              </span>
            </div>
          </div>

          {/* Package 3: Promo Pangling 2 */}
          <div className="relative py-8">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Promo Pangling 2
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent hidden sm:block" />
              <span className="inline-flex items-center bg-[#D4AF37] text-[#0C1829] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg shadow-[#D4AF37]/20">
                Save 22%
              </span>
            </div>
            <p className="text-sm text-white/70 mb-5">
              Nose Thread 15 + Threadlift 6 + Masseter Botox + Chin Filler 1ml + Skin Booster DNA Salmon
            </p>
            <div className="flex flex-wrap items-baseline gap-3 bg-white/[0.02] rounded-xl px-5 py-4 border border-white/[0.04]">
              <span className="text-sm text-white/60 line-through tabular-nums">14,100K</span>
              <span className="text-sm text-white/40 italic">Now Only</span>
              <span className="text-3xl font-bold text-white tabular-nums"
                    style={{ textShadow: "0 0 30px rgba(212,175,55,0.2)" }}>
                IDR <span className="text-[#D4AF37]">11,000K</span>
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn bg-[#25D366] text-white px-10 py-4 text-sm font-bold rounded-full uppercase tracking-wider
                       hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-[0.98]
                       transition-all duration-300 shadow-lg shadow-[#25D366]/25"
          >
            <WhatsApp size={20} />
            Book This Package
          </a>
        </div>
      </div>
    </section>
  );
}
