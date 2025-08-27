'use client';
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

export default function FooterProjects() {
  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden">
      {/* Clean background with subtle warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-rose-900/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Minimal floating elements */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse" />
      <div className="absolute top-32 right-24 w-1 h-1 bg-rose-400/50 rounded-full" />
      <div className="absolute bottom-20 left-16 w-1 h-1 bg-orange-500/70 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-20 w-1 h-1 bg-pink-400/40 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1 - Name */}
          <div className="md:col-span-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight name-glow">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Amrit Dubey.
              </span>
            </h1>
            <p className="text-slate-400 text-lg font-light mt-4 max-w-sm">
              Full-stack developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Column 2 - Navigation */}
        <div className='grid grid-cols-2'>
          <div className="md:col-span-1">
            <h3 className="text-slate-300 text-sm font-semibold tracking-wider uppercase mb-6">Navigation</h3>
            <nav className="space-y-4">
              <Link href="/#hero" className="block text-slate-400 hover:text-orange-400 transition-colors duration-300 text-base">
                Home
              </Link>
              <Link href="/#experiences" className="block text-slate-400 hover:text-orange-400 transition-colors duration-300 text-base">
                Experience
              </Link>
              <Link href="/#skills" className="block text-slate-400 hover:text-orange-400 transition-colors duration-300 text-base">
                Skills
              </Link>
              <Link href="/#projects" className="block text-slate-400 hover:text-orange-400 transition-colors duration-300 text-base">
                Projects
              </Link>
              <Link href="/#contact" className="block text-slate-400 hover:text-orange-400 transition-colors duration-300 text-base">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Connect */}
          <div className="md:col-span-1">
            <h3 className="text-slate-300 text-sm font-semibold tracking-wider uppercase mb-6">Connect</h3>
            <div className="space-y-4">
              
              {/* GitHub */}
              <a href="https://github.com/amritdubey1600/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-300 group">
                <Github className="w-5 h-5" />
                <span className="text-base">GitHub</span>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/amrit-dubey-75449b262/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-300 group">
                <Linkedin className="w-5 h-5" />
                <span className="text-base">LinkedIn</span>
              </a>
              
              {/* Twitter */}
              <a href="https://leetcode.com/u/amritdubey22003/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-300 group">
                <ExternalLink className="w-5 h-5" />
                <span className="text-base">Leetcode</span>
              </a>
              
              {/* Email */}
              <a href="mailto:amritdubey22003@gmail.com"
                 className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-300 group">
                <Mail className="w-5 h-5" />
                <span className="text-base">Email</span>
              </a>
            </div>

            </div>
          </div>

        </div>
        </Reveal>

        {/* Bottom section */}
        <Reveal>
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <p className="font-light">
              © 2025 Amrit Dubey. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs">Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
        </Reveal>

      </div>
      
        {/* Sophisticated and elegant glow animation */}
        <style jsx>{`
          .name-glow {
            animation: elegantGlow 4s ease-in-out infinite;
          }

          @keyframes elegantGlow {
            0%, 100% {
              filter: drop-shadow(0 0 0.5px rgba(251, 146, 60, 0.3));
              opacity: 0.95;
            }
            50% {
              filter: drop-shadow(0 0 2px rgba(251, 146, 60, 0.4)) 
                      drop-shadow(0 0 4px rgba(251, 146, 60, 0.2));
              opacity: 1;
            }
          }
        `}</style>
    </footer>
  );
}