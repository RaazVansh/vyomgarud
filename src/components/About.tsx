import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Strategic Defense Innovation"
          subtitle="Pioneering the future of autonomous aerial systems with uncompromising reliability and precision"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                VyomGarud stands at the forefront of UAV technology, delivering military-grade 
                drone systems engineered for the most demanding operational environments.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our systems are built with cutting-edge autonomy, advanced sensor fusion, 
                and robust communication protocols to ensure mission success in critical scenarios.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-900 rounded-lg border-l-4 border-orange-500">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                  <div className="text-gray-300">Readiness</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-lg border-l-4 border-orange-500">
                  <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
                  <div className="text-gray-300">Reliability</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-transparent opacity-20 w-full h-80 rounded-lg"></div>
            <div className="absolute inset-0 border border-orange-500 rounded-lg transform rotate-3 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;