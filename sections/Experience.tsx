'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ExternalLink, Code, Award, Building } from 'lucide-react';
import { experiences } from '@/data/ExperiencesData';
import Reveal from '@/components/Reveal';

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const ExperiencesSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const nextSibling = target.nextSibling as HTMLElement;
    target.style.display = 'none';
    if (nextSibling) {
      nextSibling.style.display = 'flex';
    }
  };

  return (
    <section id="experiences" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-20">
      
      {/* Enhanced Dynamic Background - Matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive gradient orb that follows mouse */}
        <div 
          className="absolute w-[500px] h-[500px] opacity-20 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, rgba(249, 115, 22, 0.25) 30%, rgba(234, 88, 12, 0.08) 60%, transparent 100%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Layered gradient elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-500/15 via-orange-400/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-600/12 via-orange-500/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-orange-400/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-orange-400/10 transform rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-orange-500/15 transform rotate-12 animate-pulse" />
      </div>

      {/* CSS Animations - Matching Hero */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @keyframes shimmer {
          0% { 
            transform: translateX(-120%); 
          }
          100% { 
            transform: translateX(120%); 
          }
        }

        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.2), transparent);
          transform: translateX(-120%);
          animation: shimmer 2s infinite;
        }

        .skill-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent);
          transform: translateX(-120%) skewX(-12deg);
          transition: transform 0.7s ease-out;
        }

        .skill-shimmer:hover::before {
          transform: translateX(120%) skewX(-12deg);
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 relative">
          {/* Background accent */}
          <Reveal>
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-xl -z-10" />
          
          <div className="space-y-4 lg:space-y-6">
            <div className="text-orange-400/90 text-sm font-medium tracking-[0.2em] uppercase relative">
              <span className="relative z-10">Professional Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent blur-sm" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight relative">
              <span className="relative inline-block">
                My{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  Experience
                </span>
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light relative">
              <span className="relative z-10">
                A collection of roles and contributions that shaped my journey as a developer, 
                each experience adding depth to my technical expertise and collaborative skills.
              </span>
            </p>
          </div>
        </Reveal>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 lg:space-y-12">
          {experiences.map((experience) => (
            <Reveal key={experience.id}>
            <div 
              className={`group relative overflow-hidden transform transition-all duration-700 hover:scale-[1.02]`}
              onMouseEnter={() => setHoveredCard(experience.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with sophisticated styling */}
              <div className="relative backdrop-blur-sm bg-slate-900/20 border border-slate-600/30 hover:border-orange-400/50 transition-all duration-500 overflow-hidden">
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-orange-400/10 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Enhanced Shimmer effect with full width coverage */}
                <div className={`absolute inset-0 overflow-hidden ${hoveredCard === experience.id ? 'shimmer' : ''}`} />
                
                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                    
                    {/* Company Logo & Info */}
                    <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6">
                      <div className="relative group/logo">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative overflow-hidden border border-slate-600/50 group-hover:border-orange-400/60 transition-colors duration-500">
                          <Image
                            src={experience.img} 
                            alt={experience.company}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                            onError={handleImageError}
                            unoptimized
                          />
                          <div className="hidden w-full h-full bg-slate-800/50 items-center justify-center absolute inset-0">
                            <Building className="w-8 h-8 text-orange-400/70" />
                          </div>
                        </div>
                        {/* Logo glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-600/20 blur-xl -z-10 scale-110 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Date & Location */}
                      <div className="text-center lg:text-left space-y-2">
                        <div className="flex items-center gap-2 text-orange-400/80 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {experience.date}
                        </div>
                        <div className="text-slate-400 text-sm">
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-6">
                      
                      {/* Role & Company */}
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white group-hover:text-orange-100 transition-colors duration-500">
                          {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-orange-400/90 font-medium">
                          <Award className="w-5 h-5" />
                          <span className="text-lg">{experience.company}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-slate-400 leading-relaxed font-light text-base lg:text-lg">
                        {experience.desc}
                      </div>

                      {/* Skills */}
                      {experience.skills && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-orange-400/80 font-medium text-sm uppercase tracking-wider">
                            <Code className="w-4 h-4" />
                            Technologies & Skills
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {experience.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="group/skill relative px-4 py-2.5 bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-slate-800/60 border border-slate-600/40 text-slate-200 text-sm font-medium hover:border-orange-400/60 hover:text-white hover:from-slate-700/60 hover:via-slate-700/40 hover:to-slate-700/60 transition-all duration-300 cursor-default backdrop-blur-sm overflow-hidden skill-shimmer"
                              >
                                {/* Skill badge glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/15 to-orange-600/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                                
                                {/* Skill text */}
                                <span className="relative z-10">{skill}</span>
                                
                                {/* Corner accents for skills */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-400/0 group-hover/skill:border-orange-400/60 transition-colors duration-300" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-400/0 group-hover/skill:border-orange-400/60 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-400/0 group-hover/skill:border-orange-400/60 transition-colors duration-300" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-400/0 group-hover/skill:border-orange-400/60 transition-colors duration-300" />
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-400/0 group-hover:border-orange-400/60 transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-400/0 group-hover:border-orange-400/60 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-400/0 group-hover:border-orange-400/60 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-400/0 group-hover:border-orange-400/60 transition-colors duration-500" />
              </div>

              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-600/10 blur-xl -z-10 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
        <div className="text-center mt-16 lg:mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-xl -z-10" />
          
          <div className="space-y-6">
            <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work? Let`s connect and explore new possibilities together.
            </p>
            
            <button 
              className="group relative inline-flex items-center gap-3 px-8 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-base lg:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/40 overflow-hidden"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
              <span className="relative z-10">Let`s Work Together</span>
            </button>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ExperiencesSection;