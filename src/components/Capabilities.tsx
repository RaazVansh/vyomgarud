'use client';
import React from 'react';
import SectionTitle from './SectionTitle';

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Tactical Surveillance",
      description: "Long-endurance ISR platforms with advanced EO/IR systems and real-time data streaming",
      features: ["360° surveillance", "Night vision", "30km range"],
      icon: "🛰️"
    },
    {
      title: "Autonomous Swarm",
      description: "Coordinated multi-drone operations for comprehensive area coverage and redundant systems",
      features: ["AI coordination", "Dynamic tasking", "Collision avoidance"],
      icon: "🐝"
    },
    {
      title: "Payload Delivery",
      description: "Heavy-lift UAV systems designed for critical supply delivery in contested environments",
      features: ["15kg capacity", "Precision drop", "All-weather"],
      icon: "📦"
    },
    {
      title: "Communication Relay",
      description: "Airborne communication nodes extending network coverage in remote operations",
      features: ["Mesh networking", "Secure links", "Long endurance"],
      icon: "📡"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Advanced Capabilities"
          subtitle="Comprehensive UAV solutions engineered for defense and security applications"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                {capability.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {capability.description}
              </p>
              
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;