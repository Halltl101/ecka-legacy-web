
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Thesis from '../components/Thesis';
import RoyaltyAnatomy from '../components/RoyaltyAnatomy';
import Gateways from '../components/Gateways';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Thesis />
      <RoyaltyAnatomy />
      <Gateways />
      <News />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
