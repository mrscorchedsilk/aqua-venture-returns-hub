
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Phone, MessageSquare, Calculator } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-aqua-800 to-finance-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Investment?</h2>
          <p className="text-xl opacity-90">
            Take the next step towards 15-20% annual returns with India's most scalable fish farming fund.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white h-auto py-6 flex-col items-center justify-center gap-3">
            <Download size={24} />
            <span className="text-base font-medium">Download Pitch Deck</span>
          </Button>
          
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white h-auto py-6 flex-col items-center justify-center gap-3">
            <Phone size={24} />
            <span className="text-base font-medium">Book a Call</span>
          </Button>
          
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white h-auto py-6 flex-col items-center justify-center gap-3">
            <MessageSquare size={24} />
            <span className="text-base font-medium">Ask a Question on WhatsApp</span>
          </Button>
          
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white h-auto py-6 flex-col items-center justify-center gap-3">
            <Calculator size={24} />
            <span className="text-base font-medium">Calculate Your Profits</span>
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-aqua-300" />
            <span>+91 97XXXXXX88</span>
          </div>
          
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-aqua-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>invest@rraquaventures.com</span>
          </div>
          
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-aqua-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Taleb Baghel, UP & Aligarh Feed Plant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
