import React from 'react';
import { CardContent } from "@/components/ui/card";
import { Factory, TrendingUp, Users, LineChart, ClipboardCheck, BarChart3, Fish } from "lucide-react";
import GlowingCard from './GlowingCard';
import { motion } from "framer-motion";

const CompanyAdvantage = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4">What Sets RR Aqua Ventures Apart</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Our competitive advantages ensure optimal returns while managing risk through operational excellence and strategic market positioning.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Factory className="h-8 w-8 text-aqua-600" />,
              title: "In-house Feed Production",
              description: "Our 1 TPH fish feed plant in Aligarh ensures complete control over the most critical input (60%+ of farming cost).",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-aqua-600" />,
              title: "Optimized Feed Conversion",
              description: "FCR-optimized, scientifically designed feed from 20+ years in food manufacturing ensures maximum growth efficiency.",
            },
            {
              icon: <Users className="h-8 w-8 text-aqua-600" />,
              title: "Expert Management",
              description: "Rajnish Kumar: Over 6 years of farming 100+ acres, with 400,000 kg annual fish production expertise.",
            },
            {
              icon: <LineChart className="h-8 w-8 text-aqua-600" />,
              title: "Scale Advantage",
              description: "1100+ acres of government-leased land under exclusive contract enables economies of scale unavailable to smaller operations.",
            },
            {
              icon: <ClipboardCheck className="h-8 w-8 text-aqua-600" />,
              title: "Local Authority Connections",
              description: "Management team is deeply connected with local authorities & markets, ensuring smooth operations and problem resolution.",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-aqua-600" />,
              title: "Professional Financial Tracking",
              description: "High focus on mortality reduction, cost minimization, and structured payout windows with complete transparency.",
            },
          ].map((card, index) => (
            <GlowingCard key={index} glowColor="#0ea5e9">
              <CardContent className="pt-8">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto"
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">{card.title}</h3>
                <p className="text-center text-gray-600">{card.description}</p>
              </CardContent>
            </GlowingCard>
          ))}
        </div>
        
        <GlowingCard className="p-8" glowColor="#0f766e">
          <h3 className="text-2xl font-bold text-center text-aqua-800 mb-8">Management Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-aqua-300 to-aqua-600 flex items-center justify-center text-white text-3xl font-bold">
                  RK
                </div>
              </div>
              <h4 className="font-bold text-lg text-gray-900">Rajnish Kumar</h4>
              <p className="text-gray-600 text-sm">Aquaculture Operations Expert</p>
              <p className="text-gray-500 text-sm mt-2">
                6+ years experience in large-scale commercial fish farming
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-finance-300 to-finance-600 flex items-center justify-center text-white text-3xl font-bold">
                  AB
                </div>
              </div>
              <h4 className="font-bold text-lg text-gray-900">Aditya Birla</h4>
              <p className="text-gray-600 text-sm">Feed Production Specialist</p>
              <p className="text-gray-500 text-sm mt-2">
                20+ years in food manufacturing and processing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-aqua-300 to-finance-600 flex items-center justify-center text-white text-3xl font-bold">
                  VS
                </div>
              </div>
              <h4 className="font-bold text-lg text-gray-900">Vikram Singh</h4>
              <p className="text-gray-600 text-sm">Finance & Investor Relations</p>
              <p className="text-gray-500 text-sm mt-2">
                15+ years in agricultural finance and investment
              </p>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};

export default CompanyAdvantage;
