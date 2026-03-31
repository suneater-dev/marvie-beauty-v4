import React from "react";
import { useReveal } from "../hooks/useReveal";

const WEEKS = [
  {
    week: "I",
    treatment: "Yaqoot Skin Booster",
    prices: ["2,000k", "2,500k"],
  },
  {
    week: "II",
    treatment: "Skin Booster",
    prices: ["499k"],
  },
  {
    week: "III",
    treatment: "Skin Booster NaFi",
    prices: ["1,600k", "600k"],
  },
  {
    week: "IV",
    treatment: "Botox Full Face",
    prices: ["3,000k", "2,250k"],
  },
];

function WeekCard({ data }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:border-[#D4AF37]/20 transition-colors">
      {/* Week label */}
      <div className="inline-flex items-center bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-3 py-1 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
          Week {data.week}
        </span>
      </div>

      {/* Treatment name */}
      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
        {data.treatment}
      </h3>

      {/* Prices */}
      <div className="flex flex-wrap items-center gap-2">
        {data.prices.map((price, i) => (
          <React.Fragment key={price}>
            <span className="text-lg font-bold text-[#D4AF37] tabular-nums">
              {price}
            </span>
            {i < data.prices.length - 1 && (
              <span className="text-white/20">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function PromoWeekly() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070E1A] via-[#0C1829] to-[#0A1522]">
      {/* Glowing accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#D4AF37]/[0.04] rounded-full blur-[120px]" />

      <div className="container-wide mx-auto relative z-10 px-5 sm:px-8 lg:px-12 py-16 md:py-24">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="font-display text-display-lg text-white mb-2 tracking-wide"
              style={{ textShadow: "0 0 60px rgba(212,175,55,0.12)" }}
            >
              April Weekly Promo
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold">
              Serba (Senin – Rabu)
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
            </div>
          </div>

          {/* Week cards grid */}
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {WEEKS.map((w) => (
              <WeekCard key={w.week} data={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
