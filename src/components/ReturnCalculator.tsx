
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReturnCalculator = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    investment: '',
    stage: 'browsing',
  });
  const [calculatedReturns, setCalculatedReturns] = useState({
    annualReturn: 0,
    totalReturn: 0,
    capexReturn: 0,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, stage: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.investment) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Calculate returns (simple example)
    const investmentAmount = parseFloat(formData.investment) * 100000; // Convert lakhs to rupees
    const annualReturnRate = 0.18; // 18% average return
    const annualReturn = investmentAmount * annualReturnRate;
    const capexPortion = investmentAmount * 0.375; // 37.5% of investment is CapEx (₹12L of ₹32L)
    
    setCalculatedReturns({
      annualReturn: annualReturn,
      totalReturn: annualReturn,
      capexReturn: capexPortion,
    });
    
    // Show results
    setShowForm(false);
    
    // Simulate sending to backend/CRM
    console.log("Sending lead to CRM:", formData);
    
    toast({
      title: "Calculation Complete",
      description: "Your investment returns have been calculated.",
    });
  };
  
  const resetCalculator = () => {
    setShowForm(true);
    setFormData({
      name: '',
      phone: '',
      investment: '',
      stage: 'browsing',
    });
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4">Calculate Your Aquaculture Profits</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          See exactly what your returns could be with our transparent investment model.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-t-4 border-t-finance-600">
            <CardHeader className="bg-finance-50 border-b border-gray-100">
              <CardTitle className="text-2xl text-finance-800">Investment Return Calculator</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              {showForm ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="investment">Investment Capacity (₹ in Lakhs)</Label>
                    <Input 
                      id="investment" 
                      name="investment" 
                      type="number" 
                      min="32" 
                      placeholder="Minimum ₹32 Lakhs" 
                      value={formData.investment}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-sm text-gray-500">Minimum investment is ₹32 Lakhs</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Stage of Decision</Label>
                    <RadioGroup value={formData.stage} onValueChange={handleRadioChange}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="browsing" id="browsing" />
                        <Label htmlFor="browsing" className="font-normal">Just Browsing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consideration" id="consideration" />
                        <Label htmlFor="consideration" className="font-normal">Consideration Phase</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="interested" id="interested" />
                        <Label htmlFor="interested" className="font-normal">Interested</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-interested" id="not-interested" />
                        <Label htmlFor="not-interested" className="font-normal">Not Interested</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fish-farmer" id="fish-farmer" />
                        <Label htmlFor="fish-farmer" className="font-normal">I am a Fish Farmer</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" className="w-full bg-finance-600 hover:bg-finance-700 text-lg py-6">
                    Calculate My Profits
                  </Button>
                </form>
              ) : (
                <div className="space-y-8">
                  <div className="text-center p-6 bg-finance-50 rounded-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Your Investment Summary</h3>
                    <p className="text-gray-600">Based on {formatCurrency(parseFloat(formData.investment) * 100000)} investment</p>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Annual Return</h4>
                      <p className="text-2xl font-bold text-finance-700">{formatCurrency(calculatedReturns.annualReturn)}</p>
                      <p className="text-xs text-gray-500 mt-1">15-20% per annum</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Capital Return</h4>
                      <p className="text-2xl font-bold text-finance-700">{formatCurrency(calculatedReturns.capexReturn)}</p>
                      <p className="text-xs text-gray-500 mt-1">At end of investment cycle</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Payout Window</h4>
                      <p className="text-2xl font-bold text-finance-700">Nov-Jan</p>
                      <p className="text-xs text-gray-500 mt-1">Annual distribution</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">Investment Notes:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-aqua-500 mr-2">•</span>
                        <span>Returns calculated at 18% annual rate (actual range: 15-20%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-aqua-500 mr-2">•</span>
                        <span>₹{(parseFloat(formData.investment) * 0.375).toFixed(2)} Lakhs CapEx returned at end of cycle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-aqua-500 mr-2">•</span>
                        <span>Investment tranches spread across 4 quarters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-aqua-500 mr-2">•</span>
                        <span>Returns paid during Nov-Jan harvest window</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-aqua-600 hover:bg-aqua-700 text-lg py-6">
                      Book a Call to Finalize Investment
                    </Button>
                    <Button variant="outline" onClick={resetCalculator} className="w-full text-lg py-6">
                      Reset Calculator
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReturnCalculator;
