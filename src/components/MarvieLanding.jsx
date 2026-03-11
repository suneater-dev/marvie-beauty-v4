import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import PromoLebaran from "./PromoLebaran";
import PromoMonthly from "./PromoMonthly";
import ServicesGrid from "./ServicesGrid";
import About from "./About";

import TestimonialCarousel from "./TestimonialCarousel";

import ContactForm from "./ContactForm";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function MarvieLanding() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <PromoLebaran />
        <PromoMonthly />
        <ServicesGrid />
        <About />

        <TestimonialCarousel />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
