'use client';
import { useState, useEffect } from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RevealSideways from '@/components/RevealSideways';
import Reveal from '@/components/Reveal';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  const config = {
    videoUrl: '/Hero_Video.mp4',
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const generatedParticles = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id='hero' className="min-h-[739px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      
      {/* Enhanced Dynamic Background */}
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
          {particles.map((particle, i) => (
            <div
              key={i}
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
      
      {/* CSS Animations */}
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
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen 2xl:min-h-[1108px] flex items-center justify-center py-8 sm:py-12">
        <Navbar />
        <div className="max-w-7xl 2xl:max-w-[1368px] pt-16 mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Mobile & Tablet: Vertical Stack */}
          <div className="flex flex-col items-center gap-8 sm:gap-12 lg:hidden">
            {/* Video - Mobile & Tablet */}
            <Reveal>
              <div className="relative w-full max-w-sm sm:max-w-md group">
                <div className="aspect-[3/4] w-full relative overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover shadow-2xl border border-white/20 backdrop-blur-sm"
                  >
                    <source src={config.videoUrl} type="video/mp4" />
                  </video>
                  {/* Video glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                {/* Enhanced glow - balanced intensity */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 via-orange-400/20 to-orange-600/25 blur-xl -z-10 scale-102 group-hover:scale-105 transition-transform duration-700" />
                {/* Additional glow layer for subtle depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/12 via-orange-500/8 to-orange-600/12 blur-2xl -z-20 scale-108 animate-pulse" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-400/60" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-400/60" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-400/60" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-400/60" />
              </div>
            </Reveal>

            {/* Content - Mobile & Tablet */}
            <div className="text-center space-y-6 sm:space-y-8 max-w-2xl relative">
              {/* Animated background accent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-xl -z-10" />
              
              <Reveal>
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-orange-400/90 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase relative">
                    <span className="relative z-10">Software Developer & Programmer</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent blur-sm" />
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight px-2 relative">
                    <span className="relative inline-block">
                      Hello, I`m{' '}
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-pulse">
                        Amrit.
                      </span>
                    </span>
                  </h1>
                  
                  <div className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto font-light px-4 relative">
                    <span className="relative z-10">
                      I craft exceptional digital experiences through thoughtful planning 
                      and innovative development, bringing ideas to life with precision and creativity.
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <button 
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    View Resume
                  </button>
                  
                  <button 
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-slate-600/50 hover:border-orange-400/50 text-slate-300 hover:text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-slate-900/20"
                    onClick={() => window.location.href = '#contact'}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get In Touch
                  </button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Desktop: Horizontal Layout (flex-row) */}
          <div className="hidden lg:flex lg:flex-row gap-16 xl:gap-20 items-center justify-center">
            
            {/* Video Content - Left Side */}
            <RevealSideways>
              <div className="flex-shrink-0 relative group">
                <div className="w-[400px] h-[550px] xl:w-[500px] xl:h-[650px] 2xl:w-[600px] 2xl:h-[750px] 3xl:w-[700px] 3xl:h-[850px] relative overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover shadow-2xl border border-white/20 backdrop-blur-sm"
                  >
                    <source src={config.videoUrl} type="video/mp4" />
                  </video>
                  {/* Video hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div> 
                
                {/* Enhanced glow effect - balanced intensity */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-orange-400/25 to-orange-600/30 blur-2xl -z-10 scale-105 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Additional glow layer for subtle depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-orange-500/12 to-orange-600/15 blur-3xl -z-20 scale-115 animate-pulse" />
                
                {/* Corner frame accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-400/70 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-400/70 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-orange-400/70 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-400/70 transform group-hover:scale-110 transition-transform duration-500" />
                
                {/* Side accent lines */}
                <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/60 to-transparent" />
                <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/60 to-transparent" />
              </div>
            </RevealSideways> 

            {/* Text Content - Right Side */}
            <div className="flex-1 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl space-y-8 xl:space-y-10 2xl:space-y-12 relative">
              {/* Background accent */}
              <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-orange-500/3 to-transparent blur-2xl -z-10" />
              
              <RevealSideways>
                <div className="space-y-6 xl:space-y-8">
                  <div className="text-sm xl:text-base font-medium tracking-[0.2em] uppercase text-orange-400/90 relative">
                    <span className="relative z-10">Software Developer & Programmer</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent blur-sm" />
                  </div>
                  
                  <h1 className="text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-light text-white leading-[1.1] tracking-tight relative">
                    <span className="relative inline-block">
                      Hello, I`m{' '}
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                        Amrit.
                      </span>
                    </span>
                  </h1>
                  
                  <div className="text-lg xl:text-xl 2xl:text-2xl text-slate-400 leading-relaxed font-light relative">
                    <span className="relative z-10">
                      I craft exceptional digital experiences through thoughtful planning 
                      and innovative development, bringing ideas to life with precision and creativity.
                    </span>
                  </div>
                </div>
              </RevealSideways>

              <RevealSideways>
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 xl:gap-6">
                  <button 
                    className="group relative inline-flex items-center gap-3 xl:gap-4 px-8 xl:px-12 2xl:px-16 py-4 xl:py-5 2xl:py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-base xl:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/40 overflow-hidden"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <ExternalLink className="w-5 h-5 xl:w-6 xl:h-6 relative z-10" />
                    <span className="relative z-10">View Resume</span>
                  </button>
                  
                  <button 
                    className="group relative inline-flex items-center gap-3 xl:gap-4 px-8 xl:px-12 2xl:px-16 py-4 xl:py-5 2xl:py-6 border border-slate-600/50 hover:border-orange-400/70 text-slate-300 hover:text-white font-medium text-base xl:text-lg transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-slate-900/20 hover:bg-slate-900/40 overflow-hidden"
                    onClick={() => window.location.href = '#contact'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Mail className="w-5 h-5 xl:w-6 xl:h-6 relative z-10" />
                    <span className="relative z-10">Get In Touch</span>
                  </button>
                </div>
              </RevealSideways>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}