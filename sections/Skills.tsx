'use client';
import Reveal from '@/components/Reveal';
import SkillGrid from '@/components/SkillGrid';
import React from 'react';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-900/60 via-transparent to-rose-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/40 to-slate-900/80" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 146, 60, 0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating accents */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400/80 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-32 right-16 w-4 h-4 bg-rose-400/70 rounded-full blur-sm" />
      <div className="absolute bottom-24 left-20 w-2 h-2 bg-orange-500/90 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-40 right-12 w-3 h-3 bg-pink-400/60 rounded-full blur-sm" />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500 rounded-full blur-sm" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-rose-300/80 rounded-full blur-sm animate-pulse" />

      {/* Light rays */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-orange-400/70 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-rose-400/60 to-transparent" />
      <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-pink-400/50 to-transparent" />

      {/* Atmospheric elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-orange-400/20 transform rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-orange-500/25 transform rotate-12 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
          <Reveal>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-600/20 blur-3xl -z-10" />

            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight relative">
                <span className="relative inline-block">
                  Skills
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-600 -z-10 blur-sm opacity-40" />
                </span>
              </h2>
              <div className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto relative">
                <span className="relative z-10">
                  From frontend frameworks to AI integration - my comprehensive tech stack.
                  <br className="hidden sm:block" />
                  <span className="text-transparent font-semibold px-1 sm:pr-1.5 bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                    Hover 
                  </span>
                  over each skill card to explore the technologies I work with daily.
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/15 to-orange-600/10 blur-xl -z-10" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex items-center justify-center space-x-4 pt-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400" />
              <div className="w-2 h-2 bg-orange-400/80 rounded-full" />
              <div className="w-12 h-px bg-slate-400" />
              <div className="w-1 h-1 bg-orange-500/60 rounded-full" />
              <div className="w-12 h-px bg-slate-400" />
              <div className="w-2 h-2 bg-orange-400/80 rounded-full" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400" />
            </div>
          </Reveal>
        </div>

        {/* SkillGrid Section */}
        <div className="relative">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/15 via-orange-500/20 to-orange-400/15 blur-2xl -z-10" />

            <Reveal>
              <div className="text-center mb-8 lg:mb-12">
                <p className="text-slate-400 text-sm lg:text-base font-light max-w-2xl mx-auto">
                  Each card represents a technology in my arsenal - from React and Next.js for modern web development 
                  to Python and AI tools for intelligent applications. Hover to explore my proficiency levels.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative">
                <div className="absolute m-2 md:m-0 -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-400/60" />
                <div className="absolute m-2 md:m-0 -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-orange-400/60" />
                <div className="absolute m-2 md:m-0 -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-orange-400/60" />
                <div className="absolute m-2 md:m-0 -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-400/60" />

                <SkillGrid />

                <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/70 to-transparent" />
                <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/70 to-transparent" />
              </div>
            </Reveal>

            <Reveal>
              <div className="text-center mt-8 lg:mt-12">
                <p className="text-slate-400 text-xs lg:text-sm font-light">
                  Frontend • Backend • Databases • AI/ML • Version Control
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
