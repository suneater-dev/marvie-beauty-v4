import React from "react";
import { Instagram, TikTok, WhatsApp } from "./Icons";

const WHATSAPP_URL = "https://wa.me/6287729138734?text=Halo%20Marvie%20Beauty,%20saya%20ingin%20konsultasi";

const QUICK_LINKS = [
  { label: "Facial Treatment", href: "#services" },
  { label: "Anti-Aging", href: "#services" },
  { label: "Face Contouring", href: "#services" },
  { label: "Body Contouring", href: "#services" },
  { label: "Gallery", href: "#gallery" },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/marviebeauty_by_dr.winayani",
  },
  {
    icon: TikTok,
    label: "TikTok",
    href: "https://www.tiktok.com/@marviebeautyclinic",
  },
  {
    icon: WhatsApp,
    label: "WhatsApp",
    href: WHATSAPP_URL,
  },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-wide mx-auto px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display text-display-md text-white mb-4 text-balance">
            Ready to Start Your <span className="text-accent">Transformation</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Book your free consultation today and discover how we can enhance
            your natural beauty.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-accent text-primary px-10 py-4 text-sm font-semibold rounded-2xl
                       hover:bg-accent-300 active:scale-[0.98] transition-all duration-200"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container-wide mx-auto px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/marvie-logo.png" alt="Marvie Beauty" className="h-8 w-auto brightness-0 invert" />
              <span className="font-display text-lg tracking-wide">Marvie Beauty</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Enhancing natural beauty with safe, personalized aesthetic treatments
              in Denpasar, Bali.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                               hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">Treatments</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">Contact</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                  +62 877-2913-8734
                </a>
              </li>
              <li>
                <a href="mailto:contact@marviebeauty.com" className="hover:text-white transition-colors cursor-pointer">
                  contact@marviebeauty.com
                </a>
              </li>
              <li className="leading-relaxed">
                Jl. Gunung Soputan I No.83,<br />
                Pemecutan Klod, Denpasar Barat,<br />
                Bali 80119
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">Opening Hours</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="text-white/70">10:00 - 20:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/50">
                Walk-ins welcome. For guaranteed availability, please book in advance via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Marvie Beauty Clinic. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Denpasar, Bali &middot; Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
