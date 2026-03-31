import React from "react";
import { WhatsApp } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL =
  "https://wa.me/+6287729138734?text=Hi%2C%20saya%20tertarik%20dengan%20Treatment%20Package%20di%20Marvie%20Beauty.%20Bisa%20info%20lebih%20lanjut%3F";

const PACKAGES = [
  {
    name: "Package 1",
    discount: "30",
    items: [
      { treatment: "Botox Crossfit", price: "600k" },
      { treatment: "Facial Hydra", price: "300k" },
      { treatment: "Skin Booster", price: "1,500k" },
    ],
    originalPrice: "2,400K",
    promoPrice: "1,599K",
  },
  {
    name: "Package 2",
    discount: "45",
    items: [
      { treatment: "Facial Hydra", price: "300k" },
      { treatment: "Upper Face Botox", price: "1,500k" },
      { treatment: "Whitening Infusion", price: "750k" },
      { treatment: "Dermapen Skin Booster", price: "1,500k" },
      { treatment: "Inject Skin Booster", price: "1,500k" },
    ],
    originalPrice: "5,550K",
    promoPrice: "3,000K",
  },
  {
    name: "Package 3",
    discount: "20",
    items: [
      { treatment: "Nose Thread 5", price: "2,500k" },
      { treatment: "Facial Hydra", price: "300k" },
      { treatment: "Dermapen Skin Booster", price: "1,500k" },
      { treatment: "Inject Skin Booster", price: "1,500k" },
      { treatment: "Collagen Infusion", price: "750k" },
      { treatment: "DPL 2 Area", price: "500k" },
      { treatment: "Messo 2cc", price: "500k" },
    ],
    originalPrice: "7,550K",
    promoPrice: "6,000K",
  },
  {
    name: "Package 4",
    discount: "17",
    items: [
      { treatment: "Nose Thread 5", price: "2,500k" },
      { treatment: "Facial Hydra", price: "300k" },
      { treatment: "Dermapen Skin Booster", price: "1,500k" },
      { treatment: "Inject Skin Booster", price: "1,500k" },
      { treatment: "Threadlift 4", price: "3,200k" },
      { treatment: "DPL 2 Area", price: "500k" },
      { treatment: "Messo 2cc", price: "500k" },
      { treatment: "Filler Undereye", price: "1,500k" },
    ],
    originalPrice: "11,500K",
    promoPrice: "10,000K",
  },
  {
    name: "Package 5",
    discount: "17",
    items: [
      { treatment: "Botox Fullface", price: "3,000k" },
      { treatment: "Filler Undereye", price: "3,000k" },
      { treatment: "Chin Filler", price: "3,000k" },
      { treatment: "Lip Filler", price: "3,000k" },
      { treatment: "Facial Hydra", price: "300k" },
      { treatment: "DPL Armpit", price: "500k" },
      { treatment: "Messo 4cc", price: "1,000k" },
      { treatment: "Nose Thread 5", price: "2,500k" },
      { treatment: "Whitening Infusion", price: "750k" },
      { treatment: "Skin Booster NCTF", price: "1,500k" },
    ],
    originalPrice: "18,550K",
    promoPrice: "15,000K",
  },
];

function PackageCard({ pkg }) {
  const isHighDiscount = parseInt(pkg.discount) >= 30;
  const badgeClass = isHighDiscount
    ? "bg-[#25D366] text-white shadow-[#25D366]/20"
    : "bg-[#D4AF37] text-[#0C1829] shadow-[#D4AF37]/20";

  return (
    <div className="relative py-8 border-b border-white/[0.06] last:border-b-0">
      {/* Package header */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <h3 className="text-base font-bold text-white uppercase tracking-wider">
          {pkg.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent hidden sm:block" />
        <span
          className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg ${badgeClass}`}
        >
          Save {pkg.discount}%
        </span>
      </div>

      {/* Treatment list */}
      <div className="space-y-1.5 mb-5">
        {pkg.items.map((item) => (
          <div
            key={item.treatment}
            className="flex items-center justify-between rounded-lg px-4 py-2 border border-white/[0.04] hover:border-[#D4AF37]/20 transition-colors group"
          >
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
              {item.treatment}
            </span>
            <span className="text-sm font-semibold text-white/40 tabular-nums">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-baseline gap-3 bg-white/[0.03] rounded-xl px-5 py-4 border border-white/[0.06]">
        <span className="text-sm text-white/60 line-through tabular-nums">
          {pkg.originalPrice}
        </span>
        <span className="text-sm text-white/40 italic">Now Only</span>
        <span
          className="text-3xl font-bold text-white tabular-nums"
          style={{ textShadow: "0 0 30px rgba(212,175,55,0.2)" }}
        >
          IDR <span className="text-[#D4AF37]">{pkg.promoPrice}</span>
        </span>
      </div>
    </div>
  );
}

export default function PromoLebaran() {
  const [headerRef, headerVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070E1A] via-[#0C1829] to-[#0A1522]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/[0.06] rounded-full blur-[150px] animate-pulse-soft" />
        <div className="absolute bottom-[-5%] left-[20%] w-[300px] h-[300px] bg-[#D4AF37]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[-5%] w-[200px] h-[200px] bg-[#D4AF37]/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="container-wide mx-auto relative z-10 px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          <div className="inline-flex items-center gap-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              April Bundling Promo — Limited Time Offer
</span>
          </div>

          <h2
            className="font-display text-display-xl text-white mb-2 italic"
            style={{ textShadow: "0 0 60px rgba(212,175,55,0.15)" }}
          >
            Treatment Package
          </h2>
          <p className="text-base uppercase tracking-[0.35em] text-[#D4AF37]/80 font-semibold">
            Bundling Promo
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
          </div>
        </div>

        {/* Packages */}
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "visible" : ""} max-w-3xl mx-auto`}
        >
          <div
            className="rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-10
                        shadow-[0_0_80px_-20px_rgba(212,175,55,0.08)]"
          >
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
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
            Book Treatment Package
          </a>
        </div>
      </div>
    </section>
  );
}
