
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Droplet, Map, Truck, DollarSign, Users, Shield, TrendingUp } from "lucide-react";

const LocationAdvantage = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-4">Why Taleb Baghel?</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Our strategic location in Taleb Baghel, Uttar Pradesh provides unique advantages that maximize both production efficiency and market access.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div 
              className="h-full rounded-xl overflow-hidden shadow-lg"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px"
              }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <MapPin className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">1100+ Acres</h3>
                    <p className="text-sm text-gray-600">Government-leased land at ultra-low cost</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Droplet className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Water Access</h3>
                    <p className="text-sm text-gray-600">Only 8 feet to reach groundwater — practically unlimited</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Shield className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Perfect Soil</h3>
                    <p className="text-sm text-gray-600">Mineral-rich clay soil — ideal for aquaculture pond health</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Map className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Location</h3>
                    <p className="text-sm text-gray-600">Near premium live fish markets in Lucknow, Bhariach, and Gonda</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Truck className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">4-Lane Highway</h3>
                    <p className="text-sm text-gray-600">Excellent logistics access for efficient distribution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <DollarSign className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Pricing</h3>
                    <p className="text-sm text-gray-600">Market proximity allows sale of live fish at premium rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Users className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Support Network</h3>
                    <p className="text-sm text-gray-600">High density of aquaculture extension officers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow border-l-4 border-l-aqua-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <TrendingUp className="text-aqua-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scale Economics</h3>
                    <p className="text-sm text-gray-600">Massive scale = cost compression = investor margin boost</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-aqua-800 mb-4">Logistics Map & Market Access</h3>
          <div className="bg-gray-100 rounded-lg p-4 text-center h-80 flex items-center justify-center">
            <p className="text-gray-500 italic">Interactive map showing proximity to key markets like Lucknow, Bhariach, and Gonda would appear here.</p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-aqua-700 mb-2">Premium Market Access</h4>
            <p className="text-gray-700">
              Our strategic location near Lucknow (the fish capital of UP) and other major markets enables us to supply live fish directly to consumers and retailers. Live fish command a premium of 15-20% over frozen alternatives, significantly boosting investor returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
