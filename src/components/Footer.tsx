'use client';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message received. Our team will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              Ready to deploy advanced UAV solutions? Contact our defense specialists.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Requirements"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">VyomGarud</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400">
                <span className="mr-4">📍</span>
                <span>Defense Innovation Park, Sector 7, New Delhi, India</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <span className="mr-4">📞</span>
                <span>+91 8881444693</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <span className="mr-4">✉️</span>
                <span>contact@vyomgarud.com</span>
                <span>BUILD BY VANSH RAJ</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About</a>
                <a href="#capabilities" className="text-gray-400 hover:text-orange-500 transition-colors">Capabilities</a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Technology</a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 VyomGarud Defense Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;