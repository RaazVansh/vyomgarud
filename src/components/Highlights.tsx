import React from 'react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "Military Grade Durability",
      description: "Built to withstand extreme conditions and electromagnetic interference",
      metric: "IP67 Rated"
    },
    {
      title: "Advanced Autonomy",
      description: "AI-powered decision making and autonomous mission execution",
      metric: "Level 4 Autonomy"
    },
    {
      title: "Secure Communications",
      description: "Encrypted data links with anti-jamming capabilities",
      metric: "AES-256 Encryption"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{highlight.metric}</span>
                </div>
                <div className="absolute inset-0 border-2 border-orange-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;