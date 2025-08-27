'use client';
import ContactSection from '@/sections/Contact';
import ExperiencesSection from '@/sections/Experience';
import Footer from '@/sections/Footer';
import HeroSection from '@/sections/Hero';
import ProjectsSection from '@/sections/Projects';
import SkillsSection from '@/sections/Skills';
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const config = {
    videoUrl: '/Hero_Video.mp4',
  };

  // Scroll to hash AFTER main content is shown
  useEffect(() => {
    if (showMainContent && window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showMainContent]);

  // Preload video during loading screen
  useEffect(() => {
    if (hasVideoLoaded) return;

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;
    
    const handleVideoLoad = () => {
      if (hasVideoLoaded) return;
      console.log('Video preloaded successfully');
      setHasVideoLoaded(true);
      setVideoLoaded(true);
    };

    const handleVideoError = (error: Event) => {
      console.error('Video preload error:', error);
      if (hasVideoLoaded) return;
      setHasVideoLoaded(true);
      setVideoLoaded(true); // Continue even with error
    };

    video.addEventListener('loadeddata', handleVideoLoad, { once: true });
    video.addEventListener('canplaythrough', handleVideoLoad, { once: true });
    video.addEventListener('error', handleVideoError, { once: true });
    
    video.src = config.videoUrl;
    videoRef.current = video;

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplaythrough', handleVideoLoad);
      video.removeEventListener('error', handleVideoError);
    };
  }, [hasVideoLoaded, config.videoUrl]);

  // Progress and loading logic
  useEffect(() => {
    const minLoadTime = 1000;
    const startTime = Date.now();

    const progressInterval: NodeJS.Timeout = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime;
        const naturalProgress = prev + Math.random() * 3 + 1;
        
        // Don't complete until minimum time has passed AND video is loaded
        if (elapsed < minLoadTime || !videoLoaded) {
          return Math.min(naturalProgress, 93);
        }
        
        if (naturalProgress >= 100) {
          setIsComplete(true);
          clearInterval(progressInterval);
          setTimeout(() => setShowMainContent(true), 600);
          return 100;
        }
        return naturalProgress;
      });
    }, 80);

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [videoLoaded]);

  // Fallback timeout (reduced since we're preloading)
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      if (!showMainContent) {
        console.log('Fallback timeout triggered - showing content');
        setVideoLoaded(true);
      }
    }, 10000); // 10s

    return () => clearTimeout(fallbackTimeout);
  }, [showMainContent]);

  // Show main content after loading is complete
  if (showMainContent) {
    return (
      <>
        <HeroSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </>
    );
  }

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden z-50 ${isComplete ? 'animate-slideUp' : ''}`}>
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridSlide 20s linear infinite',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/15 via-orange-400/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-orange-600/12 via-orange-500/6 to-transparent rounded-full blur-3xl animate-floatReverse" />
        
        {/* Subtle Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-twinkle"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Name with subtle animation */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight">
            <span className="inline-block animate-glow">Amrit</span>
            <span className="mx-4 text-orange-500 animate-pulse">•</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-shimmer">
              Dubey
            </span>
          </h1>
          
          <div className="text-base md:text-lg font-medium tracking-[0.3em] uppercase text-orange-400/90 animate-fadeInUp">
            Software Developer
          </div>
        </div>

        {/* Loading Text with breathing effect */}
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl text-slate-300 font-light animate-breathe">
            {!videoLoaded ? 'Loading Media...' : 'Preparing Portfolio...'}
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-lg space-y-4">
          <div className="relative h-2 bg-slate-700/30 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-300 ease-out shadow-lg shadow-orange-500/30"
              style={{ width: `${progress}%` }}
            />
            {/* Progress shine effect */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transition-all duration-300 ease-out animate-shine"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-center">
            <span className="text-orange-400 font-medium text-lg tabular-nums animate-countUp">
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Loading status indicator */}
          <div className="text-center text-sm text-slate-400">
            <div className="flex items-center justify-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${videoLoaded ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`} />
              <span>{videoLoaded ? 'Media Ready' : 'Loading Media'}</span>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-1 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(251, 146, 60, 0.3); }
          50% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.5); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }

        @keyframes countUp {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatReverse {
          animation: floatReverse 8s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-in-out forwards;
        }

        .animate-countUp {
          animation: countUp 0.3s ease-out;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}