
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Parallax Background with Water Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform transition-transform duration-[400ms] hover:scale-110" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
          backgroundAttachment: "fixed",
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-section-slide-right">
            Secure 15–20% Returns from Aquaculture
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 animate-section-slide-left delay-200">
            RR Aqua Ventures is now inviting investors to participate in India's most scalable fish farming fund, powered by a 1 TPH feed plant and 1100+ acres of leased land.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-aqua-800 hover:bg-gray-100 flex items-center gap-2 text-lg py-6 px-6 animate-gentle-pulse">
              <Download />
              Download Pitch Deck
            </Button>
            <Button className="bg-finance-600 hover:bg-finance-700 flex items-center gap-2 text-lg py-6 px-6">
              <Phone />
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
