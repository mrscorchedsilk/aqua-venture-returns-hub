
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const InvestmentBreakdown = () => {
  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto">Investment Opportunity Breakdown</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A structured investment approach with clear payout windows and operational transparency.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg border-t-4 border-t-aqua-500">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800">Minimum Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-finance-700">₹32 Lakhs</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>₹20 Lakhs OPEX (used across farming operations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>₹12 Lakhs CapEx + Marketing (returned to investor at end)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-aqua-500">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800">Returns & Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-finance-700">15–20% p.a.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Payout Window: November–January</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Land Lease: 10 years (Government land in Taleb Baghel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Contract-backed operational involvement with audited reports</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-aqua-500 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800">Investment Tranches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-finance-700">Structured Approach</p>
              <div className="space-y-4">
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    Q1
                  </div>
                  <p>₹10 Lakhs - Initial investment to secure pond preparation</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    Q2
                  </div>
                  <p>₹5 Lakhs - Feed and operational expenses</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    Q3
                  </div>
                  <p>₹5 Lakhs - Continued operations and marketing</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    Q4
                  </div>
                  <p>₹10 Lakhs - Harvest preparation and market positioning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-aqua-800 mb-6">Investment Flow</h3>
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center max-w-lg">
              <p className="text-lg font-medium text-gray-800">Initial Capital Investment</p>
              <p className="text-gray-600">Structured tranches to optimize cash flow and maximize returns</p>
            </div>
            
            <ArrowDown className="text-aqua-500" size={36} />
            
            <div className="text-center max-w-lg">
              <p className="text-lg font-medium text-gray-800">Operational Excellence</p>
              <p className="text-gray-600">Scientific farming with in-house feed production and expert management</p>
            </div>
            
            <ArrowDown className="text-aqua-500" size={36} />
            
            <div className="text-center max-w-lg">
              <p className="text-lg font-medium text-gray-800">Premium Market Access</p>
              <p className="text-gray-600">Direct sales to live fish markets at premium pricing</p>
            </div>
            
            <ArrowDown className="text-aqua-500" size={36} />
            
            <div className="text-center max-w-lg">
              <p className="text-lg font-medium text-gray-800">Annual Returns (15-20%)</p>
              <p className="text-gray-600">Distributed during Nov-Jan window with full financial transparency</p>
            </div>
            
            <ArrowDown className="text-aqua-500" size={36} />
            
            <div className="text-center max-w-lg">
              <p className="text-lg font-medium text-gray-800">Capital Return</p>
              <p className="text-gray-600">₹12 Lakhs CapEx returned at end of investment cycle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBreakdown;
