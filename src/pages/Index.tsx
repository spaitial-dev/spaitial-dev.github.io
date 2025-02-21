import React, { useState, useEffect } from 'react';
import Particles from '../components/Particles';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScroll(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <Particles />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">sp<span className="text-primary">AI</span>tial</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center pt-16 md:pt-0">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                We are building{" "}
                <span className="text-primary">3D foundational models</span>
              </h2>
              <p className="text-xl text-gray-300">
                Revolutionizing the future of 3D content generation and understanding
              </p>
            </div>
            <div className="animate-float-slow w-full max-w-3xl mx-auto mt-8 md:mt-0">
              <img
                src="theme.jpg"
                alt="3D Room Visualization"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-16 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">→ <a href="https://jobs.ashbyhq.com/spaitial" className="text-primary hover:text-primary/80 transition-colors">Join Our Team</a> ←</h2>
        </div>
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-gray-300">
            Contact: <a href="mailto:info@spaitial.ai" className="text-primary hover:text-primary/80 transition-colors">info@spaitial.ai</a>
          </p>
        </div>
      </section>

      {/* Contact Section - Added shadow to top border */}
      {/* <section className="relative py-12 bg-black/30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]"> */}
      {/* </section> */}
    </div>
  );
};

export default Index;