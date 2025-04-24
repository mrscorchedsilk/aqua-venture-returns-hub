
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto mb-12">Why Invest with RR Aqua Ventures</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Rajnish Kumar is an experienced progressive fish farmer that is currently managing over 100+ Acres of India Major Carp, Pangacius and Tilipia farming in North India. With an experience of 6 years and 104,000 youtube subscribers.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              He is well known in the aquaculture industry with university professors and talent, top factories, feed mills and raw material suppliers and industry experts and consultants.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              He has a team of 20 people that are experienced in managing a fish farm, ensuring high survival rates and low mortality, water quality, feed management, finance management and growth-out management.
            </p>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/3ac170d7-d03a-4207-ab90-d1169964dae7.png"
              alt="Rajnish Kumar - RR Aqua Ventures Founder"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
