import React from "react";
import { ArrowRight, WhatsApp } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/+6287729138734?text=Hi%2C%20saya%20tertarik%20dengan%20promo%20March%202026%20di%20Marvie%20Beauty.%20Bisa%20info%20lebih%20lanjut%3F";

const LEFT_COLUMN = [
  {
    name: "BOTOX",
    items: [
      { treatment: "Full Face", price: "2,500k" },
      { treatment: "Masseter", price: "1,800k" },
      { treatment: "Upper", price: "1,500k" },
      { treatment: "Nefertiti", price: "3,000k" },
      { treatment: "Traps", price: "3,000k" },
      { treatment: "Tricep", price: "3,000k" },
      { treatment: "Armpit", price: "3,000k" },
      { treatment: "Hand", price: "3,000k" },
    ],
  },
  { name: "BOTOX ALERGAN", single: true, price: "5,800k" },
  { name: "ALL FILLER", single: true, price: "1,500k" },
  { name: "BUTTOCK FILLER", single: true, price: "15,000k / 150cc" },
  {
    name: "LASER",
    items: [
      { treatment: "Eye Brow Removal", price: "300k" },
      { treatment: "Tattoo Removal S", price: "500k" },
      { treatment: "Tattoo Removal M", price: "800k" },
      { treatment: "Tattoo Removal XL", price: "1,500k" },
      { treatment: "Acne", price: "500k" },
      { treatment: "Back Acne", price: "1,000k" },
    ],
  },
  { name: "COLLAGEN STIMULATOR", single: true, price: "2,500k" },
];

const RIGHT_COLUMN = [
  {
    name: "THREAD TREATMENT",
    items: [
      { treatment: "Nose thread", price: "500k/ thread" },
      { treatment: "Threadlift Korean", price: "700k/ thread" },
      { treatment: "Threadlift Korean Croquis", price: "1,000k/ thread" },
    ],
  },
  { name: "HAND DNA SALMON", single: true, price: "1,000k" },
  { name: "NAD+ INFUSION", single: true, price: "2,500k" },
  {
    name: "DPL",
    items: [
      { treatment: "Face Rejuve", price: "500k" },
      { treatment: "Armpit", price: "300k" },
      { treatment: "Miss V / Brazilian", price: "300k" },
      { treatment: "Hand", price: "500k" },
      { treatment: "Foot", price: "500k" },
    ],
  },
  {
    name: "SKIN BOOSTER",
    items: [
      { treatment: "Korean Moist", price: "500k" },
      { treatment: "Korean Glowing", price: "800k" },
      { treatment: "Korean Full Packed", price: "1,000k" },
      { treatment: "Yaqoot", price: "2,500k" },
      { treatment: "NCTF", price: "1,500k" },
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
          <span className="text-sm font-bold text-[#D4AF37] tabular-nums whitespace-nowrap">
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
            <span className="text-sm font-semibold text-white/70 group-hover:text-[#D4AF37] tabular-nums whitespace-nowrap transition-colors">
              {item.price}
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
              March 2026
            </span>
          </div>

          <h2 className="font-display text-display-xl text-white mb-1 tracking-wide"
              style={{ textShadow: "0 0 60px rgba(212,175,55,0.12)" }}>
            MARCH PROMO
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
          <p className="text-xs text-white/15 mb-6">www.marvieclinic.com</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn bg-[#25D366] text-white px-10 py-4 text-sm font-bold rounded-full uppercase tracking-wider
                       hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-[0.98]
                       transition-all duration-300 shadow-lg shadow-[#25D366]/25"
          >
            <WhatsApp size={20} />
            Ask About March Promos
          </a>
        </div>
      </div>
    </section>
  );
}
