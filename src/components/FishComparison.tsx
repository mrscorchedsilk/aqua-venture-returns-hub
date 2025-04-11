
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const FishComparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4">Why IMC? (Indian Major Carp)</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Indian Major Carp represents the ideal balance of market demand, growth potential, and operational efficiency.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg border-t-4 border-t-aqua-600">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>IMC</span>
                <span className="text-sm bg-green-100 text-green-800 py-1 px-3 rounded-full">Recommended</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Highest sold & consumed fish in India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Fast growth and high survivability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Stable selling price year-round</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Strong domestic demand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Live fish fetch higher rates than frozen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Culturally accepted across India</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-aqua-800 mb-2">Perfect Market Fit</h4>
                <p className="text-gray-600 text-sm">
                  IMC fits domestic demand perfectly, enabling stable pricing and high volume turnover.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle>Tilapia</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Lower demand in Indian market</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Fast growth rate</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Price fluctuations based on supply</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Not culturally accepted in most of India</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Limited premium market options</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Requires specialized marketing</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Market Challenges</h4>
                <p className="text-gray-600 text-sm">
                  Despite fast growth, Tilapia faces cultural and market acceptance challenges in India.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle>Shrimp</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>High market value</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Export-based market dynamics</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>High operational expenses (OPEX)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Low domestic margin</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Higher disease risk</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Greater technical expertise required</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">High Risk, Variable Returns</h4>
                <p className="text-gray-600 text-sm">
                  Shrimp farming offers high potential returns but with significantly higher risk and operational complexity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-aqua-800 mb-8">IMC Market Advantages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-aqua-700 text-3xl font-bold">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Market Share</h4>
              <p className="text-gray-600 text-sm">
                IMC represents over 70% of freshwater fish consumed in the Indian market
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-aqua-700 text-3xl font-bold">15%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Price</h4>
              <p className="text-gray-600 text-sm">
                Live IMC commands a 15% price premium over frozen alternatives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-aqua-700 text-3xl font-bold">90%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Survival Rate</h4>
              <p className="text-gray-600 text-sm">
                IMC achieves up to 90% survival rate with proper management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FishComparison;
