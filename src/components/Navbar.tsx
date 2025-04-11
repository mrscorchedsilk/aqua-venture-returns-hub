
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-aqua-800">RR <span className="text-finance-600">Aqua</span> Ventures</h1>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-8 mr-8">
              <a href="#investment" className="text-gray-600 hover:text-aqua-700 transition-colors">Investment</a>
              <a href="#location" className="text-gray-600 hover:text-aqua-700 transition-colors">Location</a>
              <a href="#comparison" className="text-gray-600 hover:text-aqua-700 transition-colors">Comparison</a>
              <a href="#about" className="text-gray-600 hover:text-aqua-700 transition-colors">About</a>
            </nav>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                <span className="hidden sm:inline">Pitch Deck</span>
              </Button>
              <Button className="bg-aqua-600 hover:bg-aqua-700 flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden sm:inline">Book a Call</span>
              </Button>
            </div>
          </div>
          
          <button className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
