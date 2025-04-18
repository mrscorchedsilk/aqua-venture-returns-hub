
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { IndianRupee } from "lucide-react";

const ProjectedReturnSlider = () => {
  const [investment, setInvestment] = useState<number>(32);
  const annualReturnRate = 0.18; // 18% return rate
  
  const handleSliderChange = (value: number[]) => {
    setInvestment(value[0]);
  };
  
  const calculateReturn = (amount: number) => {
    return amount * annualReturnRate;
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount * 100000); // Convert lakhs to rupees
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
          <p className="text-sm text-gray-600 mt-1">Projected Annual Return</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectedReturnSlider;
