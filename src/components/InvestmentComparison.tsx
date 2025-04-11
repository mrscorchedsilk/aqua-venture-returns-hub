
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const InvestmentComparison = () => {
  const [activeTab, setActiveTab] = useState("real-estate");
  
  return (
    <section id="comparison" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4">Why Aquaculture Beats Traditional Investing</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Compare aquaculture investment returns with traditional investment vehicles to see why smart capital is flowing to this sector.
        </p>
        
        <Tabs defaultValue="real-estate" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
            <TabsTrigger value="real-estate" className="data-[state=active]:bg-aqua-100 data-[state=active]:text-aqua-800">Real Estate</TabsTrigger>
            <TabsTrigger value="mutual-funds" className="data-[state=active]:bg-aqua-100 data-[state=active]:text-aqua-800">Mutual Funds</TabsTrigger>
            <TabsTrigger value="fixed-deposits" className="data-[state=active]:bg-aqua-100 data-[state=active]:text-aqua-800">Fixed Deposits</TabsTrigger>
            <TabsTrigger value="poultry" className="data-[state=active]:bg-aqua-100 data-[state=active]:text-aqua-800">Poultry</TabsTrigger>
            <TabsTrigger value="startups" className="data-[state=active]:bg-aqua-100 data-[state=active]:text-aqua-800">Startups</TabsTrigger>
          </TabsList>
          
          <TabsContent value="real-estate" className="mt-0">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Aquaculture vs Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-aqua-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center mr-3">
                        <span className="text-aqua-700">A</span>
                      </div>
                      Aquaculture
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>15-20% annual returns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Annual payouts in predictable windows</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Quick production cycles (8-12 months)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Cash-based business with clear liquidity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>No maintenance or tenant issues</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700">R</span>
                      </div>
                      Real Estate
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>3-5% rental yields (excl. appreciation)</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Highly illiquid asset class</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Multi-year horizon for meaningful returns</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Potential legal headaches and title issues</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>High maintenance costs and tenant management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mutual-funds" className="mt-0">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Aquaculture vs Mutual Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-aqua-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center mr-3">
                        <span className="text-aqua-700">A</span>
                      </div>
                      Aquaculture
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>15-20% returns with low volatility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Food production with stable demand</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Not dependent on market sentiment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Real asset-backed investment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Full transparency in operations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700">M</span>
                      </div>
                      Mutual Funds
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>8-12% historical returns with high volatility</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Market dependency and volatility</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Subject to economic cycles and market crashes</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Management fees reduce actual returns</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Limited visibility into underlying investments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fixed-deposits" className="mt-0">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Aquaculture vs Fixed Deposits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-aqua-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center mr-3">
                        <span className="text-aqua-700">A</span>
                      </div>
                      Aquaculture
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>15-20% annual returns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Asset-backed with real operations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Lower taxes with proper structuring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Capital protection with return of CapEx</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Hedge against inflation (food prices rise)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700">F</span>
                      </div>
                      Fixed Deposits
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>6-7% returns, fully taxable</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Returns below inflation in many years</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>TDS applicable on interest earned</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>No hedge against inflation</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Penalties for early withdrawal</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="poultry" className="mt-0">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Aquaculture vs Poultry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-aqua-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center mr-3">
                        <span className="text-aqua-700">A</span>
                      </div>
                      Aquaculture
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Live stock holding possible for weeks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Lower mortality rates with proper management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Longer shelf life of harvested product</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>More resistant to disease outbreaks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Less daily management required</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700">P</span>
                      </div>
                      Poultry
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Must sell birds quickly after maturity</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Higher mortality risk</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Shorter shelf life for product</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Vulnerable to disease outbreaks</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Requires intensive daily management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="startups" className="mt-0">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Aquaculture vs Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-aqua-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center mr-3">
                        <span className="text-aqua-700">A</span>
                      </div>
                      Aquaculture
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Established market with proven demand</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Real physical assets backing investment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Experienced team with decades in food production</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Annual returns rather than exit-dependent</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Government support through PMMSY and NABARD</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700">S</span>
                      </div>
                      Startups
                    </h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Unproven business models and markets</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Often no physical assets, only IP</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Often first-time founders</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>Returns dependent on exit events (5-10 years)</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span>High burn rates with extended unprofitability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-aqua-800 mb-8">Government Support for Aquaculture</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-aqua-700">PMMSY (Pradhan Mantri Matsya Sampada Yojana)</h4>
              <p className="text-gray-700 mb-4">
                A flagship scheme for focused and sustainable development of the fisheries sector with an investment of ₹20,050 crores for 2020-21 to 2024-25.
              </p>
              <div className="flex items-center mt-4">
                <ArrowRight className="text-aqua-500 mr-2" size={18} />
                <span className="text-sm text-gray-600">Subsidies and financial support for commercial fish farming</span>
              </div>
            </div>
            
            <div className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-aqua-700">NABARD Support</h4>
              <p className="text-gray-700 mb-4">
                The National Bank for Agriculture and Rural Development provides refinancing facilities and project funding for large-scale aquaculture ventures.
              </p>
              <div className="flex items-center mt-4">
                <ArrowRight className="text-aqua-500 mr-2" size={18} />
                <span className="text-sm text-gray-600">Low-interest loans and technical assistance for fisheries projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentComparison;
