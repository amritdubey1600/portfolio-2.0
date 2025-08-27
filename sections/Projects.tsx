'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { projects, Project } from '@/data/ProjectsData';
import Reveal from '@/components/Reveal';
import { useRouter } from 'next/navigation';

interface Category {
  id: string;
  label: string;
  count: number;
}

const categories: Category[] = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'web-app', label: 'Web Apps', count: projects.filter((p: Project) => p.category === 'web-app').length },
  { id: 'aiml', label: 'AI/ML', count: projects.filter((p: Project) => p.category === 'aiml').length }
];

export default function ProjectsSection() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter((project: Project) => project.category === selectedCategory);

  const handleProjectClick = (project: Project): void => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Rich contrasting background to complement hero's blue tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-900/60 via-transparent to-rose-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/40 to-slate-900/80" />
      
      {/* Enhanced grid pattern with warm tones */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.8) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Enhanced floating accent elements with warm tones */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400/80 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-32 right-16 w-4 h-4 bg-rose-400/70 rounded-full blur-sm" />
      <div className="absolute bottom-24 left-20 w-2 h-2 bg-orange-500/90 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-40 right-12 w-3 h-3 bg-pink-400/60 rounded-full blur-sm" />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500 rounded-full blur-sm" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-rose-300/80 rounded-full blur-sm animate-pulse" />
      
      {/* Warm light rays contrasting with hero's cool tones */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-orange-400/70 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-rose-400/60 to-transparent" />
      <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-pink-400/50 to-transparent" />
      
      {/* Additional atmospheric elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-orange-400/20 transform rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-orange-500/25 transform rotate-12 animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
          {/* Enhanced background accent for text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-600/20 blur-3xl -z-10" />
          
          <Reveal>
          <div className="space-y-4 lg:space-y-6">
            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight relative">
              <span className="relative inline-block">
                Projects
                {/* Enhanced text shadow effect */}
                <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-600 -z-10 blur-sm opacity-40" />
              </span>
            </h2>
            
            {/* Subheader */}
            <div className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto relative">
              <span className="relative z-10">
                From dynamic web applications to intelligent AI solutions - my diversified portfolio showcase.
                <br className="hidden sm:block" />
                <span className="text-transparent font-semibold px-1 sm:pr-1.5 bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  Click 
                </span>
                on each project card to view the project.
              </span>
              {/* Enhanced text highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/15 to-orange-600/10 blur-xl -z-10" />
            </div>
          </div>
          </Reveal>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400" />
            <div className="w-2 h-2 bg-orange-400/80 rounded-full" />
            <div className="w-12 h-px bg-slate-400" />
            <div className="w-1 h-1 bg-orange-500/60 rounded-full" />
            <div className="w-12 h-px bg-slate-400" />
            <div className="w-2 h-2 bg-orange-400/80 rounded-full" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400" />
          </div>
        </div>

        {/* Category Toggle Buttons */}
        <div className="relative mb-12 lg:mb-16">
          {/* Enhanced glow effect around toggle area */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 via-orange-500/15 to-orange-400/10 blur-xl -z-10" />
          
          <Reveal>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-600/50 hover:border-orange-400/50'
                }`}
              >
                <span className="relative z-10 flex items-baseline">
                  {category.label}
                  <span className="ml-3 text-xs opacity-75 font-normal">({category.count})</span>
                </span>
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-md -z-10" />
                )}
              </button>
            ))}
          </div>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {/* Enhanced glow effect around projects area */}
          <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/15 via-orange-500/20 to-orange-400/15 blur-2xl -z-10" />
          
          <div className="relative px-6">
            {/* Enhanced corner decorations */}
            <div className="absolute m-2 md:m-0 -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-400/60" />
            <div className="absolute m-2 md:m-0 -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-orange-400/60" />
            <div className="absolute m-2 md:m-0 -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-orange-400/60" />
            <div className="absolute m-2 md:m-0 -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-400/60" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
              {filteredProjects.map((project: Project) => (
                <Reveal key={project.id}>
                  <div
                    onClick={() => handleProjectClick(project)}
                    className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 hover:border-orange-400/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden h-full flex flex-col"
                  >
                    {/* Enhanced glow on hover */}
                    <div className="absolute -inset-px bg-gradient-to-r from-orange-500/0 via-orange-400/0 to-orange-600/0 group-hover:from-orange-500/20 group-hover:via-orange-400/30 group-hover:to-orange-600/20 blur-sm transition-all duration-500 -z-10" />
                    
                    {/* Project Image */}
                    <div className="relative h-48 lg:h-56 overflow-hidden flex-shrink-0">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                          <div className="text-slate-400 text-4xl font-light">{project.title.charAt(0)}</div>
                        </div>
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-orange-400/30">
                        <span className="text-orange-300 text-xs font-medium capitalize">
                          {project.category === 'web-app' ? 'Web App' : 'AI/ML'}
                        </span>
                      </div>

                      {/* Launch overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm px-6 py-3 border border-orange-400/30">
                          <span className="text-white font-medium text-sm">View Project</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 lg:p-8 flex-grow flex flex-col">
                      {/* Title and Date */}
                      <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.date}
                        </div>
                      </div>
                      
                      {/* Tags - Display all tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-700/60 text-orange-300 text-xs border border-slate-600/50 hover:bg-slate-600/60 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Click indicator */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-orange-400 text-sm group-hover:text-orange-300 transition-colors duration-300">
                          Click to view project →
                        </span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-orange-400/60 rounded-full group-hover:bg-orange-400 transition-colors duration-300" />
                          <div className="w-2 h-2 bg-orange-500/40 rounded-full group-hover:bg-orange-500 transition-colors duration-300" />
                          <div className="w-2 h-2 bg-orange-600/30 rounded-full group-hover:bg-orange-600 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            
            {/* Enhanced side accent lines */}
            <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/70 to-transparent" />
            <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-400/70 to-transparent" />
          </div>
          
          {/* Instructions */}
          <Reveal>
          <div className="text-center mt-8 lg:mt-12">
            <p className="text-slate-400 text-xs lg:text-sm font-light">
              Web Applications • AI/ML Projects • Full-Stack Solutions
            </p>
          </div>
          </Reveal>
        </div>
        
      </div>
      
      {/* CSS for additional animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}