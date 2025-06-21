import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionaries behind Ecka Holdings, where expertise meets passion in music IP management.
          </p>
        </div>

        {/* Concert Image */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/3574d0f5-35b9-40b9-8fd6-1905728b2c7d.png" 
            alt="Live concert performance"
            className="w-full h-64 object-cover object-[center_60%] rounded-2xl shadow-xl"
            onError={(e) => {
              console.log('Concert image failed to load:', e);
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&h=600";
            }}
          />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform">
            <img 
              src="/lovable-uploads/e449895d-6844-4459-9526-9669455ca999.png" 
              alt="Team Member 1" 
              className="w-full h-48 object-cover rounded-xl mb-4" 
              onError={(e) => {
                console.log('Team member image failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">Avery Johnson</h3>
            <p className="text-gray-300">CEO & Founder</p>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform">
            <img 
              src="/lovable-uploads/9919795f-9c5e-4a5f-b991-9e6c0a59ca46.png" 
              alt="Team Member 2" 
              className="w-full h-48 object-cover rounded-xl mb-4"
              onError={(e) => {
                console.log('Team member image failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">Jordan Michael</h3>
            <p className="text-gray-300">Creative Director</p>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform">
            <img 
              src="/lovable-uploads/4995991d-586d-4995-813c-eb48995ef691.png" 
              alt="Team Member 3" 
              className="w-full h-48 object-cover rounded-xl mb-4"
              onError={(e) => {
                console.log('Team member image failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">Sarah Williams</h3>
            <p className="text-gray-300">IP Strategist</p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="mt-20 bg-[#1A1A1A] rounded-2xl p-8 border border-[#C9A34C]/20">
          <h4 className="text-2xl font-bold text-white mb-6">Upcoming Events</h4>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-[#C9A34C] mr-2" />
              <span className="text-gray-300">15 Nov 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-[#C9A34C] mr-2" />
              <span className="text-gray-300">Los Angeles, CA</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-[#C9A34C] mr-2" />
              <span className="text-gray-300">7:00 PM</span>
            </div>
          </div>
          <p className="text-gray-300">
            Join us for an exclusive showcase of emerging talent and groundbreaking IP strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
