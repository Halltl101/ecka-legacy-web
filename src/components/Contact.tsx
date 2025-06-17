
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Schedule a call to discuss investment opportunities and learn more about our approach to music IP investing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30">
            <h3 className="text-xl font-semibold text-white mb-4">Schedule a Call</h3>
            <p className="text-gray-300 mb-6">
              Book a confidential discussion about our current opportunities and investment thesis.
            </p>
            <button className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-8 py-3 rounded-lg font-semibold transition-colors w-full">
              Schedule Intro Call
            </button>
          </div>
          
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30">
            <h3 className="text-xl font-semibold text-white mb-4">Request Materials</h3>
            <p className="text-gray-300 mb-6">
              Get access to our investor overview and portfolio performance data.
            </p>
            <button className="border-2 border-[#C9A34C] hover:bg-[#C9A34C] text-[#C9A34C] hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors w-full">
              Request Overview
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 mb-2">Direct inquiries:</p>
          <a href="mailto:info@eckamusicgroup.com" className="text-[#C9A34C] hover:text-[#B8923E] font-medium text-lg transition-colors">
            info@eckamusicgroup.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
