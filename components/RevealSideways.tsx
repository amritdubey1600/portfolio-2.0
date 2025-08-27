"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface RevealSidewaysProps {
  children: ReactNode;
}

export default function RevealSideways({ children }: RevealSidewaysProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2, // 20% visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform 
        ${isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      `}
    >
      {children}
    </div>
  );
}
