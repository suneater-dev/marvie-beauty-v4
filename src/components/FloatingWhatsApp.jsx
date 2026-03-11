import React, { useState, useEffect } from "react";
import { WhatsApp, X } from "./Icons";

const WHATSAPP_URL = "https://wa.me/6287729138734?text=Halo%20Marvie%20Beauty,%20saya%20ingin%20konsultasi";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative animate-fade-in">
          <div className="bg-white rounded-2xl shadow-soft-lg border border-border/60 p-4 max-w-[220px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer"
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
            <p className="text-sm text-primary font-medium mb-1">Need help?</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Chat with us on WhatsApp for instant consultation
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute -right-1 bottom-4 w-3 h-3 bg-white border-r border-b border-border/60 rotate-[-45deg]" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full
                   shadow-soft-lg hover:shadow-soft-xl hover:scale-105 active:scale-95
                   transition-all duration-200 cursor-pointer animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <WhatsApp size={26} />
      </a>
    </div>
  );
}
