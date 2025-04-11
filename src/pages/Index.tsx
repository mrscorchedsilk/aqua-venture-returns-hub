
import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InvestmentBreakdown from "@/components/InvestmentBreakdown";
import LocationAdvantage from "@/components/LocationAdvantage";
import FishComparison from "@/components/FishComparison";
import InvestmentComparison from "@/components/InvestmentComparison";
import CompanyAdvantage from "@/components/CompanyAdvantage";
import ReturnCalculator from "@/components/ReturnCalculator";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingCalculator from "@/components/FloatingCalculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <title>Open Deals – Invest in Commercial Fish Farming | RR Aqua Ventures</title>
      <Navbar />
      <main>
        <HeroSection />
        <InvestmentBreakdown />
        <LocationAdvantage />
        <FishComparison />
        <InvestmentComparison />
        <CompanyAdvantage />
        <ReturnCalculator />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingCalculator />
    </div>
  );
};

export default Index;
