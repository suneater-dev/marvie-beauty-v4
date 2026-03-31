import React from "react";
import { WhatsApp } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/+6287729138734?text=Hi%2C%20saya%20tertarik%20dengan%20promo%20April%202026%20di%20Marvie%20Beauty.%20Bisa%20info%20lebih%20lanjut%3F";

const LEFT_COLUMN = [
  {
    name: "BOTOX TREATMENT",
    items: [
      { treatment: "Full Face", price: "2,499k" },
      { treatment: "Upper Face", price: "1,500k" },
      { treatment: "Crossfit", price: "600k" },
      { treatment: "Masseter", price: "1,800k" },
      { treatment: "Traps", price: "2,999k" },
      { treatment: "Armpit", price: "2,999k" },
      { treatment: "Hand", price: "2,999k" },
    ],
  },
  {
    name: "FILLER TREATMENT",
    items: [
      { treatment: "Chin", price: "1,500k" },
      { treatment: "Lip", price: "1,500k" },
      { treatment: "Undereye", price: "1,500k" },
      { treatment: "Buttocks", price: "15,000k / 150cc" },
    ],
  },
  {
    name: "THREAD TREATMENT",
    items: [
      { treatment: "Nose Thread", price: "499k / Thread" },
      { treatment: "Threadlift", originalPrice: "1,000k", price: "799k / Thread" },
      { treatment: "Croquis", originalPrice: "1,200k", price: "1,000k / Thread" },
    ],
  },
  { name: "FACIAL HYDRA TREATMENT", single: true, price: "300k" },
];

const RIGHT_COLUMN = [
  {
    name: "SKIN BOOSTER TREATMENT",
    items: [
      { treatment: "Skin Booster 1", price: "500k" },
      { treatment: "Skin Booster 2", price: "700k" },
      { treatment: "Skin Booster 3", price: "1,000k" },
    ],
  },
  {
    name: "INFUSION TREATMENT",
    items: [
      { treatment: "Whitening", price: "750k" },
      { treatment: "Collagen", price: "750k" },
    ],
  },
  {
    name: "DPL TREATMENT",
    items: [
      { treatment: "2 Area", price: "500k" },
      { treatment: "Armpit", price: "500k" },
    ],
  },
  {
    name: "MESSO TREATMENT",
    items: [
      { treatment: "2cc", price: "500k" },
      { treatment: "4cc", price: "1,000k" },
    ],
  },
];

function CategoryBlock({ category }) {
  if (category.single) {
    return (
      <div className="mb-5">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
            {category.name}
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/25 to-transparent" />
          <span className="text-sm font-semibold text-white/70 tabular-nums whitespace-nowrap">
            {category.price}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/25 to-transparent" />
      </div>
      <div className="space-y-2">
        {category.items.map((item) => (
          <div key={item.treatment} className="flex items-baseline justify-between gap-3 group">
            <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
              {item.treatment}
            </span>
            <span className="text-sm font-semibold tabular-nums whitespace-nowrap transition-colors">
              {item.originalPrice && (
                <span className="text-white/30 line-through mr-2">{item.originalPrice}</span>
              )}
              <span className="text-white/70 group-hover:text-[#D4AF37]">{item.price}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PromoMonthly() {
  const [headerRef, headerVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1522] via-[#0C1829] to-[#070E1A]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("/assets/service-1.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      {/* Glowing accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/[0.04] rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[200px] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]" />

      <div className="container-wide mx-auto relative z-10 px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center mb-14`}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
              April 2026
            </span>
          </div>

          <h2 className="font-display text-display-xl text-white mb-1 tracking-wide"
              style={{ textShadow: "0 0 60px rgba(212,175,55,0.12)" }}>
            APRIL PROMO
          </h2>
          <p className="text-xl text-[#D4AF37]/40 italic font-display">pricelist</p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
          </div>
        </div>

        {/* Two-column price list */}
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "visible" : ""} max-w-5xl mx-auto`}
        >
          {/* Card wrapper with subtle border glow */}
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-10 lg:p-12
                          shadow-[0_0_80px_-20px_rgba(212,175,55,0.08)]">
            <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
              <div>
                {LEFT_COLUMN.map((cat) => (
                  <CategoryBlock key={cat.name} category={cat} />
                ))}
              </div>
              <div>
                {RIGHT_COLUMN.map((cat) => (
                  <CategoryBlock key={cat.name} category={cat} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-xs text-white/25 mb-6">All prices are listed in IDR (Indonesian Rupiah)</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn bg-[#25D366] text-white px-10 py-4 text-sm font-bold rounded-full uppercase tracking-wider
                       hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-[0.98]
                       transition-all duration-300 shadow-lg shadow-[#25D366]/25"
          >
            <WhatsApp size={20} />
            Ask About April Promos
          </a>
        </div>
      </div>
    </section>
  );
}
