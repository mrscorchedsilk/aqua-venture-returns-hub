import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Factory, TrendingUp, Users, LineChart, ClipboardCheck, BarChart3 } from "lucide-react";

const CompanyAdvantage = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4 font-glitten-caps">What Sets RR Aqua Ventures Apart</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Our competitive advantages ensure optimal returns while managing risk through operational excellence and strategic market positioning.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">In-house Feed Production</h3>
              <p className="text-center text-gray-600">
                Our 1 TPH fish feed plant in Aligarh ensures complete control over the most critical input (60%+ of farming cost).
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">Optimized Feed Conversion</h3>
              <p className="text-center text-gray-600">
                FCR-optimized, scientifically designed feed from 20+ years in food manufacturing ensures maximum growth efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">Expert Management</h3>
              <p className="text-center text-gray-600">
                Rajnish Kumar: Over 6 years of farming 100+ acres, with 400,000 kg annual fish production expertise.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <LineChart className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">Scale Advantage</h3>
              <p className="text-center text-gray-600">
                1100+ acres of government-leased land under exclusive contract enables economies of scale unavailable to smaller operations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <ClipboardCheck className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">Local Authority Connections</h3>
              <p className="text-center text-gray-600">
                Management team is deeply connected with local authorities & markets, ensuring smooth operations and problem resolution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 mb-6 bg-aqua-100 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-aqua-800">Professional Financial Tracking</h3>
              <p className="text-center text-gray-600">
                High focus on mortality reduction, cost minimization, and structured payout windows with complete transparency.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-aqua-800 mb-8 font-glitten-caps">Management Team</h3>
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
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantage;
