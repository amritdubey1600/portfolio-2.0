'use client';
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from 'react';
import { carouselData, carouselDatatype } from "@/data/CarouselData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function ProjectCarousel({ id }:{ id: string }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const project: carouselDatatype | undefined = carouselData.find((val) => val.id === id);

  React.useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('project-carousel')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const carousel = document.getElementById('project-carousel');
    if (carousel) {
      carousel.addEventListener('mousemove', handleMouseMove);
      return () => carousel.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="w-full space-y-6">
      
      {/* Main Carousel Container with Enhanced Styling */}
      <div 
        id="project-carousel"
        className="carousel-container relative w-full p-6 group glow-orange-strong"
      >
        
        {/* Interactive glow that follows mouse */}
        <div 
          className="absolute w-[300px] h-[300px] opacity-20 blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.6) 0%, rgba(249, 115, 22, 0.3) 40%, transparent 80%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {project!.images.map((val, index) => (
              <CarouselItem key={index}>
                  <div className="carousel-item relative w-full h-[150px] sm:h-[250px] md:h-[325px] lg:h-[425px] xl:h-[490px]">
                  
                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image 
                      fill
                      className="object-cover"
                      src={val}
                      alt='project-screenshot'
                    />
                    
                    {/* Corner accent lines */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-2 bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-orange-400/50 text-white" />
          <CarouselNext className="right-2 bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-orange-400/50 text-white" />
        </Carousel>

        {/* Progress Bar */}
        <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-slate-700/50 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ease-out"
            style={{ width: `${((selectedIndex + 1) / project!.images.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Indicators Row */}
      <div className="flex items-center justify-center gap-3">
        {project!.images.map((_, index) => (
          <button
            key={index}
            className={`relative w-10 h-2 transition-all duration-300 ${
              index === selectedIndex 
                ? "bg-gradient-to-r from-orange-500 to-orange-600" 
                : "bg-slate-600/50 hover:bg-slate-500/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          >
            {/* Active indicator glow */}
            {index === selectedIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 to-orange-600/40 blur-sm" />
            )}
          </button>
        ))}
      </div>

      {/* Clean slide counter */}
      <div className="text-center">
        <span className="text-sm text-slate-400">
          <span className="text-orange-400 font-medium">{selectedIndex + 1}</span> of {project!.images.length}
        </span>
      </div>
    </div>
  );
}