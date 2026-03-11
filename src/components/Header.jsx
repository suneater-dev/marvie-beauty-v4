import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, TikTok } from "./Icons";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricelist", href: "/pricelist", isPage: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/6287729138734?text=Halo%20Marvie%20Beauty,%20saya%20ingin%20konsultasi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft border-b border-border/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-3 cursor-pointer">
            <img
              src="/marvie-logo.png"
              alt="Marvie Beauty"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span className={`font-display text-lg tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                Marvie Beauty
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const baseClass = `relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer`;
              const colorClass = activeSection === link.href.slice(1)
                ? isScrolled
                  ? "text-primary bg-primary/5"
                  : "text-white bg-white/15"
                : isScrolled
                ? "text-text-muted hover:text-primary hover:bg-primary/5"
                : "text-white/80 hover:text-white hover:bg-white/10";

              if (link.isPage) {
                return (
                  <Link key={link.href} to={link.href} className={`${baseClass} ${colorClass}`}>
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`${baseClass} ${colorClass}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/marviebeauty_by_dr.winayani"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isScrolled ? "text-primary hover:bg-primary/5" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@marviebeautybydrwinayani"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isScrolled ? "text-primary hover:bg-primary/5" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="TikTok"
            >
              <TikTok size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn text-sm px-6 py-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-600"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer ${
              isScrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isMobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-soft-xl transition-transform duration-500 ease-out ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const mobileClass = `px-4 py-3 text-base font-medium rounded-xl transition-colors cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-primary/5"
                    : "text-text-muted hover:text-primary hover:bg-primary/5"
                  }`;

                if (link.isPage) {
                  return (
                    <Link key={link.href} to={link.href} onClick={() => setIsMobileOpen(false)} className={mobileClass}>
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={mobileClass}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-border">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center rounded-xl"
              >
                Book Appointment
              </a>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a href="https://www.instagram.com/marviebeauty_by_dr.winayani" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-600 transition-colors cursor-pointer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@marviebeautybydrwinayani" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-600 transition-colors cursor-pointer" aria-label="TikTok">
                  <TikTok size={20} />
                </a>
              </div>
              <p className="text-xs text-text-muted text-center mt-3">
                Jl. Gunung Soputan I No.83, Denpasar Barat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
