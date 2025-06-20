import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { ArrowLeft, Music, Briefcase, Users, Scale, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Leadership Team",
      members: [
        {
          name: "John Doe",
          title: "CEO",
          description: "Experienced executive with a background in entertainment and finance.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        },
        {
          name: "Jane Smith",
          title: "COO",
          description: "Operations expert with a track record of successful project management.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        }
      ]
    },
    {
      name: "Investment Committee",
      members: [
        {
          name: "Richard Roe",
          title: "Head of Investments",
          description: "Investment strategist with expertise in asset allocation and risk management.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        },
        {
          name: "Alice Johnson",
          title: "Investment Analyst",
          description: "Financial analyst specializing in market research and investment opportunities.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        }
      ]
    },
    {
      name: "Advisory Board",
      members: [
        {
          name: "Bob Williams",
          title: "Strategic Advisor",
          description: "Seasoned advisor with a wealth of knowledge in business development and strategy.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        },
        {
          name: "Carol Davis",
          title: "Legal Counsel",
          description: "Legal expert providing guidance on regulatory compliance and legal matters.",
          image: "https://via.placeholder.com/150",
          linkedin: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto py-20 px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-[#C9A34C] hover:text-[#B8923E] transition-colors duration-300">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>

        {teamMembers.map((team, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-[#C9A34C]">{team.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.members.map((member, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-3">{member.title}</p>
                  <p className="text-gray-300 mb-4">{member.description}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C9A34C] hover:text-[#B8923E] transition-colors duration-300 flex items-center">
                    LinkedIn
                    <ArrowLeft className="ml-1 w-4 h-4 transform rotate-180" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-black py-8 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/ecka-logo.png" 
              alt="Ecka Holdings Logo" 
              className="h-8 w-auto mr-3"
              onError={(e) => {
                console.log('Footer logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <span className="text-2xl font-bold text-white">ECKA</span>
              <span className="text-sm text-gray-400 ml-2">Holdings Corp</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2024 Ecka Holdings Corp. All rights reserved. | Turning Assets to Legacy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamDetails;
