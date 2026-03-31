import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, WhatsApp } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/+6287729138734?text=Hi%2C%20saya%20ingin%20tanya%20tentang%20treatment%20di%20Marvie%20Beauty.%20Bisa%20info%20lebih%20lanjut%3F";

const LEFT_COLUMN = [
  {
    name: "FACIAL TREATMENT",
    items: [
      { treatment: "Radian Glow Cleansing", price: "125K" },
      { treatment: "Hollywood Peel", price: "185K" },
      { treatment: "Anti Aging", price: "200K" },
      { treatment: "DNA Salmon", price: "250K" },
      { treatment: "Acne Series", price: "280K" },
      { treatment: "Hydra Full", price: "300K" },
    ],
  },
  {
    name: "PRP TREATMENT",
    items: [
      { treatment: "Injeksi", price: "550K" },
      { treatment: "Dermapen", price: "550K" },
      { treatment: "Hair", price: "850K" },
      { treatment: "Eye", price: "550K" },
      { treatment: "Stretchmark", price: "1,200K" },
      { treatment: "Hand", price: "550K" },
    ],
  },
  {
    name: "FACE TREATMENT",
    items: [
      { treatment: "Skin Tag Small", price: "50K" },
      { treatment: "Skin Tag Medium", price: "80K" },
      { treatment: "Skin Tag Large", price: "100K" },
      { treatment: "Inject Acne", price: "35K/Spot" },
      { treatment: "Inject Keloid S", price: "500K" },
      { treatment: "Inject Keloid M", price: "500K" },
      { treatment: "Inject Keloid L", price: "800K" },
      { treatment: "Blackspot Healing", price: "1,000K" },
      { treatment: "Subsisi Scar Small", price: "500K" },
    ],
  },
  {
    name: "DPL TREATMENT",
    items: [
      { treatment: "Bikini Line Woman", price: "399K" },
      { treatment: "Upper Legs", price: "499K" },
      { treatment: "Buttock Brazilian VI", price: "499K" },
      { treatment: "Arms Area", price: "399K" },
      { treatment: "Lower Legs", price: "399K" },
      { treatment: "Full Legs", price: "699K" },
    ],
  },
  {
    name: "INFUSION TREATMENT",
    items: [
      { treatment: "Chromosome", price: "24,999K" },
      { treatment: "Porcelain", price: "849K" },
      { treatment: "Snow White", price: "499K" },
      { treatment: "Super Whitening", price: "499K" },
      { treatment: "Vitamin C", price: "399K" },
      { treatment: "Bali Belly", price: "999K" },
      { treatment: "Hangover Cure", price: "999K" },
    ],
  },
  {
    name: "MESSO TREATMENT",
    items: [
      { treatment: "Messo", price: "250K/cc" },
      { treatment: "Body Messo", price: "799K/10cc" },
    ],
  },
];

const RIGHT_COLUMN = [
  {
    name: "THREADLIFT TREATMENT",
    items: [
      { treatment: "Reguler", price: "499K/Thread" },
      { treatment: "Nose", price: "499K/Thread" },
      { treatment: "Face", price: "499K/Thread" },
      { treatment: "Foxy Eye", price: "499K/Thread" },
      { treatment: "Double Chin", price: "499K/Thread" },
      { treatment: "Under Eye", price: "499K/Thread" },
      { treatment: "Premium Nose", price: "799K/Thread" },
      { treatment: "Premium Face", price: "699K/Thread" },
      { treatment: "Premium Foxy Eye", price: "799K/Thread" },
      { treatment: "Premium Double Chin", price: "249K/Thread" },
    ],
  },
  {
    name: "KOREAN FILLER TREATMENT",
    items: [
      { treatment: "Chin", price: "1,499K" },
      { treatment: "Lips", price: "1,499K" },
      { treatment: "Smile Line", price: "1,499K" },
      { treatment: "Under Eye", price: "1,499K" },
    ],
  },
  {
    name: "EUROPE FILLER TREATMENT",
    items: [
      { treatment: "Chin", price: "4,999K" },
      { treatment: "Lips", price: "4,999K" },
      { treatment: "Smile Line", price: "4,999K" },
      { treatment: "Under Eye", price: "4,999K" },
    ],
  },
  {
    name: "SKIN BOOSTER DNA SALMON",
    items: [
      { treatment: "Korean Glow Booster I", price: "499K" },
      { treatment: "Korean Glow Booster II", price: "799K" },
      { treatment: "Korean Glow Booster III", price: "899K" },
      { treatment: "Skin PDRN DNA Salmon", price: "1,199K" },
      { treatment: "Skin Exosome DNA Salmon", price: "1,499K" },
      { treatment: "Skin Exosome + PDRN", price: "1,999K" },
    ],
  },
  {
    name: "EUROPE SKIN TREATMENT",
    items: [
      { treatment: "Hyahilo", price: "3,299K" },
      { treatment: "Jalupro", price: "4,999K" },
      { treatment: "Neuclofil", price: "4,999K" },
      { treatment: "Profilo", price: "5,999K" },
      { treatment: "Eye Booster Jalupro", price: "2,999K" },
    ],
  },
  {
    name: "BOTOX TREATMENT",
    items: [
      { treatment: "Upper Face", price: "1,999K" },
      { treatment: "Jawline", price: "1,999K" },
      { treatment: "Full Face", price: "2,499K" },
      { treatment: "Nose", price: "1,499K" },
      { treatment: "Shoulder", price: "4,999K" },
      { treatment: "Armpit", price: "2,999K" },
      { treatment: "Hand", price: "2,999K" },
    ],
  },
];

function CategoryBlock({ category }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/25 to-transparent" />
      </div>
      <div className="space-y-2">
        {category.items.map((item) => (
          <div key={item.treatment} className="flex items-baseline justify-between gap-3 group">
            <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
              {item.treatment}
            </span>
            <span className="text-sm font-semibold text-white/80 group-hover:text-[#D4AF37] tabular-nums whitespace-nowrap transition-colors">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricelistPage() {
  const [headerRef, headerVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070E1A] via-[#0C1829] to-[#0A1522]">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C1829]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="container-wide mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/marvie-logo.png" alt="Marvie Beauty" className="h-9 w-auto" />
            <span className="font-display text-lg tracking-wide text-white hidden sm:block">
              Marvie Beauty
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20 px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          <h1 className="font-display text-display-xl text-white mb-2 uppercase tracking-[0.15em]"
              style={{ textShadow: "0 0 60px rgba(212,175,55,0.1)" }}>
            Treatment
          </h1>
          <p className="text-xl text-[#D4AF37]/50 italic font-display">pricelist</p>
        </div>

        {/* Two-column price list */}
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "visible" : ""} max-w-5xl mx-auto`}
        >
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
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

        {/* Footer CTA */}
        <div className="text-center mt-16">
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
            Ask About Treatments
          </a>
        </div>
      </main>
    </div>
  );
}
