'use client';
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ff7b00 1px, transparent 1px),
                           linear-gradient(90deg, #ff7b00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          VYOM<span className="gradient-text">GARUD</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Advanced UAV Systems for Defense & Security
          <br />
          <span className="text-lg text-orange-500">Precision Engineering • Military Grade • Autonomous Operations</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            Deploy Solutions
          </button>
          <button className="px-8 py-4 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:bg-opacity-10 transition-all duration-300">
            View Capabilities
          </button>
        </div>

        {/* Drone Visual Placeholder */}
        <div className="relative h-64 md:h-96 flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-orange-500 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange-500 to-transparent rounded-full opacity-20 animate-spin-slow"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;