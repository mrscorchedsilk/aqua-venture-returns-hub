
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const FloatingCalculator = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Button 
      onClick={scrollToCalculator}
      className="sticky-calc-button animate-float"
      aria-label="Calculate your profits"
    >
      <Calculator size={18} />
      <span>Calculate Your Profits</span>
    </Button>
  );
};

export default FloatingCalculator;
