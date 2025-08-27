'use client';
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/ProjectsData';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FooterProjects from '@/sections/FooterProjects';

export default function ProjectsPage() {
  const params = useParams();
  const projectId = params.id as string;

  const router = useRouter();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  const project = projects.find(p => p.id === projectId) || projects[0];
  const currentProjectIndex = projects.findIndex(p => p.id === projectId) || 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const generatedParticles = Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 8,
    }));
    setParticles(generatedParticles);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentProjectIndex + 1) % projects.length
      : (currentProjectIndex - 1 + projects.length) % projects.length;
    
    router.push(`/projects/${projects[newIndex].id}`);
  };

  return (
    <div className="min-h-fit bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-orange-400/20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive gradient orb */}
        <div 
          className="absolute w-[600px] h-[600px] opacity-15 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.6) 0%, rgba(249, 115, 22, 0.3) 35%, rgba(234, 88, 12, 0.1) 70%, transparent 100%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Layered gradient elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/12 via-orange-400/6 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-orange-600/15 via-orange-500/8 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Sharp geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 border border-orange-400/8 transform rotate-12 animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border border-orange-500/10 transform rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .glow-orange {
          box-shadow: 
            0 0 20px rgba(251, 146, 60, 0.3),
            0 0 40px rgba(251, 146, 60, 0.2),
            0 0 80px rgba(251, 146, 60, 0.1);
        }

        .glow-orange-strong {
          box-shadow: 
            0 0 30px rgba(251, 146, 60, 0.4),
            0 0 60px rgba(251, 146, 60, 0.3),
            0 0 100px rgba(251, 146, 60, 0.2);
        }

        .carousel-container {
          position: relative;
          background: rgba(30, 41, 59, 0.3);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(71, 85, 105, 0.5);
        }

        .carousel-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(251, 146, 60, 0.05) 0%, 
            rgba(249, 115, 22, 0.03) 50%, 
            rgba(234, 88, 12, 0.05) 100%);
          pointer-events: none;
        }

        .carousel-item {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(71, 85, 105, 0.3);
          transition: all 0.3s ease;
          overflow: hidden;
          position: relative;
        }

        .carousel-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(251, 146, 60, 0.1) 0%, 
            transparent 50%, 
            rgba(251, 146, 60, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .carousel-item:hover::before {
          opacity: 1;
        }

        .carousel-item:hover {
          border-color: rgba(251, 146, 60, 0.4);
          box-shadow: 
            0 0 20px rgba(251, 146, 60, 0.2),
            0 0 40px rgba(251, 146, 60, 0.1);
        }

        .unified-nav {
          backdrop-filter: blur(20px);
          background: rgba(15, 23, 42, 0.7);
          border-bottom: 1px solid rgba(71, 85, 105, 0.2);
        }

        .nav-item {
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          transform: translateY(-1px);
        }
      `}</style>

      {/* Unified Navigation Header */}
      <div className="relative z-50">
        <div className="unified-nav sticky top-0 w-full py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Left Section: Back Button */}
              <Link 
                href="/#projects" 
                scroll={true} 
                className="nav-item group flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-all duration-300"
              >
                <div className="w-9 h-9 border border-slate-600/50 group-hover:border-orange-400/70 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-400/10">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium hidden sm:block">Back to Projects</span>
              </Link>

              {/* Center Section: Project Title (Hidden on mobile, shown on larger screens) */}
              <div className="hidden lg:flex items-center">
                <h1 className="text-lg font-semibold text-white drop-shadow-lg">
                  {project?.title}
                </h1>
              </div>

              {/* Right Section: Project Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-slate-800/30 border border-slate-600/30 px-3 py-2">
                  <button
                    onClick={() => navigateProject('prev')}
                    className="nav-item w-7 h-7 hover:bg-orange-400/20 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-400"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <div className="px-3 py-1 text-xs text-slate-400 min-w-[3rem] text-center">
                    {currentProjectIndex + 1} / {projects.length}
                  </div>
                  
                  <button
                    onClick={() => navigateProject('next')}
                    className="nav-item w-7 h-7 hover:bg-orange-400/20 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-400"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-fit">
        {/* Project Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12">
          <div className="space-y-12">

            {/* Title and Action Buttons Row */}
            <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Project Title */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                    {project?.title}
                  </span>
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 lg:flex-shrink-0">
                <button
                  onClick={() => window.open(project?.webapp, '_blank')}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 hover:scale-105 glow-orange overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <ExternalLink className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                </button>
                
                <button
                  onClick={() => window.open(project?.github, '_blank')}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 border border-slate-600/50 hover:border-orange-400/70 text-slate-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 bg-slate-900/20 hover:bg-slate-900/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Github className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Source Code</span>
                </button>
              </div>
            </div>
            </Reveal>

            {/* Technologies Section */}
            <Reveal>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <Tag className="w-4 h-4" />
                <span className="font-medium">Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-slate-800/40 border border-slate-700/50 text-slate-300 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>

            <hr className="border-slate-700/50" />

            {/* Project Carousel */}
            <Reveal>
            <div className="w-full relative">
              {/* Simple Frame */}
              <div className="relative pb-4 border border-slate-600/50 hover:border-orange-400/40 transition-colors duration-300 overflow-hidden">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-400/60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-400/60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-400/60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-400/60"></div>
                
                <ProjectCarousel id={projectId}/>  
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 via-orange-400/16 to-orange-600/25 blur-2xl -z-10 scale-110 hover:scale-120 transition-transform duration-700" />
            </div>
            </Reveal>

            <hr className="border-slate-700/50" />

            {/* Project Description */}
            <Reveal>
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-orange-600"></span>
                About This Project
              </h2>
              <div className="max-w-4xl">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {project?.description}
                </p>
              </div>
            </div>
            </Reveal>
            
            <hr className="border-slate-700/50" />

            {/* Project Features */}
            <Reveal>
            <div>
              <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-orange-600"></span>
                Project Highlights
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.highlights.map((val, index) => (
                  <div 
                    key={index}
                    className="p-6 border border-slate-700/30 bg-slate-800/10 hover:border-orange-400/30 transition-all duration-300"
                  >
                    <h3 className="text-orange-400 font-medium mb-2">{val[0]}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {val[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

          </div>
        </div>
      </div>
      <FooterProjects />
    </div>
  );
}