
import React from 'react';
import LeadForm from './LeadForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black transition-all duration-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in transition-all duration-300 hover:text-[#C9A34C]">Ready to Partner with Us?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300">
          Schedule a call to discuss investment opportunities and learn more about our approach to music IP investing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30 hover:border-[#C9A34C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A34C]/20 hover:-translate-y-2 transform animate-fade-in animation-delay-500">
            <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300 hover:text-[#C9A34C]">Schedule a Call</h3>
            <p className="text-gray-300 mb-6 transition-colors duration-300">
              Book a confidential discussion about our current opportunities and investment thesis.
            </p>
            <LeadForm>
              <button className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform w-full">
                Schedule Intro Call
              </button>
            </LeadForm>
          </div>
          
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30 hover:border-[#C9A34C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A34C]/20 hover:-translate-y-2 transform animate-fade-in animation-delay-700">
            <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300 hover:text-[#C9A34C]">Request Materials</h3>
            <p className="text-gray-300 mb-6 transition-colors duration-300">
              Get access to our investor overview and portfolio performance data.
            </p>
            <LeadForm>
              <button className="border-2 border-[#C9A34C] hover:bg-[#C9A34C] text-[#C9A34C] hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform w-full">
                Request Overview
              </button>
            </LeadForm>
          </div>
        </div>
        
        <div className="text-center animate-fade-in animation-delay-900">
          <p className="text-gray-400 mb-2">Direct inquiries:</p>
          <a href="mailto:info@eckaholdings.com" className="text-[#C9A34C] hover:text-[#B8923E] font-medium text-lg transition-all duration-300 hover:scale-105 inline-block">
            info@eckaholdings.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
