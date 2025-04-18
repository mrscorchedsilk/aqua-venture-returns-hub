
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { IndianRupee } from "lucide-react";

const ProjectedReturnSlider = () => {
  const [investment, setInvestment] = useState<number>(32);
  // The actual ROI is 15% on the OPEX portion (20 lakhs per 32 lakhs invested)
  const opexPortion = 0.625; // 20L/32L = 62.5% of investment is OPEX
  const annualReturnRate = 0.15; // 15% guaranteed return on OPEX portion
  
  const handleSliderChange = (value: number[]) => {
    setInvestment(value[0]);
  };
  
  const calculateReturn = (amount: number) => {
    // Calculate OPEX portion for this investment amount
    const opexAmount = amount * opexPortion;
    // Calculate return on OPEX portion
    return opexAmount * annualReturnRate;
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount * 100000); // Convert lakhs to rupees
  };

  const calculateEffectiveReturn = (amount: number) => {
    const annualReturn = calculateReturn(amount);
    const effectivePercentage = (annualReturn / amount) * 100;
    return effectivePercentage.toFixed(2);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Projected Annual Returns</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Investment Amount (₹ in Lakhs)</label>
          <Slider
            defaultValue={[32]}
            min={32}
            max={100}
            step={1}
            onValueChange={handleSliderChange}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹32L</span>
            <span>₹100L</span>
          </div>
        </div>
        
        <div className="p-4 bg-finance-50 rounded-lg">
          <div className="flex items-center gap-2 text-2xl font-bold text-finance-700">
            <IndianRupee className="h-6 w-6" />
            <span>
              {formatCurrency(calculateReturn(investment))}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Projected Annual Return (~{calculateEffectiveReturn(investment)}% effective ROI)
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Based on 15% return on operational expenditure
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectedReturnSlider;
