import React from 'react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Fish } from "lucide-react";
import InvestmentFlowChart from './InvestmentFlowChart';
import GlowingCard from './GlowingCard';
import { motion } from "framer-motion";

const InvestmentBreakdown = () => {
  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto">Investment Opportunity Breakdown</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A structured investment approach with clear payout windows and operational transparency.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <GlowingCard className="border-t-4 border-t-aqua-500" glowColor="#0ea5e9">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800 flex items-center gap-2">
                <Fish className="h-5 w-5" />
                Minimum Investment
              </CardTitle>
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
                  <span>₹10 Lakhs CapEx (pond digging, basic infrastructure)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>₹2 Lakhs Working Capital (marketing, contingencies)</span>
                </li>
              </ul>
            </CardContent>
          </GlowingCard>
          
          <GlowingCard className="border-t-4 border-t-aqua-500" glowColor="#0ea5e9">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800 flex items-center gap-2">
                <Fish className="h-5 w-5" />
                Returns & Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-finance-700">15% p.a.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>First Payout: November 2026</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Annual Payout Window: November-January</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Land Lease: 7-10 years (Government land in Taleb Baghel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-500 mr-2">•</span>
                  <span>Full principal returned at end of fund term</span>
                </li>
              </ul>
            </CardContent>
          </GlowingCard>
          
          <GlowingCard className="border-t-4 border-t-aqua-500 md:col-span-2 lg:col-span-1" glowColor="#0ea5e9">
            <CardHeader>
              <CardTitle className="text-xl text-aqua-800 flex items-center gap-2">
                <Fish className="h-5 w-5" />
                Investment Tranches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4 text-finance-700">Structured Approach</p>
              <div className="space-y-4">
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    1
                  </div>
                  <p>₹12 Lakhs - Initial investment</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    2
                  </div>
                  <p>₹5 Lakhs - Second tranche</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-aqua-400">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    3
                  </div>
                  <p>₹5 Lakhs - Third tranche</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-aqua-500 text-white">
                    4
                  </div>
                  <p>₹10 Lakhs - Final tranche</p>
                </div>
              </div>
            </CardContent>
          </GlowingCard>
        </div>
        
        <GlowingCard className="p-8" glowColor="#0f766e">
          <h3 className="text-3xl font-bold text-center text-aqua-800 mb-6">Investment Flow</h3>
          <InvestmentFlowChart />
        </GlowingCard>
      </div>
    </section>
  );
};

export default InvestmentBreakdown;
