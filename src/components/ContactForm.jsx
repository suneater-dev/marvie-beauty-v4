import React, { useState, useCallback } from "react";
import { Phone, MapPin, Clock, Send, Check, Instagram, TikTok } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const WHATSAPP_URL = "https://wa.me/6287729138734";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 877-2913-8734",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jl. Gunung Soputan I No.83, Pemecutan Klod, Denpasar Barat, Bali",
    href: "https://maps.google.com/?q=-8.6705,115.2126",
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Every day, 10:00 – 20:00",
    href: null,
    external: false,
  },
];

const SERVICES_OPTIONS = [
  "Facial Treatment",
  "Anti-Aging Solutions",
  "Acne & Scar Treatment",
  "Face Contouring",
  "Laser Treatment",
  "Body Contouring",
  "Other",
];

export default function ContactForm() {
  const [headerRef, headerVisible] = useReveal();
  const [formRef, formVisible] = useReveal();
  const [infoRef, infoVisible] = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitStatus("loading");

      try {
        // Build WhatsApp message as fallback
        const msg = `Halo Marvie Beauty!%0A%0ANama: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
        window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } catch {
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus(null), 5000);
    },
    [formData]
  );

  const inputClasses =
    "w-full px-4 py-3 bg-bg border border-border rounded-xl text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200";

  return (
    <section id="contact" className="section bg-white">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="font-display text-display-lg text-primary mb-4 text-balance">
            Start Your Beauty <span className="text-accent-700">Journey</span>
          </h2>
          <p className="text-text-muted leading-relaxed">
            Ready to transform? Send us a message or visit our clinic for a
            personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? "visible" : ""} lg:col-span-3`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 xxx-xxxx-xxxx"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                  Treatment Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="">Select a treatment...</option>
                  {SERVICES_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals or concerns..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="btn-primary btn-lg w-full sm:w-auto disabled:opacity-50"
              >
                {submitStatus === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send via WhatsApp
                  </>
                )}
              </button>

              {submitStatus === "error" && (
                <p className="text-sm text-red-500 mt-2">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`reveal ${infoVisible ? "visible" : ""} lg:col-span-2`}
          >
            <div className="space-y-6">
              {CONTACT_INFO.map((info) => {
                const IconComponent = info.icon;
                const Wrapper = info.href ? "a" : "div";
                const wrapperProps = info.href
                  ? {
                      href: info.href,
                      target: info.external ? "_blank" : undefined,
                      rel: info.external ? "noopener noreferrer" : undefined,
                    }
                  : {};

                return (
                  <Wrapper
                    key={info.label}
                    {...wrapperProps}
                    className={`flex gap-4 p-4 rounded-2xl border border-border/60 transition-all duration-200 ${
                      info.href
                        ? "hover:border-primary/20 hover:bg-bg cursor-pointer"
                        : ""
                    }`}
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-text-muted mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm text-primary font-medium leading-relaxed">
                        {info.value}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/marviebeauty_by_dr.winayani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 hover:border-primary/20 hover:bg-bg transition-all duration-200 cursor-pointer flex-1"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted mb-1">Instagram</div>
                  <div className="text-sm text-primary font-medium">@marviebeauty</div>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@marviebeautybydrwinayani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 hover:border-primary/20 hover:bg-bg transition-all duration-200 cursor-pointer flex-1"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                  <TikTok size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted mb-1">TikTok</div>
                  <div className="text-sm text-primary font-medium">@marviebeauty</div>
                </div>
              </a>
            </div>

            {/* Map Embed Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]">
              <iframe
                title="Marvie Beauty Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.2126!3d-8.6705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDAnMTMuOCJTIDExNcKwMTInNDUuNCJF!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
