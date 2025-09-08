"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.18, // 18% visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform 
        ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {children}
    </div>
  );
}
