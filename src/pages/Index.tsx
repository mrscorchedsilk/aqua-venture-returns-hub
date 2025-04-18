
import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnimatedStats from "@/components/AnimatedStats";
import InvestmentBreakdown from "@/components/InvestmentBreakdown";
import LocationAdvantage from "@/components/LocationAdvantage";
import FishComparison from "@/components/FishComparison";
import ProjectedReturnSlider from "@/components/ProjectedReturnSlider";
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
        <AnimatedStats />
        <InvestmentBreakdown />
        <LocationAdvantage />
        <FishComparison />
        <ProjectedReturnSlider />
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
